import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../../assets/images/header/NABL_BIG-ab085fb0.png';
import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import { languages } from '../../utils';
import { setLanguage } from '../../store/actions';
import VN from '../../assets/images/language/VN-flag.png';
import EN from '../../assets/images/language/EN-flag.png';
import { FormattedMessage } from 'react-intl';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenSidebar: true,
            isOpenDropdown: false
        }
    }

    componentDidUpdate = {
        
    }

    toggleSidebar = () => {
        this.setState({
            isOpenSidebar: !this.state.isOpenSidebar,
        })
    }

    toggleDropdown = () => {
        this.setState({
            isOpenDropdown: !this.state.isOpenDropdown,
        })
    }

    changeLanguage = (language) => {
        this.props.setLanguageApp(language)
    }

    render() {
        const { processLogout, userInfo } = this.props;
        let lang = this.props.language;
        console.log()
        return (
            <>
            <div className='info-user-container'>
                <div className="dropdown">
                    <button className="btn btn-success dropdown-toggle py-2" onClick={() => this.toggleDropdown()} type="button">
                        Hello, {userInfo.lastName ? userInfo.lastName : ''} <i class="far fa-user-circle"></i>
                    </button>
                    <ul className={this.state.isOpenDropdown === true ? 'dropdown-menu show' : 'dropdown-menu'}>
                        <li><a class="dropdown-item" href="#"><FormattedMessage id="menu.system.admin.info" /></a></li>
                        <li><a class="dropdown-item" href="#"><FormattedMessage id="menu.system.admin.schedule" /></a></li>
                        <li><a class="dropdown-item" href="#"><FormattedMessage id="menu.system.admin.chanpage-password" /></a></li>
                    </ul>
                </div>
            </div>
            <nav id='sidebar' className={this.state.isOpenSidebar === true ? '' : 'active'}>
                <div class="custom-menu">
                    <button type="button" id="sidebarCollapse" class="btn btn-primary" onClick={() => this.toggleSidebar()}>
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
                        <i className="fas fa-sign-out-alt"></i> Đăng xuất
                    </div>
                    <div className='tt-language'>
                        <a className={lang === languages.VI ? 'tt-img active' : 'tt-img'} onClick={() => this.changeLanguage(languages.VI)}><img src={VN} alt={languages.VI} /></a>
                        <a className={lang === languages.EN ? 'tt-img active' : 'tt-img'} onClick={() => this.changeLanguage(languages.EN)}><img src={EN} alt={languages.EN} /></a>
                    </div>
                    <div class="sidebar-footer">
                        <p>
                            Copyright © 2023 All rights reserved
                        </p>
                    </div>
                </div>
            </nav>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        setLanguageApp: (language) => dispatch(setLanguage(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
