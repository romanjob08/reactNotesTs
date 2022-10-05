import React, {FC} from "react";
import {TableBody} from "./TableBody";
import {TableHeader} from "./TableHeader";
import {Note} from "../../common";

type PropsType = {
    removeAllNotes: Note[]
    notes: Note[]
    archivedAll: boolean
    notesStatus: string
};

export const Table: FC<PropsType> = ({notes, archivedAll, removeAllNotes, notesStatus}) => {
    return (
        <div>
            <TableHeader archivedAll={archivedAll} removeAllNotes={removeAllNotes}/>
            <div>
                {notes.length > 0
                    ? notes.map((item, index) => {
                        return <div key={`${index}-table-road`}>
                            <TableBody note={item}/>
                        </div>
                    })
                    : <h2 className='px-3 font-bold text-2xl'>
                        {`Here should be your ${notesStatus} notes`}
                    </h2>
                }
            </div>
        </div>
    );
};