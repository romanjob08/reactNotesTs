import React, {FC} from "react";
import {TableBodyRoad} from "./TableBodyRoad";
import {NotesTableHeader} from "./NotesTableHeader";
import {Note} from "../../common";

type PropsType = {
    removeAllNotes: Note[]
    archivedAll: boolean
    activeNotes: Note[]
}

export const TableCreator: FC<PropsType> = ({activeNotes, archivedAll, removeAllNotes}) => {
    return <>
        <div>
            <table>
                <NotesTableHeader archivedAll={archivedAll} removeAllNotes={removeAllNotes}/>
                <tbody>
                    {activeNotes.map(item => {
                        return <div>
                        <TableBodyRoad note={item}/>
                    </div>
                    })}
                </tbody>
            </table>
        </div>
    </>
}


