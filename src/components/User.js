// import { useEffect,useState } from "react";
// const User = ()=>{
//     const[userInfo , setUserInfo] = useState({
//         name:"dummy" ,
//         bio: "dummy location",
//         avatar_url:"http://dummy_image",

//     });
//     useEffect(()=>{
//         const fetchData = async()=>{
//             const response = await fetch("https://api.github.com/users/pavan8858");
//             const json = await response.json();
//             setUserInfo(json);
//         }
//         fetchData();
        
//     },[]);
//     return(
//         <div className="userinfo" >
//             <img src={userInfo.avatar_url} alt={`${userInfo.name}'s avatar`} />
//             <h2>Name: {userInfo.name}</h2>
//             <p>Bio: {userInfo.bio}</p>
//         </div>
//     );

// };

// export default User;