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

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenSidebar: true,
        }
    }

    componentDidUpdate = {
        
    }

    toggleSidebar = () => {
        this.setState({
            isOpenSidebar: !this.state.isOpenSidebar,
        })
    }

    changeLanguage = (language) => {
        this.props.setLanguageApp(language)
    }

    render() {
        const { processLogout } = this.props;
        let lang = this.props.language;
        return (
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
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
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
