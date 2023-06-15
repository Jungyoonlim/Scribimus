// useState hook: two state variables (username and password) and two functions to update them
import React, { useState } from "react";

// A function component named Login 
function Login() {
    // Two state variables: username and password
    const [username, setUsernmae] = useState("");
    const [password, setPassword] = useState("");

    // handleSubmit function that will be called when the form is submitted 
    const handleSubmit = (event) => {
        // prevent the default behavior of the form submit event
        event.preventDefault();
        console.log("username: " + username);
    };

    return (
        <div>
            <h1>Login</h1>
            {/* A form w/ a single text input field for the username */}
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    {/* entering the username.
                       The value of the input is bound to the username state variable,
    and when the value of the input changes, setUsername is called to update the state */}
                    <input type="text" value={username} onChange={(event) => setUsernmae(event.target.value)} />
                </label>
                <label>
                    Password:
                    {/* entering the password.
                          The value of the input is bound to the password state variable.
                        When the value of the input changes, setPassword is called to update the state */}
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Login; // this line is necessary to import the component in other files