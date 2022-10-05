import React, {useState} from "react";
import {useAppDispatch, useNotes} from "../../hooks";
import {Button, StatusTable, Table} from "../../components";
import {notesSlice} from "../../redux";
import {getSpecialData, randomID} from "../../helpers";
import {images} from "../../common";

export const Notes = () => {
    const [archived, setArchived] = useState(false)
    const {notes} = useNotes()

    const {addNevNote} = notesSlice.actions
    const dispatch = useAppDispatch()

    const activeNotes = notes.filter(item => item.active)
    const archivedNotes = notes.filter(item => !item.active)
    const redactNotes = notes.filter(item => item.redact)

    return <>
        <div className='p-1'>
            <Table notesStatus='active' notes={activeNotes} removeAllNotes={archivedNotes} archivedAll={false}/>
        </div>
        {redactNotes.length <= 0
            ? <button
                className='rounded-lg p-1 bg-emerald-800 hover:bg-emerald-600 active:bg-amber-500 focus:outline-none focus:ring focus:ring-green-200 text-lg m-2'
                onClick={() => {
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
            : null
        }
        <hr/>
        {!archived
            ? <Button
                className={'rounded-lg p-1 bg-emerald-800 hover:bg-emerald-600 active:bg-amber-500 focus:outline-none focus:ring focus:ring-green-200 text-lg m-2'}
                cullBack={setArchived}
                cullBackValues={true}
                textValue={'Show archive'}/>
            : <div>
                <Button
                    className='rounded-lg p-1 bg-emerald-800 hover:bg-emerald-600 active:bg-amber-500 focus:outline-none focus:ring focus:ring-green-200 text-lg m-2'
                    cullBack={setArchived}
                    cullBackValues={false}
                    textValue='Hide archive'
                />
                <div className='p-1'>
                    <Table notesStatus='archived' notes={archivedNotes} removeAllNotes={activeNotes}
                           archivedAll={true}/>
                </div>
            </div>
        }
        <hr/>
        <div className='p-1'>
            <StatusTable/>
        </div>
    </>
};