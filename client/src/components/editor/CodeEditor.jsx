import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ value, onChange, language, height }) => {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  const handleEditorChange = (value) => {
    onChange(value);
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <Editor
        height={height || "300px"}
        language={language || "javascript"}
        value={value}
        theme="vs-dark"
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          automaticLayout: true,
          scrollBeyondLastLine: false
        }}
      />
    </div>
  );
};

export default CodeEditor;
