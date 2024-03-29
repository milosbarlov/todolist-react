import { useState, useEffect } from 'react';
import {collectedTasksExist} from "../helpers";
import moment from "moment";
import DB from "../local-storage";

export const  useTasks = selectedProject => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    const db = new DB('tasks');
    let allTasks = [];

    if(!collectedTasksExist(selectedProject)){
      allTasks = db.getAll('project_id',selectedProject);
    }else{
      if(selectedProject === 'TODAY'){
        allTasks = db.getAll('date',moment().format('DD-MM-YYYY'))
      }else if(selectedProject === 'INBOX' || selectedProject === 0){
        allTasks = db.getAll();
      }else if(selectedProject === 'NEXT_7'){
        allTasks = db.getAll().filter(task => {
          return task.date <= moment(Date.now()).add(7,'days').format('DD-MM-YYYY')})
      }
    }

    const filteredTask = allTasks.filter(task=>task.archived !== true);
    const archivedTask = db.getAll().filter(task => task.archived === true);

    if(tasks.length !== filteredTask.length){
        setTasks(filteredTask);
        setArchivedTasks(archivedTask);
    }

  },[selectedProject,tasks]);

  return { tasks, archivedTasks, setTasks};
};

export const useProjects = ()=>{
  const [projects,setProjects] = useState([]);
  useEffect(()=>{
    const db = new DB('projects');
    const allProjects = db.getAll();
    if(JSON.stringify(allProjects) !== JSON.stringify(projects)){
      setProjects(allProjects);
    }
  },[projects]);

  return {projects,setProjects}
};