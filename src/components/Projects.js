import React,{useState} from 'react';
import {useProjectValue, useSelectedProjectsValue} from "../context";
import {IndividualProject} from "./IndividualProject";

export const Projects = ({ activeValue = null })=>{
    const [active,setActive] = useState(activeValue);
    const { setSelectedProject } = useSelectedProjectsValue();
    const { projects } = useProjectValue();

    return (
        projects &&
        projects.map(project =>(
            <li
                key = {project.id}
                data-testid = "project-action"
                className={
                    active === project.id ? 'active sidebar__project' : 'sidebar__project'
                }

                onClick={()=>{
                    setActive(project.id);
                    setSelectedProject(project.id);
                }}
            >
                <IndividualProject project={project}/>
            </li>
        ))
    );
};