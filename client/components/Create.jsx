import React from 'react'
import {ShortenUrl} from "../API/api"
import NewUrl from "./NewUrl"

class Create extends React.Component {
   
state = {
    shortendUrls: [
    ]
}
   
    handleSubmit = () => {
        ShortenUrl(document.getElementById("url-input").value)
        .then(res => {
            console.log("res is ", res)
            let stuff = {hello: "blah"}
            this.setState({
                shortendUrls: [...this.state.shortendUrls, {original: document.getElementById("url-input").value, newUrl: window.location + res.data}]
               
            })
        })
    }

    render(){
    return (

        <>
            <h1>Rubin and Ben's URL Shortener</h1>
            <h3>Enter your URL:</h3>
            <input id="url-input" type="text" name="full_url" placeholder="Your URL goes here" />
            <button id="submit" onClick={this.handleSubmit}>Submit</button>
            <div className="url-box">
            {(this.state.shortendUrls.length > 0) ?
            this.state.shortendUrls.map((elem, i) => {
                console.log("runing foreach: ", elem)
                return <NewUrl key={i} shortUrl={elem.newUrl} original={elem.original}/>
            })
            :
            ""
            }
            </div>
        </>
    )
    }
}

export default Create