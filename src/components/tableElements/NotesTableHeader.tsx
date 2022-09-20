import React, {FC} from "react";
import {images, notesHeading} from "../../common";
import {getImage} from "../../helpers/getImage";

export const NotesTableHeader: FC = () => {
    return (
        <div>
            <thead>
            <tr>
                {notesHeading.map(heading => <th>{heading}</th>)}
                <th><button>{getImage(images.archive)}</button></th>
                <th><button>{getImage(images.remove)}</button></th>
            </tr>
            </thead>
        </div>
    )
}
