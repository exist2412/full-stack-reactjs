import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './header.scss';
import Logo from '../../../assets/images/header/NABL_BIG-ab085fb0.png';
import VN from '../../../assets/images/language/VN-flag.png';
import EN from '../../../assets/images/language/EN-flag.png';
import { languages } from '../../../utils';
import { setLanguage } from '../../../store/actions'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    changeLanguage = (language) => {
        this.props.setLanguageApp(language)
    }

    render() {
        return (
            <div className='tt-header-container shadow-sm'>
                <div className='container'>
                    <div className='row gx-3 align-items-center'>
                        <div className='col-lg-3'>
                            <div className="tt-left">
                                <button className='tt-bars'><i className="fas fa-bars"></i></button>
                                <a className='logo' href='/'><img src={Logo} alt='Logo' /></a>
                            </div>
                        </div>
                        <div className='col-lg-7'>
                            <div className="tt-center">
                                <div className="tt-menu-box">
                                    <ul>
                                        <li>
                                            <a href="/">
                                                <span className="tt-menu-box-title"><FormattedMessage id="header.specialty" /></span>
                                                <span className="tt-menu-box-description"><FormattedMessage id="header.find_doctor" /></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <span className="tt-menu-box-title"><FormattedMessage id="header.health_facility" /></span>
                                                <span className="tt-menu-box-description"><FormattedMessage id="header.select_room" /></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <span className="tt-menu-box-title"><FormattedMessage id="header.doctor" /></span>
                                                <span className="tt-menu-box-description"><FormattedMessage id="header.select_doctor" /></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <span className="tt-menu-box-title"><FormattedMessage id="header.package" /></span>
                                                <span className="tt-menu-box-description"><FormattedMessage id="header.select_package" /></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className="tt-header-support">
                                    <a href="/" className="tt-button">
                                        <i className="fas fa-question-circle"></i> <FormattedMessage id="header.support" />
                                    </a>
                                </div>
                                <div className='tt-language'>
                                    <a className='tt-img' href onClick={() => this.changeLanguage(languages.VI)}><img src={VN} alt='Logo' /></a>
                                    <a className='tt-img' href onClick={() => this.changeLanguage(languages.EN)}><img src={EN} alt='Logo' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
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
        setLanguageApp: (language) => dispatch(setLanguage(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
