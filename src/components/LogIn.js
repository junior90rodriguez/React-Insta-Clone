import React from 'react';

class Login extends React.Component {
    state = {
        Username: true
    };

    toggle = event => {
        event.preventdefault();
        if(localStorage.getItem('Username')) {
         localStorage.removeItem('Username');
         this.setState({ Username: false });   
        } else {
            localStorage.setItem('Username', true);
            this.setState({ Username: true })
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input placeholder='Username' />
                    <input placeholder='Password' />
                    <button onClick={this.toggle}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;