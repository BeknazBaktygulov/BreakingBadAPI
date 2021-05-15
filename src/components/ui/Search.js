import React, { useState } from 'react'

function Search() {
    const [text, setText] = useState('')
    return (
        <section className="search">
            <form>
                <input type="text" className="form-control"
                value={text} placeholder="Search characters..."
                onChange={e => setText(e.target.value)} autoFocus />
            </form>
        </section>
    )
}

export default Search
