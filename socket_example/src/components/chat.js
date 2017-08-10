import React from "react";

class Chat extends React.Component {
    genChats() {
        return this.props.chats.map((item, index)=> {
            return (
                <div key={item.message + index}>
                    {item.username} said {item.message};
                </div>
            )
        })
    }
    render() {
        return(
            <div>
                {this.genChats()}
            </div>

        )
    }
}

export default Chat;