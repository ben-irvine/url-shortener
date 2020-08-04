import React from 'react'
import Create from "./Create"



class App extends React.Component {
    
    createUserId = () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&?"
        let userId = ""
        for (let i=0; i<30; i++) {
            userId +=chars.charAt(Math.floor(Math.random()*chars.length))
        }
        return userId
    }

    componentDidMount(){
        console.log(localStorage.userId)
        if(localStorage.userId == undefined) {
            
            localStorage.setItem('userId', this.createUserId())
        }
    }
    render(){
    return (
        <>
           <Create/>
        </>
    )
    }
}

export default App