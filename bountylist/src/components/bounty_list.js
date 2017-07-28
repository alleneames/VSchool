import React from "react";

import BountyItemContainer from "../containers/bounty_item_container";


class BountyList extends React.Component {
    genHits() {
        return this.props.hits.map((item, index)=>{
            return <BountyItemContainer 
                index={index} 
                key={index + item.name} 
                hit={item}
                handleRemove={this.props.handleRemove} />
        })
    }

    render() {
        return(
            <div>
               {this.genHits()}
            </div>
        )
    }
}

export default BountyList;