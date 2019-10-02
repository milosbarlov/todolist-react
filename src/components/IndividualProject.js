import React,{useState} from 'react';
import {FaTrashAlt} from "react-icons/fa";
import {useProjectValue,useSelectedProjectsValue} from "../context";
import DB from "../local-storage";

export const IndividualProject = ({project}) => {
      const [showConfirm , setShowConfirm] = useState(false);
      const {setSelectedProject} = useSelectedProjectsValue();
      const {projects,setProjects} = useProjectValue();

      const deleteProject = id =>{
            const db = new DB();
            let models = db.delete(id);
            setProjects(models);
            setSelectedProject('INBOX');
      };

      

};

