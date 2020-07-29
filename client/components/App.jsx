
import React from 'react'

const App = () => {
    return (
        <>
            <h1>Rubin and Ben's URL Shortener</h1>
            <h3>Enter your URL:</h3>
            <input id="url-input" type="text" name="full_url" placeholder="Your URL goes here" />
            <button id="submit">Submit</button>
        </>
    )
}

export default App