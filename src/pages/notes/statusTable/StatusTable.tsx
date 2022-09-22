import React, {FC} from "react";
import './statusTable.scss'
import {useNotes} from "../../../hooks";
import {Categories, images} from "../../../common";
import {statusHeading} from "../../../common";
import {getImage} from "../../../helpers";

const StatusTable: FC = () => {
    const {notes} = useNotes()
    const tasks = notes.filter(item => item.category === Categories.TASK)
    const ideas = notes.filter(item => item.category === Categories.IDEA)
    const randomThoughts = notes.filter(item => item.category === Categories.RANDOM_THOUGHT)
    return (
        <div className='statusTable'>
            <table>
                <thead>
                <tr>
                    {statusHeading.map((heading,id) => <th key={`${id}status-heading`}>{heading}</th>)}
                </tr>
                </thead>
                <tbody>
                {<tr>
                    <td>{getImage(images.task)}</td>
                    <td>{Categories.TASK}</td>
                    <td>{tasks.filter(item => item.active).length}</td>
                    <td>{tasks.filter(item => !item.active).length}</td>
                </tr>
                }{<tr>
                    <td className={'category-img'}>{getImage(images.idea)}</td>
                    <td>{Categories.IDEA}</td>
                    <td>{ideas.filter(item => item.active).length}</td>
                    <td>{ideas.filter(item => !item.active).length}</td>
                </tr>
                }{<tr>
                    <td>{getImage(images.randomThought)}</td>
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

export default StatusTable
