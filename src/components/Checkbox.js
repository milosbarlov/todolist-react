import React from 'react';
import DB from '../local-storage/index';
import {useTasks} from "../hooks";
import {useSelectedProjectsValue} from "../context";

export const Checkbox = ({id}) => {
    const { selectedProject } = useSelectedProjectsValue();
    const db = new DB('tasks');
    const {setTasks} = useTasks(selectedProject);
    const archivedTask = ()=> {
        db.update(id, {archived: true});
        setTasks([]);
    };

    return(
        <div
            className="checkbox-holder"
            data-testid="checkbox-action"
            onClick={()=>archivedTask()}
        >
            <span className="checkbox"/>
        </div>
    );
};