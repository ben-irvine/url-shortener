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
            
            let stuff = {hello: "blah"}
            this.setState({
                shortendUrls: [...this.state.shortendUrls, {original: document.getElementById("url-input").value, newUrl: window.location + res.data}]
               
            })
        })
    }
    
    render(){
    return (

        <>
           
            <div className="mainInfo">
            <h1>Rubin and Ben's URL Shortener</h1>
            <h3>Enter your URL:</h3>
            <input id="url-input" type="text" name="full_url" placeholder="Your URL goes here" />
            <button id="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
            
            {(this.state.shortendUrls.length > 0) ?
            <div className="yourUrls-wrap animate__animated animate__fadeIn animate__faster">
            <h2>Your urls:</h2>
            <div className="url-box">
            {this.state.shortendUrls.map((elem, i) => {
                
                return <NewUrl key={i} shortUrl={elem.newUrl} original={elem.original}/>
            })}
            </div>
            </div>
            :
            ""
            }
           
        </>
    )
    }
}

export default Create