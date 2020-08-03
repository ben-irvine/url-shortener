import React from 'react'
import {ShortenUrl} from "../API/api"

class Create extends React.Component {

    handleSubmit = () => {
        ShortenUrl(document.getElementById("url-input").value)
        .then(res => {
            console.log("res is ", res)
        })
    }

    render(){
    return (

        <>
            <h1>Rubin and Ben's URL Shortener</h1>
            <h3>Enter your URL:</h3>
            <input id="url-input" type="text" name="full_url" placeholder="Your URL goes here" />
            <button id="submit" onClick={this.handleSubmit}>Submit</button>
        </>
    )
    }
}

export default Create