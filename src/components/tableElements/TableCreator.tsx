import React, {FC} from "react";
import {TableBodyRoad} from "./TableBodyRoad";
import {NotesTableHeader} from "./NotesTableHeader";
import {Note} from "../../common";

type PropsType = {
    notes: Note[]
}

export const TableCreator: FC<PropsType> = ({notes}) => {
    return <>
        <div>
            <table>
                <NotesTableHeader/>
                <tbody>
                    {notes.map(item => {
                        return <div>
                        <TableBodyRoad note={item}/>
                    </div>
                    })}
                </tbody>
            </table>
        </div>
    </>
}


