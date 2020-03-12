import React, { Component } from "react";
import {connect} from "react-redux";

export default ChildComponent => {
    class ComposedComponent extends Component{
        // Component just got rendered
        componentDidMount() {
            this.shouldNavigateAway();
        }

        // Component just got updated with props
        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            if (!this.props.auth) {
                this.props.history.push('/');
            }
        }

        render() {
            return <ChildComponent {...this.props}/>;
        }
    }

    const mapStateToProps = state => ({auth: state.auth});


    return connect(mapStateToProps)(ComposedComponent);
}
