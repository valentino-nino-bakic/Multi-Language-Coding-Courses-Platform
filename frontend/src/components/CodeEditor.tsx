
import MonacoEditor from '@monaco-editor/react';


interface CodeEditorProps {
    language: string;
}


const CodeEditor: React.FC<CodeEditorProps> = ({ language }) => {
    return (
        <div style={{ height: '400px', width: '100%' }}>
            <MonacoEditor
                height="100%"
                defaultLanguage={language}
                defaultValue="// Start writing your code"
                theme="vs-dark"
            />
        </div>
    );
};


export default CodeEditor;
