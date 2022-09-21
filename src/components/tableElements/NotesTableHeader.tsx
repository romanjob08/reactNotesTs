import React, {FC} from "react";
import {images, Note, notesHeading} from "../../common";
import {getImage} from "../../helpers/getImage";
import {notesSlice} from "../../redux/reducers/NotesSlice";
import {useAppDispatch} from "../../hooks";

type PropsType = {
    removeAllNotes: Note[]
    archivedAll: boolean
}

export const NotesTableHeader: FC<PropsType> = ({archivedAll, removeAllNotes}) => {
    const {archiveAll, removeAll} = notesSlice.actions
    const dispatch = useAppDispatch()

    return (
        <div>
            <thead>
            <tr>
                {notesHeading.map(heading => <th>{heading}</th>)}
                <th><button onClick={() => {dispatch(archiveAll(archivedAll))}}>{getImage(images.archive)}</button></th>
                <th><button onClick={() => {dispatch(removeAll(removeAllNotes))}}>{getImage(images.remove)}</button></th>
            </tr>
            </thead>
        </div>
    )
}
