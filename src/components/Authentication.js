import React from 'react';

const withAuthenticate = Post =>
class extends React.Component {
    render() {
        return <Post />;
    }
}

export default withAuthenticate;