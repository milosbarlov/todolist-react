import React,{useState} from 'react';
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from "react-icons/fa";
import {useSelectedProjectsValue} from "../../context";
import {Projects} from "../Projects";
import { AddProject} from "../AddProject";

export const Sidebar = () => {
    const {setSelectedProject} = useSelectedProjectsValue();
    const [active,setActive] = useState('INBOX');
    const [showProjects,setShowProjects] = useState(true);

    return(
        <div className='sidebar' data-testid='sidebar'>
            <ul className="sidebar__generic">
                <li
                    data-testid="inbox"
                    onClick={()=>{
                        setActive('inbox');
                        setSelectedProject('INBOX');
                    }}
                    className = {active === 'inbox' ? 'active' : undefined}
                >
                    <span><FaInbox/></span>
                    <span>Inbox</span>
                </li>
                <li
                    data-testid="today"
                    onClick={()=>{
                        setActive('today');
                        setSelectedProject('TODAY');
                    }}
                    className = {active === 'today' ? 'active' : undefined}
                >
                    <span><FaRegCalendar/></span>
                    <span>Today</span>
                </li>
                <li
                    data-testid="next_7"
                    onClick={()=>{
                        setActive('next_7');
                        setSelectedProject('NEXT_7');
                    }}
                    className = {active === 'next_7' ? 'active' : undefined}
                >
                    <span><FaRegCalendarAlt/></span>
                    <span>Next 7 days</span>
                </li>
            </ul>

            <div className="sidebar__middle" onClick={()=>setShowProjects(!showProjects)}>
                <span><FaChevronDown className={!showProjects ? 'hidden-projects': undefined} /></span>
                <h2>Projects</h2>
            </div>

            <ul className="sidebar__projects">
                {showProjects && <Projects />}
            </ul>

            {showProjects && <AddProject />}

        </div>
    );
}