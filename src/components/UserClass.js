import React from "react";
 class UserClass extends React.Component{
    constructor (props){
        super(props);

        this.state = {
            userInfo:{
                name:"dummy",
                bio:"dummy location",
                avatar_url:"http://dummy-image"
            },
        };

    }
    async componentDidMount(){
       //API call
       const data = await fetch(" https://api.github.com/users/pavan8858");

       const json = await data.json();

       this.setState({
        userInfo : json
       })
       console.log(json);

    }
render(){

    const {name, bio , avatar_url} = this.state.userInfo;
    
    return(
        
       
        <div className="user-card">
            <img src={avatar_url}></img>
            <h2>Name: {name}</h2>
            <p> Bio :{bio}</p>
            
            
        </div>
    );
}
 }
 export default UserClass ;