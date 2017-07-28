import React from "react";

import Blog from "../components/blog.js";

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


class BlogContainer extends React.Component {
    render() {
        return (
            <div>
                <Blog articles={articles} />
            </div>

        )
    }
}

export default BlogContainer;