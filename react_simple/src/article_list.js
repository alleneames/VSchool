import React from "react";
import Main from "./main.js";

class ArticleList extends React.Component {
    alertText(desc) {
        alert(`this article is about ${desc}`);
    }
    favorite(title) {
        alert(`You like ${title}`);
    }
    render() {
    let articles = this.props.articles.map((item) => {
      return <Main handleDescription={this.alertText} handleFavorite={this.favorite} name={item.name}  desc={item.desc} date={item.date}/>
    });
    return (
      <div className="container">
       <div className="row">
       <div className="col-lg-7 col-lg-offset-2 text">
        {articles}
      </div>
      </div>
      </div>
    )
  }
}


export default ArticleList;