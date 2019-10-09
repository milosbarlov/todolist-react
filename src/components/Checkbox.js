import React from 'react';

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