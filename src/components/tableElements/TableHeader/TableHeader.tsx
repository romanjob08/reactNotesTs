import React, {FC} from "react";
import './TableHeader.scss'
import {images, Note, notesHeading} from "../../../common";
import {getImage} from "../../../helpers";
import {notesSlice} from "../../../redux/reducers/NotesSlice";
import {useAppDispatch} from "../../../hooks";

type PropsType = {
    removeAllNotes: Note[]
    archivedAll: boolean
};

export const TableHeader: FC<PropsType> = ({archivedAll, removeAllNotes}) => {
    const {archiveAll, removeAll} = notesSlice.actions
    const dispatch = useAppDispatch()

    return (
        <div className='header'>
            <div ></div>
            {notesHeading.map((heading, index) => <div key={`${index}-table-header`}>{heading}</div>)}
            <div ></div>
            <div>
                <button onClick={() => {
                    dispatch(archiveAll(archivedAll))
                }}>{getImage(images.archive)}</button>
            </div>
            <div>
                <button onClick={() => {
                    dispatch(removeAll(removeAllNotes))
                }}>{getImage(images.remove)}</button>
            </div>
        </div>
    );
};