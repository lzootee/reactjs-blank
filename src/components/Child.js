import React, {Component} from 'react';
import {connect} from 'react-redux';

class Child extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor");
    }

    render() {
        console.log("child", this.props.counter);
        return (
            <div>
                <span >{this.props.counter}</span>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    counter: state.counter
});

export default connect(mapStateToProps, null)(Child);