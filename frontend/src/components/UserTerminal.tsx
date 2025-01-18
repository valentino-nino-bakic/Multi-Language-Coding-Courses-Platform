import { useEffect, useRef } from 'react';
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';


interface TerminalProps {
    language: string;
}


const UserTerminal: React.FC<TerminalProps> = ({ language }) => {
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (terminalRef.current) {
            const term = new Terminal();
            term.open(terminalRef.current);
            term.writeln(`Welcome to the ${language} terminal!`);
            term.writeln('Type your code and execute it below:');
        }
    }, [language]);

    return <div ref={terminalRef} style={{ height: '300px', width: '100%' }} />;
}



export default UserTerminal;
