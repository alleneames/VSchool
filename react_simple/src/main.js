import React from "react";

class Main extends React.Component {
    render () {
        return (
            
            <main className="article">
                <h1>{this.props.name}</h1>
                <h2>{this.props.desc}</h2>
                <p>Posted by end bootstrap on {this.props.date}</p>
                <button onClick={()=> {this.props.handleDescription(this.props.desc)}}>This description</button>
                <button onClick = {() => {
                        this.props.handleFavorite(this.props.name)
                    }}>
                    Favorite
                </button>
            </main>
        )
    } 
}

export default Main;