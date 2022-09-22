import React, {FC} from "react";
import {TableBody} from "./TableBody/TableBody";
import {TableHeader} from "./TableHeader/TableHeader";
import {Note} from "../../common";

type PropsType = {
    removeAllNotes: Note[]
    activeNotes: Note[]
    archivedAll: boolean
};

export const Table: FC<PropsType> = ({activeNotes, archivedAll, removeAllNotes}) => {
    return (
        <div>
            <TableHeader archivedAll={archivedAll} removeAllNotes={removeAllNotes}/>
            <div>
            {activeNotes.map((item, index) => {
                return <div key={`${index}-table-road`}>
                    <TableBody note={item}/>
                </div>
            })}
            </div>
        </div>
    );
};