import React, {FC} from "react";
import {images, Note, notesHeading} from "../../../common";
import {getImage} from "../../../helpers";
import {notesSlice} from "../../../redux";
import {useAppDispatch} from "../../../hooks";

type PropsType = {
    removeAllNotes?: Note[]
    archivedAll?: boolean
    thBG?: string
    thTextSize?: string
};

export const TableHeader: FC<PropsType> = (
    {
        archivedAll = true,
        removeAllNotes = [],
        thBG,
        thTextSize
    }) => {
    const {archiveAll, removeAll} = notesSlice.actions
    const dispatch = useAppDispatch()

    return (
        <div className={`rounded-lg flex flex-row ${thBG} text-white my-1 ${thTextSize} font-bold p-2`}>
            <div className='w-[30px]'></div>
            <div className='w-[120px]'>
                {notesHeading[0]}
            </div>
            <div className='w-[120px]'>
                {notesHeading[1]}
            </div>
            <div className='w-[140px]'>
                {notesHeading[2]}
            </div>
            <div className='w-[330px]'>
                {notesHeading[3]}
            </div>
            <div className='w-[150px]'>
                {notesHeading[4]}
            </div>
            <div className='w-[35px]'></div>
            <div className='w-[35px] text-center'>
                <button onClick={() => {
                    dispatch(archiveAll(archivedAll))
                }}>{getImage(images.archive)}</button>
            </div>
            <div className='w-[35px] text-center'>
                <button onClick={() => {
                    dispatch(removeAll(removeAllNotes))
                }}>{getImage(images.remove)}</button>
            </div>
        </div>
    );
};