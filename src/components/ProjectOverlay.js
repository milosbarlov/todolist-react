import React from 'react';
import {useProjectValue} from "../context";

export const ProjectOverlay = ({setProject, showProjectOverlay, setShowProjectOverlay})=> {
     const { projects } = useProjectValue();

     return (
         projects && showProjectOverlay && (
             <div
                className="project-overlay"
                data-testid="project-overlay"
             >
                <ul className="project-overlay__list">
                    {projects.map(project => (
                        <li
                            key={project.id}
                            data-testid="project-overlay-action"
                            onClick={()=>{
                                setProject(project.id);
                                setShowProjectOverlay(false);

                            }}
                        >
                            {project.name}
                        </li>
                    ))}
                </ul>
             </div>
         )
     );

}