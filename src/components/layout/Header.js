import React,{useState} from 'react';
import {FaPizzaSlice} from "react-icons/fa";
import {AddTask} from "../AddTask";

export const Header = ({darkMode,setDarkMode}) =>{
    const [shouldShowMain, setShouldShowMain] = useState(false);
    const [shouldQuickAddTask, setShouldQuickAddTask] = useState(false);


    return (
        <header className='header' data-testid='header'>
            <nav>
                <div className='logo'>
                </div>
                <div className="settings">
                    <ul>
                        <li
                            data-testid="quick-add-task-action"
                            className="settings__add"
                            onClick={()=> {
                                setShouldQuickAddTask(true);
                                setShouldShowMain(true)}
                            }
                        >+</li>
                        <li
                            data-testid="dark-mode-action"
                            className="settings__darkmode"
                            onClick={()=>setDarkMode(!darkMode)}
                        ><FaPizzaSlice/></li>
                    </ul>
                </div>
            </nav>
            <AddTask
                showAddTaskMain={false}
                shouldShowMain={shouldShowMain}
                showQuickAddTask={shouldQuickAddTask}
                setShowQuickAddTask={setShouldQuickAddTask}
            />
        </header>
    );
}
