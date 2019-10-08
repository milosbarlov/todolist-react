import React,{useState} from 'react';
import DB from "../local-storage";
import {useProjectValue} from "../context";

export const AddProject = ({shouldShow = false}) => {
    const [show,setShow] = useState(shouldShow);
    const [projectName,setProjectName] = useState('');

    const {setProject} = useProjectValue();
    const DB = new DB('projects');

    const addProject = ()=>{
        if(projectName){
            const newData = DB.create({name:projectName});
            setProject([]);
            setProjectName('');
            setShow(false);
        }
    }


};