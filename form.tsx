import { ChangeEvent, FormEvent, useState } from 'react';

import { Note } from '../../models/note.model';
import styles from './form.module.scss';
interface INoteProps {
    createNotes: (note: Note) => void;
}

export function Form(props: INoteProps) {
    const [title, setTitle] = useState(null);
    const [text, setText] = useState(null);

    const handlerChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handlerChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    const createNotes = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        props.createNotes({ title, text });
    };

    return (
        <form className={styles.form} onSubmit={createNotes}>
            <fieldset className={styles.form__field}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={handlerChangeTitle}
                    className={styles.form__input}
                />
                <textarea
                    name="text"
                    rows={15}
                    placeholder="Write your note..."
                    onChange={handlerChangeText}
                    className={styles.form__input}
                />
                <button className={styles.btn} type="submit">
                    CREATE
                </button>
            </fieldset>
        </form>
    );
}
