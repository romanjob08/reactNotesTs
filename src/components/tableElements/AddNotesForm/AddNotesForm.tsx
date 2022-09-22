import React, {FC} from "react";
import './AddNotesForm.scss'
import {notesSlice} from "../../../redux/reducers/NotesSlice";
import {useAppDispatch} from "../../../hooks";
import {useFormik} from "formik";
import {Categories, images, Note} from "../../../common";
import {getDateFromText, getImage, getImageType, getSpecialData} from "../../../helpers";
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
    const {removeNote, redactNote} = notesSlice.actions;
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            name: note.name,
            category: note.category,
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
            <div className='body-form'>
                <div>{getImage(note.image)}</div>
                <div>
                    <input
                        className='int-name'
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                </div>
                <div>{note.created}</div>
                <div className='body-road__cell-category'>
                    <select
                        className='category-selector'
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
                </div>
                <div>
                    <input
                        className='int-content'
                        id="content"
                        name="content"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.content}
                    />
                </div>
                <div >{note.dates}</div>
                <div></div>
                <div>
                    <button type='submit'>
                        {getImage(images.save)}
                    </button>
                </div>
                <div>
                    <button onClick={() => {
                        dispatch(removeNote(note.id))
                    }}>
                        {getImage(images.remove)}
                    </button>
                </div>
            </div>
        </form>
    );
};