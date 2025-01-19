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
                        <div className="container-fluid d-flex g-0 vh-100">
                            <div style={{ flex: 0.8 }}>
                                <CodeEditor language="javascript" />
                            </div>
                            <div style={{ flex: 0.2 }}>
                                <UserTerminal language="javascript" />
                            </div>
                        </div>
                    </>
                } />

                <Route path="/php" element={
                    <>
                        <div className="container-fluid d-flex g-0 vh-100">
                            <div style={{ flex: 0.8 }}>
                                <CodeEditor language="php" />
                            </div>
                            <div style={{ flex: 0.2 }}>
                                <UserTerminal language="php" />
                            </div>
                        </div>
                    </>
                } />

                <Route path="/python" element={
                    <>
                        <div className="container-fluid d-flex g-0 vh-100">
                            <div style={{ flex: 0.8 }}>
                                <CodeEditor language="python" />
                            </div>
                            <div style={{ flex: 0.2 }}>
                                <UserTerminal language="python" />
                            </div>
                        </div>
                    </>
                } />
            </Routes>
        </BrowserRouter>
    )
}



export default AppRoutes;