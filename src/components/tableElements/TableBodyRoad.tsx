import React, {FC} from "react";
import {images, Note} from "../../common";
import {getImage} from "../../helpers";
import {useAppDispatch} from "../../hooks";
import {notesSlice} from "../../redux/reducers/NotesSlice";
import {AddNotesForm} from "./AddNotesForm";

type PropsType = {
    note: Note
}

export const TableBodyRoad: FC<PropsType> = ({note}) => {
    const {removeNote, archiveNote, saveNote} = notesSlice.actions
    const dispatch = useAppDispatch()
    return (
        <>{!note.redact ?
            <div>
                <td>{getImage(note.image)}</td>
                <td>{note.name}</td>
                <td>{note.created}</td>
                <td>{note.category}</td>
                <td>{note.content}</td>
                <td>{note.dates}</td>
                <td>{<button onClick={() => {
                        dispatch(saveNote(note.id))
                    }}>
                        {getImage(images.corrected)}
                    </button>
                }
                </td>
                <td>
                    <button onClick={() => {
                        dispatch(archiveNote(note.id))
                    }}>
                        {getImage(images.archive)}
                    </button>
                </td>
                <td>
                    <button onClick={() => {
                        dispatch(removeNote(note.id))
                    }}>
                        {getImage(images.remove)}
                    </button>
                </td>
            </div>
            :
            <AddNotesForm note={note}/>
        }
        </>
    );
};
