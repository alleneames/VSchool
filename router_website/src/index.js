import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//router
import {Route, BrowserRouter, Switch, Link} from "react-router-dom";

import HomeContainer from "./containers/home-container.js";
import ContactContainer from "./containers/contact-container.js";
import BlogContainer from "./containers/blog-container.js";
import ArticleContainer from "./containers/article-container.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <div className="test-link" >
              <Link className="main-link" to="/">Home</Link>
              <Link className="main-link" to="/contact">Contact</Link>
              <Link className="main-link" to="/blog">Blog</Link>
            </div>
            <Switch>
              <Route exact path="/" component={HomeContainer}/>
              <Route exact path="/contact" component={ContactContainer} />
              <Route exact path="/blog" component={BlogContainer} />
              <Route exact path="/article/:index" component={ArticleContainer} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector("#root"));