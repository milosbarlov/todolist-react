import React from 'react';
import DB from '../local-storage/index';
import {useTasks} from "../hooks";
import {useSelectedProjectsValue} from "../context";

export const Checkbox = ({id,archivedTask}) => {
    return(
        <div
            className="checkbox-holder"
            data-testid="checkbox-action"
            onClick={()=>archivedTask(id)}
        >
            <span className="checkbox"/>
        </div>
    );
};