import React from 'react'
import Create from "./Create"


class App extends React.Component {
    
    componentDidMount(){
        console.log(localStorage.userId)
        if(localStorage.userId == undefined) localStorage.setItem('userId', Math.floor(Math.random()*100000));
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