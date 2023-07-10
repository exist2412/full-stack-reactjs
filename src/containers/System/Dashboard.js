import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { add } from 'lodash';
import { emitter } from '../../utils/emitter';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    async componentDidMount() {
        
    }

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="">
                Dashboard
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
