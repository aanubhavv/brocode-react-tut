function UserGreeting(props) {
//   if(props.isLoggedIn) {
//     return <h2>Welcome {props.username}</h2>
//   } 
//   else {
//     return <h2>Please login to continue</h2>
//   }

// or

//   if(props.isLoggedIn) {
//     return <h2>Welcome {props.username}</h2>
//   } 
//   return <h2>Please login to continue</h2>

//   or

//   return(props.isLoggedIn ? <h2 className="welcome-msg">Welcome {props.username}</h2> : 
//                             <h2 className="login-prompt">Please login to continue</h2>)

//   or (better way to ternary operator)

    const welcomeMsg = <h2 className="welcome-msg">
                            Welcome {props.username}
                        </h2>
    
    const loginPrompt = <h2 className="login-prompt">
                            Please login to continue
                        </h2>

    return(props.isLoggedIn ? welcomeMsg : loginPrompt)
}

export default UserGreeting