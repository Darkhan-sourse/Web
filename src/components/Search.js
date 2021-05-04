import { getSuggestedQuery } from '@testing-library/dom'
import React, { useState } from 'react'

const Search = ({ getQuery }) => {
const [text, setText] = useState("")

const onChange = (q) => {
    setText(q)
    getQuery(q)
}

    return (
        <section className="search mb-3">
            <form>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Seach users" 
                    value={text}
                    onChange={e => onChange(e.target.value)}
                    autoFocus
                />

            </form>
        </section>
    )
}

export default Search