import React from 'react';

class Login extends React.Component {
    state = {
        Username: true
    };


    render() {
        return (
            <div>
                <form>
                    <input placeholder='Username' />
                    <input placeholder='Password' />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;