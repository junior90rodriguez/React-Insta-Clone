import React from 'react';

const withAuthenticate = Post => Login =>
class extends React.Component {
    render() {
        if (localStorage.getItem("Username")) {

            return <Post />;
        }
        return <Login/>;
    }
}

export default withAuthenticate;