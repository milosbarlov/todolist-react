import React from 'react';
import {Checkbox} from "./Checkbox";
import { useTasks} from "../hooks";
import DB from "../local-storage/index"
import moment from "moment";

export const Tasks = () => {
    /*
    const db = new DB('projects');
    db.create({
       name:"project"
    });

     */

    const {tasks} = useTasks(1);
    let projectName = '';

    return (
        <div className='tasks' data-testid='tasks'>
            <h2 data-testid='project-name'>{projectName}</h2>

            <ul className="tasks__list">
                {tasks.map(task=>(
                    <li key={task.id}>
                        <Checkbox id={task.id} />
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};