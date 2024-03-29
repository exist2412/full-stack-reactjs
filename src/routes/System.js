import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import DoctorManage from '../containers/System/DoctorManage';
import ProductManage from '../containers/System/ProductManage';
import Dashboard from '../containers/System/Dashboard';
import Header from '../containers/Header/Header';
class System extends Component {
    render() {
        
        const { systemMenuPath, isLoggedIn } = this.props;
        return (
            <React.Fragment>
                <div className='wrapper d-flex align-items-stretch'>
                    {isLoggedIn && <Header />}
                    <div className="system-container">
                        <div className="system-list">
                            <Switch>
                                <Route path="/system/dashboard" component={Dashboard} />
                                <Route path="/system/user-manage" component={UserManage} />
                                <Route path="/system/doctor-manage" component={DoctorManage} />
                                <Route path="/system/user-redux" component={ProductManage} />
                                <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
