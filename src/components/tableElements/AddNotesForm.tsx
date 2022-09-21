import React, {FC} from "react";
import {notesSlice} from "../../redux/reducers/NotesSlice";
import {useAppDispatch} from "../../hooks";
import {useFormik} from "formik";
import {Categories, images, Note} from "../../common";
import {getImageType} from "../../helpers";
import {getDateFromText, getImage, getSpecialData} from "../../helpers";
import * as Yup from "yup";

type PropsType = {
    note: Note
};

const signupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
});

export const AddNotesForm: FC<PropsType> = ({note}) => {
    const {removeNote, archiveNote, redactNote, saveNote} = notesSlice.actions;
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            name: note.name,
            category: Categories.TASK,
            content: note.content,
        },
        onSubmit: (values) => {
            dispatch(redactNote({
                id: note.id,
                active: note.active,
                redact: false,
                image: getImageType(values.category),
                name: values.name,
                created: getSpecialData(),
                category: values.category,
                content: values.content,
                dates: getDateFromText(values.content)
            }))
        },
        validationSchema: signupSchema,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <td>{getImage(note.image)}</td>
                <td>
                    <label htmlFor="name"></label>
                    <input
                        id="name"
                        name="name"
                        type=""
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                </td>
                <td>{note.created}</td>
                <td>
                    <label htmlFor="category"></label>
                    <select
                        name="category"
                        value={formik.values.category}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        <option>
                            {Categories.TASK}
                        </option>
                        <option>
                            {Categories.IDEA}
                        </option>
                        <option>
                            {Categories.RANDOM_THOUGHT}
                        </option>
                    </select>
                </td>
                <td>
                    <label htmlFor="content"></label>
                    <input
                        id="content"
                        name="content"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.content}
                    />
                </td>
                <td>{note.dates}</td>
                <td>
                    <button type={'submit'}>
                        {getImage(images.save)}
                    </button>
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
        </form>
    )
};