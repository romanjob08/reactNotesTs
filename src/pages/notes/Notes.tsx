import React, {useState} from "react";
import './Notes.scss'
import StatusTable from "./StatusTable/StatusTable";
import {useAppDispatch, useNotes} from "../../hooks";
import {Table} from "../../components/tableElements/Table";
import {notesSlice} from "../../redux/reducers/NotesSlice";
import {getSpecialData, randomID} from "../../helpers";
import {images} from "../../common";

export const Notes = () => {
    const [archived, setArchived] = useState(false)
    const {notes} = useNotes()

    const {addNevNote, redactNote} = notesSlice.actions
    const dispatch = useAppDispatch()

    const activeNotes = notes.filter(item => item.active)
    const archivedNotes = notes.filter(item => !item.active)
    const redactNotes = notes.filter(item => item.redact)

    return <>
        <div>
            <Table activeNotes={activeNotes} removeAllNotes={archivedNotes} archivedAll={false}/>
        </div>
        <button className='add-btn' onClick={() => {
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
            redactNotes.map(item => {
                dispatch(redactNote(item))
            })
        }}>
            Add Note
        </button>
        <hr/>
        {!archived
            ? <button className='add-btn'
                      onClick={() => setArchived(true)}
            >
                Show archive
            </button>
            : <button className='add-btn'
                      onClick={() => setArchived(false)}
            >
                Hide archive
            </button>}
        {archived
            ? <div>
                <Table activeNotes={archivedNotes} removeAllNotes={activeNotes} archivedAll={true}/>
            </div>
            : null}
        <hr/>
        <div>
            <StatusTable/>
        </div>
    </>
};