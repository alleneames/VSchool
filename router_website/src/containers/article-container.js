import React from "react";

import Article from "../components/article.js";

let articles = [
{
    name: "Steve Jobs is awesome",
    text: "bla"
},
{
    name: "Love hurts",
    text: "bla bla bla"
},
{
    name: "The smoking gun",
    text: "bla bla bla bla bla bla bla"
},
];


class ArticleContainer extends React.Component {
    render() {
        return (
            <div>
                <Article article={articles[this.props.match.params.index]} />
            </div>

        )
    }
}

export default ArticleContainer;