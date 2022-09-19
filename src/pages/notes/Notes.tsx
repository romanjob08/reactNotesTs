import React, {useState} from "react";
import {NotesTable} from "./notesTable/NotesTable";
import {StatusTable} from "./statusTable/StatusTable";

export const Notes = () => {
    const [archived, setArchived] = useState(false)

    return <>
        <div>
            <NotesTable/>
        </div>
        {!archived
            ? <button onClick={() => {
                setArchived(true)
            }}>Show archive</button>
            : <button onClick={() => {
                setArchived(false)
            }}>Hide archive</button>}
        {archived
            ? <div>
                <NotesTable/>
            </div>
            : null}
        <div>
            <StatusTable/>
        </div>
    </>
}