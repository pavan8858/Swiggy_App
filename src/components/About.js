import React from "react";
import UserClass from "./UserClass.js";
import UserContext from "./UserContext"; // Ensure this path is correct

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // console.log("parentdid mount  called");
    }

    render() {
        return (
            <div>
                <h1> About class Component </h1>
                <div>
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h3>LoggedIn User : {loggedInUser}</h3>}
                    </UserContext.Consumer>
                </div>
                <UserClass 
                    name={"Krishna (class base component props)"} 
                    location={"New Delhi"} 
                    contact={"Krishna@gmail.com"} 
                /> 
            </div>
        );
    }
}

export default About;

  

        
  



