import React,{useState} from 'react';
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import {ProjectsProvider,SelectedProjectsProvider} from "./context";

export const App = ({darkModeDefault=false})=> {
    const [darkMode,setDarkMode] = useState(darkModeDefault);
    return (
        <SelectedProjectsProvider>
            <ProjectsProvider>
                <main
                    data-testid="application"
                    className={darkMode ? 'darkmode' : undefined}
                >
                    <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
                    <Content/>
                </main>
            </ProjectsProvider>
        </SelectedProjectsProvider>

    );
}



export default App;
