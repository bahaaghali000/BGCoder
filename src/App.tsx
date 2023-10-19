import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Editor from "./components/Editor";

const App: React.FC = () => {
  const [js, setJS] = useState<string>(localStorage.getItem("js") || "");
  const [html, setHtml] = useState<string>(localStorage.getItem("html") || "");
  const [css, setCss] = useState<string>(localStorage.getItem("css") || "");

  const [lg, setLg] = useState("html");

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "vs-dark"
  );

  useEffect(() => {
    localStorage.setItem("js", js);
    localStorage.setItem("html", html);
    localStorage.setItem("css", css);
    localStorage.setItem("theme", theme);
  }, [js, html, css, theme]);

  let srcDoc: string = `
    <html>
      <head>
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}

        <script>${js}</script>
      </body>
    </html>
  `;

  return (
    <div className="app">
      <Container>
        <Row>
          <Col lg="8" sm="12" className="bg-dark p-2 rounded mb-5">
            <div className="d-flex justify-content-between align-items-center">
              <div className="select-lg">
                <select
                  name=""
                  id=""
                  className="select rounded"
                  onChange={(e) => setLg(e.target.value)}
                >
                  <option value="html" className="">
                    HTMl
                  </option>
                  <option value="css" className="">
                    CSS
                  </option>
                  <option value="typescript" className="">
                    Typescript
                  </option>
                </select>
              </div>

              <select
                className="select w-25 rounded"
                onChange={(e) => setTheme(e.target.value)}
              >
                <option value="vs-dark">Visual Studio Dark</option>
                <option value="vs">Visual Studio</option>
                <option value="hc-black">High Contrast Black</option>
              </select>
            </div>

            <Editor
              lg={lg}
              onChangee={
                lg === "html" ? setHtml : lg === "css" ? setCss : setJS
              }
              value={lg === "html" ? html : lg === "css" ? css : js}
              theme={theme}
            />
          </Col>

          <Col lg="4" sm="12">
            <div className="output">
              <iframe
                srcDoc={srcDoc}
                title="Output"
                frameBorder="0"
                width="100%"
                height="100%"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
