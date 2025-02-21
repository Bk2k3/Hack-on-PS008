import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ code, setCode, language = 'javascript' }) => {
  return (
    <Editor
      height="60vh"
      defaultLanguage={language}
      value={code}
      onChange={(value) => setCode(value)}
      theme="vs-dark"
    />
  );
};

export default CodeEditor;
