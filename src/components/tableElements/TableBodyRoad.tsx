import React, {FC} from "react";
import {images, Note} from "../../common";
import {getImage} from "../../helpers/getImage";

type PropsType = {
    note: Note
}

export const TableBodyRoad: FC<PropsType> = ({note}) => {
    return (
        <span>
            <td>{getImage(note.image)}</td>
            <td>{note.name}</td>
            <td>{note.created}</td>
            <td>{note.category}</td>
            <td>{note.content}</td>
            <td>{note.dates}</td>
            <td><button>{getImage(images.corrected)}</button></td>
            <td><button>{getImage(images.archive)}</button></td>
            <td><button>{getImage(images.remove)}</button></td>
        </span>
    )
}