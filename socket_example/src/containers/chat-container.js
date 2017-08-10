import React from "react";


import Chat from "../components/chat.js"

class ChatContainer extends React.Component {
    render() {
        return(
            <div>
                <Chat chats={[]} />
            </div>


        )
    }
}

export default ChatContainer;