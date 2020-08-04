import React from 'react'

class NewUrl extends React.Component {
    render(){
    return (
        <>
           
            <div className="newUrl animate__animated animate__flipInX "> <p>{this.props.original}</p> <h2><a href={this.props.shortUrl}>{this.props.shortUrl}</a></h2> </div>
        </>
    )
    }
}

export default NewUrl