import {Note} from "../../../common";
import React, {FC} from "react";
import {TableRow} from "./TableRow";

type PropsType = {
    notes?: Note[]
    notesStatus?: string
    tbBG?: string
    tbTextSize?: string
    plugPosition?: string
}

export const TableBody: FC<PropsType> = (
    {
        notes = [],
        notesStatus,
        tbBG,
        tbTextSize,
        plugPosition
    }
) => {
    return <div>
        {notes.length > 0
            ? notes.map((item, index) => {
                return <div key={`${index}-table-road`}>
                    <TableRow
                        note={item}
                        tbBG={tbBG}
                        tbTextSize={tbTextSize}
                    />
                </div>
            })
            : <h2 className={`px-3 font-bold text-2xl text-${plugPosition}`}>
                {`Here should be your ${notesStatus} notes`}
            </h2>
        }
    </div>
}