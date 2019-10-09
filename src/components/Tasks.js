import React from 'react';
import {Checkbox} from "./Checkbox";
import { useTasks} from "../hooks";
import { useState, useEffect } from 'react';
import {collectedTasks} from "../constants";
import { getTitle, getCollectedTitle, collectedTasksExist} from "../helpers";
import { useSelectedProjectsValue, useProjectValue } from "../context";
import { AddTask} from "./AddTask";
import DB from '../local-storage/index';
/*
let db = new DB('projects');
db.create({name:"project 1"});
db.create({name:"project 2"});
db.create({name:"project 3"});
let db = new DB('tasks');
db.create({archived: false,date:moment().format("DD.MM.YYYY"),project_id:3,task:"task1 project 3"});
db.create({archived: false,date:moment('15.10.2019').format("DD.MM.YYYY"),project_id:3,task:"task2 project 3"});
db.create({archived: false,date:moment('21.10.2019').format("DD.MM.YYYY"),project_id:3,task:"task3 project 3"});

 */


export const Tasks = () => {
    const {selectedProject} = useSelectedProjectsValue();
    const { projects } = useProjectValue();
    const { tasks, setTasks } = useTasks(selectedProject);
    let projectName = '';
    let db = new DB('tasks');

    const archivedTask = (id)=> {
        let db = new DB('tasks');
        db.update(id, {archived: true});
        setTasks([]);
    };

    if(projects && selectedProject && !collectedTasksExist(selectedProject)){
        const title = getTitle(projects,selectedProject);
        if(title){
            projectName = title.name
        }
    }

    if(selectedProject && collectedTasksExist(selectedProject)){
        projectName = getCollectedTitle(collectedTasks,selectedProject).name
    }

    useEffect(()=>{
        document.title = `${projectName}: TodoList`;
    });

    return (
        <div className='tasks' data-testid='tasks'>
            <h2 data-testid='project-name'>{projectName}</h2>

            <ul className="tasks__list">
                {tasks.map(task=>(
                    <li key={task.id}>
                        <Checkbox id={task.id}  archivedTask={archivedTask}/>
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>
            <AddTask/>
        </div>
    );
};