import React,{useState} from 'react';
import DB from "../local-storage";
import {useProjectValue,useSelectedProjectsValue} from "../context";

export const AddProject = ({shouldShow = false}) => {
    const [show,setShow] = useState(shouldShow);
    const [projectName,setProjectName] = useState('');

    const {setProjects} = useProjectValue();
    const db = new DB('projects');

    const addProject = ()=>{
        if(projectName){
            db.create({name:projectName});
            setProjects([]);
            setProjectName('');
            setShow(false);
        }
    };

    return (
        <div className="add-project" date-testid="add-project">
            {show && (
                <div className="add-project__input">
                    <input
                        value={projectName}
                        onChange={e=>setProjectName(e.target.value)}
                        type="text"
                        className="add-project__name"
                        data-testid="project_id"
                        placeholder="Name your project"
                    />

                    <button
                        className="add-project__submit"
                        type="button"
                        onClick={()=>addProject()}
                        data-testid="add-project-submit"
                    >
                        Add Project
                    </button>
                    <span
                        data-testid="hide-project-overlay"
                        className="add_project__cancel"
                        onClick={()=>setShow(false)}
                    >
                        Cancel
                    </span>
                </div>
            )}
            <span className="add-project__plus">+</span>
            <span
                data-testid="add-project-action"
                className="add-project__text"
                onClick={()=>setShow(!show)}
            >
                Add project
            </span>
        </div>
    );


};