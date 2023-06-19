import React, { Component } from 'react';
import { connect } from 'react-redux';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    render() {
        
        return (
            <div>
                footer
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
