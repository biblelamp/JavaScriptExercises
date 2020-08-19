import React from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-2">App name</h1>
                <ArticleList articles={articles} />
            </div>
        </div>
    )
}

export default App