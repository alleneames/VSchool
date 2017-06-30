import React from "react";

import FontAwesome from "react-fontawesome";

class Footer extends React.Component {
    render () {
        return (
            <footer>
                         
                            <a href="#" className="fa-stack fa-lg icons">
                                <FontAwesome stack="2x" name="circle"  />
                                <FontAwesome stack="1x" name="twitter" inverse/>
                            </a> 
                       
                       
                           <span className="fa-stack fa-lg icons">
                                <FontAwesome stack="2x" name="circle"  />
                                <FontAwesome stack="1x" name="facebook" inverse/>
                            </span> 
                       
                      
                           <span className="fa-stack fa-lg icons">
                                <FontAwesome stack="2x" name="circle"  />
                                <FontAwesome stack="1x" name="twitter" inverse />
                            </span> 
                            <p className="cp">Copyright <FontAwesome name="copyright"/> Your Website 2016</p>
               
            </footer>
        )
    }
}
export default Footer