import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>Its about page React + TypeScript</h1>
            <button className="btn" onClick={() => history.push('/')}>Back to todo list</button>
        </>
    )
}
