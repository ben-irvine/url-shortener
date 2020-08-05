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
        if(localStorage.getItem("userId") == undefined) {
            console.log("user id not found")
            localStorage.setItem('userId', this.createUserId())
        }
        else{
            console.log("user exits")
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