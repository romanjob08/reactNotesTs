import React, {FC} from "react";
import {TableHeader} from "./TableHeader";
import {Note} from "../../common";
import {TableBody} from "./TableBody";
import {useNotes} from "../../hooks";

type PropsType = {
    removeAllNotes?: Note[]
    notes?: Note[]
    archivedAll?: boolean
    notesStatus?: string
    thBG?: string
    thTextSize?: string
    tbBG?: string
    tbTextSize?: string
    plugPosition?: string
};

export const Table: FC<PropsType> = (
    {
        notes,
        archivedAll,
        removeAllNotes,
        notesStatus,
        thBG = 'bg-gray-500',
        thTextSize = 'text-lg',
        tbBG = 'bg-gray-300',
        tbTextSize = 'text-[16px]',
        plugPosition = 'left'
    }
) => {
    const notesRes = useNotes().notes
    return (
        <div>
            <TableHeader
                archivedAll={archivedAll}
                removeAllNotes={removeAllNotes}
                thBG={thBG}
                thTextSize={thTextSize}
            />
            <TableBody
                notes={notes ? notes : notesRes}
                notesStatus={notesStatus}
                tbBG={tbBG}
                tbTextSize={tbTextSize}
                plugPosition={plugPosition}
            />
        </div>
    );
};
