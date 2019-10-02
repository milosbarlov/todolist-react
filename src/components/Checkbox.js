import React from 'react';
import DB from '../local-storage/index';

export const Checkbox = ({id}) => {
    const db = new DB('tasks');
    const archivedTask = ()=> {
        db.update(id, {archived: true});
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