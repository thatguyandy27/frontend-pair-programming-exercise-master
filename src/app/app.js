import React from 'react';
import {connect} from  'react-redux';
import {retrieveFeed} from '../feed/feedActions.js';


class App extends React.Component {
    constructor(props){
       super(props);
    }

    componentDidMount(){
        this.props.retrieveFeed();
    }

    render(){
        return <div>rendered</div>;
    }
}

function mapStateToProps(){
    return {};
}

function mapDispatchToProps(dispatch){
    return {
        retrieveFeed: () => dispatch(retrieveFeed())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);