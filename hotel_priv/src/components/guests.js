import React from "react";

class Guests extends React.Component {
    genGuests() {
        return this.props.guests.map((item, index)=> {
            return (
                <div key={item.firstName + index}>
                    <p>First Name: {item.firstName}</p>
                    <p>Last Name: {item.lastName}</p>
                    <p>Room Number: {item.roomNumber}</p>
                </div>
            )
        })
    }
    render() {
        return(
            <div style={{display: this.props.token ? "inherit" : "none"}} >
                <h1>Guests</h1>
                {this.genGuests()}
            </div>

        )
    }
}

export default Guests;