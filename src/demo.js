import React from 'react';
import Child from './components/Child';
import ButtonComp from './components/Button';
import A from './components/A';
import B from './components/B';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


import {connect} from 'react-redux';
import {INCREASE, DECREASE} from './actions/type';

class Demo extends React.Component {
    handleIncrease = () => {
        this.props.dispatch({type: INCREASE});
    };

    handleDecrease = () => {
        this.props.dispatch({type: DECREASE});
    };

    render() {
        return (
            <div style={{
                flex: 1,
                width: '100%',
                justifyContent: 'center'
            }}
            >
                <div style={{
                    flex: 1,
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <Child/>
                </div>
                <div style = {{flex:1}}>
                    <ButtonComp
                        onPress={this.handleIncrease}/>
                    <ButtonComp
                        onPress={this.handleDecrease}/>
                </div>

                <Router>
                    <div>
                        <ul>
                        <li><Link to="/a">A Page</Link></li>
                        <li><Link to="/b">B Page</Link></li>
                        </ul>
                        <Route path="/a" component={A}/>
                        <Route path="/b" component={B}/>
                    </div>
                </Router>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      count: state.count
    };
}

export default connect(mapStateToProps)(Demo);
