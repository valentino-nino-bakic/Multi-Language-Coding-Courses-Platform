import { useEffect, useRef } from 'react';
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';


interface TerminalProps {
    language: string;
}


const UserTerminal: React.FC<TerminalProps> = ({ language }) => {
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (terminalRef.current) {
            const term = new Terminal();
            const fitAddon = new FitAddon();
            term.loadAddon(fitAddon);
            term.open(terminalRef.current);
            fitAddon.fit();

            term.writeln(`Welcome to the ${language} terminal!`);
            term.writeln('Type your code and execute it below:');

            term.onData(data => {
                term.write(data);
            });

            return () => {
                term.dispose();
            }
        }
    }, [language]);


    return (
        <div ref={terminalRef} style={{ height: '100%' }} />
    )
}



export default UserTerminal;
