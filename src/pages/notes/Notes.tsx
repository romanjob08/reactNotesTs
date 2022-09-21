import React, {useState} from "react";
import StatusTable from "./statusTable/StatusTable";
import {useAppDispatch, useNotes} from "../../hooks";
import {TableCreator} from "../../components/tableElements/TableCreator";
import {notesSlice} from "../../redux/reducers/NotesSlice";
import {getSpecialData, randomID} from "../../helpers";
import {images} from "../../common";

export const Notes = () => {
    const [archived, setArchived] = useState(false)
    const {notes} = useNotes()

    const {addNevNote} = notesSlice.actions
    const dispatch = useAppDispatch()

    const activeNotes = notes.filter(item => item.active)
    const archivedNotes = notes.filter(item => !item.active)
    return <>
        <div>
            <TableCreator activeNotes={activeNotes} removeAllNotes={archivedNotes} archivedAll= {false}/>
        </div>
        <button onClick={() => {
            dispatch(addNevNote({
                id: randomID(),
                image: images.task,
                name: '',
                created: getSpecialData(),
                category: 'Task',
                content: '',
                active: true,
                dates: '',
                redact: true
            }))
        }}>
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
            ? <div><TableCreator activeNotes={archivedNotes} removeAllNotes={activeNotes} archivedAll= {true}/></div>
            : null}
        <hr/>
        <div>
            <StatusTable/>
        </div>
    </>
}