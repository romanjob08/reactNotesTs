import React, {FC} from "react";
import {images, Note} from "../../../common";
import {getImage} from "../../../helpers";
import {useAppDispatch} from "../../../hooks";
import {notesSlice} from "../../../redux";
import {AddNotesForm} from "../AddNotesForm";

type PropsType = {
    note: Note
}

export const TableBody: FC<PropsType> = ({note}) => {
    const {removeNote, archiveNote, refreshNote} = notesSlice.actions
    const dispatch = useAppDispatch()

    return (
        <>{!note.redact
            ? <div className='rounded-sm flex flex-row bg-gray-300 my-1.5 text-[16px] p-2'>
                <div className='w-[30px] text-center'>
                    {getImage(note.image)}
                </div>
                <div className='w-[120px] text-ellipsis whitespace-nowrap overflow-hidden'
                     title={note.name}>{note.name}
                </div>
                <div className='w-[125px]'>
                    {note.created}</div>
                <div className='w-[140px]'>
                    {note.category}</div>
                <div className='w-[330px] text-ellipsis whitespace-nowrap overflow-hidden'
                     title={note.content}>{note.content}</div>
                <div className='w-[150px]'>
                    {note.dates}</div>
                <div className='w-[35px] text-center text-gray-600'>
                    <button onClick={() => {
                        dispatch(refreshNote(note.id))
                    }}>
                        {getImage(images.corrected)}
                    </button>
                </div>
                <div className='w-[35px] text-center text-gray-600'>
                    <button onClick={() => {
                        dispatch(archiveNote(note.id))
                    }}>
                        {getImage(images.archive)}
                    </button>
                </div>
                <div className='w-[35px] text-center text-gray-600'>
                    <button onClick={() => {
                        dispatch(removeNote(note.id))
                    }}>
                        {getImage(images.remove)}
                    </button>
                </div>
            </div>
            :
            <AddNotesForm note={note}/>
        }
        </>
    );
};
