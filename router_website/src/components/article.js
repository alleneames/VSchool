import React from "react";


class Article extends React.Component {
    render() {
        
        return (
            <div>
                <h1>{this.props.article.name}</h1>
                <p>{this.props.article.text}</p>
            </div>

        )
    }
}

export default Article;