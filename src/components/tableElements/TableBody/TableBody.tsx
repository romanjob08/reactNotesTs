import React, {FC} from "react";
import './TableBody.scss'
import {images, Note} from "../../../common";
import {getImage} from "../../../helpers";
import {useAppDispatch} from "../../../hooks";
import {notesSlice} from "../../../redux/reducers/NotesSlice";
import {AddNotesForm} from "../AddNotesForm/AddNotesForm";

type PropsType = {
    note: Note
}

export const TableBody: FC<PropsType> = ({note}) => {
    const {removeNote, archiveNote, refreshNote} = notesSlice.actions
    const dispatch = useAppDispatch()

    return (
        <>{!note.redact
            ? <div className='body-table'>
                <div>{getImage(note.image)}</div>
                <div className='body-table__cell-name' title={note.name}>{note.name}</div>
                <div>{note.created}</div>
                <div>{note.category}</div>
                <div className='body-table__cell-contents' title={note.content}>{note.content}</div>
                <div>{note.dates}</div>
                <div>
                    <button onClick={() => {
                        dispatch(refreshNote(note.id))
                    }}>
                        {getImage(images.corrected)}
                    </button>
                </div>
                <div>
                    <button onClick={() => {
                        dispatch(archiveNote(note.id))
                    }}>
                        {getImage(images.archive)}
                    </button>
                </div>
                <div>
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
