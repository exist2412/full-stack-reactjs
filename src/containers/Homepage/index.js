import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header/header';
import Slide from './Body/slide';


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        
        return (
            <div className='tt-page-wrapper'>
                <Header />
                <Slide />
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

export default connect(mapStateToProps, mapDispatchToProps)(Index);
