import { Editor as Edit } from "@monaco-editor/react";

interface childs {
  lg: string;
  value: string;
  onChangee: any;
  theme: string;
}

const Editor: React.FC<childs> = ({ lg, value, onChangee, theme }) => {
  const handleChange = (code: any) => {
    onChangee(code);
  };

  return (
    <div className="mt-4 rounded">
      <Edit
        height="500px"
        width="100%"
        defaultLanguage="html"
        language={lg}
        theme={theme}
        value={value}
        onChange={handleChange}
        className="rounded"
      />
    </div>
  );
};

export default Editor;
