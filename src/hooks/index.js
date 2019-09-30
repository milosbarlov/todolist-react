import { useState, useEffect } from 'react';
import {collectedTasksExist} from "../helpers";
import moment from "moment";
import DB from "../local-storage";

export const  useTasks = selectedProject => {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    const db = new DB('tasks');
    let tasks = [];

    if(!collectedTasksExist(selectedProject)){
      tasks = db.getAll('id',selectedProject);
    }else{
      if(selectedProject === 'TODAY'){
        tasks = db.getAll('date',moment().format('DD/MM/YYY'))
      }else if(selectedProject === 'INBOX' || selectedProject === 0){
        tasks = db.getAll('date','')
      }else if(selectedProject === 'NEXT_7'){

      }
    }

    setTasks(tasks);

  },[selectedProject])
};