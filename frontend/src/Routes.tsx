import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import CodeEditor from './components/CodeEditor';
import UserTerminal from './components/UserTerminal';


const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/js" element={
                    <>
                        <CodeEditor language="javascript" />
                        <UserTerminal language="javascript" />
                    </>
                } />

                <Route path="/php" element={
                    <>
                        <CodeEditor language="php" />
                        <UserTerminal language="php" />
                    </>
                } />

                <Route path="/python" element={
                    <>
                        <CodeEditor language="python" />
                        <UserTerminal language="python" />
                    </>
                } />
            </Routes>
        </BrowserRouter>
    )
}


export default AppRoutes;