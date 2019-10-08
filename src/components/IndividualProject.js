import React,{useState} from 'react';
import {FaTrashAlt} from "react-icons/fa";
import {useProjectValue,useSelectedProjectsValue} from "../context";
import DB from "../local-storage";

export const IndividualProject = ({project}) => {
      const [showConfirm , setShowConfirm] = useState(false);
      const { selectedProject, setSelectedProject } = useSelectedProjectsValue();
      const {projects,setProjects} = useProjectValue();

      const deleteProject = id =>{
            setSelectedProject('INBOX');
            const db = new DB('projects');
            let models = db.delete(id);
            setProjects(models);
      };

      return (
          <>
            <span className="sidebar__dot">&#8226;</span>
            <span className="sidebar__project-name">{project.name}</span>
            <span
                className="sidebar__project-delete"
                data-testid="delete-project"
                onClick={()=> setShowConfirm(!showConfirm)}
            >
                  <FaTrashAlt/>
                  {showConfirm && (
                      <div className="project-delete-modal">
                            <div className="project-delete-modal__inner">
                                  <p>Are you sure you want to delete this project ?</p>
                                  <button
                                    type="button"
                                    onClick={()=>deleteProject(project.id)}
                                  >
                                    Delete
                                  </button>
                                  <span onClick={()=> setShowConfirm(!showConfirm)}>Cancel</span>
                            </div>
                      </div>
                  )}
            </span>
          </>
      );
      

};

