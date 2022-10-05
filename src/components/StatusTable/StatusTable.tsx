import React, {FC} from "react";
import {useNotes} from "../../hooks";
import {Categories, images} from "../../common";
import {statusHeading} from "../../common";
import {getImage} from "../../helpers";

export const StatusTable: FC = () => {
    const {notes} = useNotes()
    const tasks = notes.filter(item => item.category === Categories.TASK)
    const ideas = notes.filter(item => item.category === Categories.IDEA)
    const randomThoughts = notes.filter(item => item.category === Categories.RANDOM_THOUGHT)
    return (
        <div className='text-left'>
            <table className='w-full'>
                <thead className='rounded-md text-white border border-y-4 border-y-white'>
                <tr className='bg-gray-500 '>
                    {statusHeading.map((heading,id) => <th key={`${id}status-heading`} className='p-1'>{heading}</th>)}
                </tr>
                </thead>
                <tbody className=''>
                {<tr className='h-9 bg-gray-300 border border-y-4 border-y-white'>
                    <td className={'text-center'}>{getImage(images.task)}</td>
                    <td>{Categories.TASK}</td>
                    <td>{tasks.filter(item => item.active).length}</td>
                    <td>{tasks.filter(item => !item.active).length}</td>
                </tr >
                }{<tr className='h-9 bg-gray-300 border border-y-4 border-y-white'>
                    <td className={'text-center'}>{getImage(images.idea)}</td>
                    <td>{Categories.IDEA}</td>
                    <td>{ideas.filter(item => item.active).length}</td>
                    <td>{ideas.filter(item => !item.active).length}</td>
                </tr>
                }{<tr className='h-9 bg-gray-300 border border-y-4 border-y-white'>
                    <td className={'text-center w-10'}>{getImage(images.randomThought)}</td>
                    <td>{Categories.RANDOM_THOUGHT}</td>
                    <td>{randomThoughts.filter(item => item.active).length}</td>
                    <td>{randomThoughts.filter(item => !item.active).length}</td>
                </tr>
                }
                </tbody>
            </table>
        </div>
    )
}
