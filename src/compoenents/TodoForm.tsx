import React, { useState, FC, ChangeEvent, useRef } from 'react'
interface TodoFormProps {
    onAdd(title: string) : void
}


export const TodoForm: FC <TodoFormProps> = ({onAdd}) => {

    // const [title, setTitle] = useState<string>('');
    // const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }
    const ref = useRef<HTMLInputElement>(null)
    const keyPressHandler = (event: KeyboardEventInit) => {
        if (event.key === 'Enter') {
            //    console.log(title)
            //    setTitle('')
            onAdd(ref.current!.value)
            ref.current!.value = '';
        }
    }
    return (
        <div className="inputfield mt2">
            <input
                // value={title}
                ref={ref}
                onKeyPress={keyPressHandler}
                // onChange={changeHandler}
                type="text" id='title'
                placeholder='Enter youre todo' />
            <label htmlFor="title" className='active'>Enter your todo</label>
        </div>
    )
}