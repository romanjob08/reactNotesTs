import React, {FC} from "react";
import * as Yup from "yup";
import {notesSlice} from "../../../redux";
import {useAppDispatch} from "../../../hooks";
import {useFormik} from "formik";
import {Categories, images, Note} from "../../../common";
import {getDateFromText, getImage, getImageType, getSpecialData} from "../../../helpers";

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
            <div className='rounded-sm flex flex-row bg-gray-300 my-1.5 text-[16px] p-2'>
                <div className='w-[30px] text-center'>
                    {getImage(note.image)}
                </div>
                <div className='w-[120px] text-ellipsis whitespace-nowrap overflow-hidden'>
                    <input
                        className='rounded-[5px] w-full'
                        placeholder={'Name:'}
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                </div>
                <div className='w-[125px]'>
                    {note.created}
                </div>
                <div className='w-[140px]'>
                    <select
                        className='rounded-[5px] w-full'
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
                <div className='w-[330px] text-ellipsis whitespace-nowrap overflow-hidden mx-1'>
                    <input
                        className='rounded-[5px] w-full px-2'
                        placeholder={'Note content'}
                        autoFocus={true}
                        id="content"
                        name="content"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.content}
                    />
                </div>
                <div className='w-[150px]'>
                    {note.dates}
                </div>
                <div className='w-[35px] text-center text-gray-600'></div>
                <div className='rounded-[100%] w-[35px] text-center text-green-900 bg-yellow-500'>
                    <button type='submit'>
                        {getImage(images.save)}
                    </button>
                </div>
                <div className='w-[35px] text-center text-gray-600'>
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