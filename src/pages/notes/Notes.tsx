import React, {useState} from "react";
import StatusTable from "./statusTable/StatusTable";
import {useNotes} from "../../hooks";
import {TableCreator} from "../../components/tableElements/TableCreator";

export const Notes = () => {
    const [archived, setArchived] = useState(false)
    const {notes} = useNotes()
    const activeNotes = notes.filter(item => item.active)
    const archivedNotes = notes.filter(item => !item.active)
    return <>
        <div>
            <TableCreator notes={activeNotes}/>
        </div>
        <button onClick={() => {}}>
            Add Note
        </button>
        <hr/>
        {!archived
            ? <button
                onClick={() => setArchived(true)}>
                Show archive
            </button>
            : <button
                onClick={() => setArchived(false)}>
                Hide archive
            </button>}
        {archived
            ? <div><TableCreator notes={archivedNotes}/></div>
            : null}
        <hr/>
        <div>
            <StatusTable/>
        </div>
    </>
}