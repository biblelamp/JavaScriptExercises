import React from 'react'

function Article() {
    const body = <section>body</section>
    return (
        <div className='hello' style={{color: 'red'}}>
            <h2>title</h2>
            {body}
            <h3>creation date: {(new Date()).toDateString()}</h3>
        </div>
    )
}

export default Article