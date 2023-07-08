import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../../assets/images/header/NABL_BIG-ab085fb0.png';
import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';

class Header extends Component {

    render() {
        const { processLogout } = this.props;

        return (
            <nav id='sidebar'>
                <div class="custom-menu">
                    <button type="button" id="sidebarCollapse" class="btn btn-primary">
                        <i class="fa fa-bars"></i>
                        <span class="sr-only">Toggle Menu</span>
                    </button>
                </div>
                <div className="header-container">
                    <a className='logo' href='/'><img src={Logo} alt='Logo' /></a>
                    {/* thanh navigator */}
                    <div className="header-tabs-container">
                        <Navigator menus={adminMenu} />
                    </div>

                    {/* nút logout */}
                    <div className="btn btn-logout" onClick={processLogout}>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                    <div class="sidebar-footer">
                        <p>
                            Copyright © 2023 All rights reserved
                        </p>
                    </div>
                </div>
            </nav>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
