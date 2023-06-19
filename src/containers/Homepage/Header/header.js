import React, { Component } from 'react';
import { connect } from 'react-redux';
import './header.scss';
import Logo from '../../../assets/images/header/NABL_BIG-ab085fb0.png';
import VN from '../../../assets/images/language/VN-flag.png';
import EN from '../../../assets/images/language/EN-flag.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
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
                                                <span className="tt-menu-box-title">Chuyên khoa</span>
                                                <span className="tt-menu-box-description">Tìm bác sĩ theo chuyên khoa</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <span className="tt-menu-box-title">Cơ sở y tế</span>
                                                <span className="tt-menu-box-description">Chọn bệnh viện, phòng khám</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <span className="tt-menu-box-title">Bác sĩ</span>
                                                <span className="tt-menu-box-description">Chọn bác sĩ</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <span className="tt-menu-box-title">Gói khám</span>
                                                <span className="tt-menu-box-description">Chọn gói khám</span>
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
                                        <i className="fas fa-question-circle"></i> Hỗ trợ
                                    </a>
                                </div>
                                <div className='tt-language'>
                                    <a className='tt-img' href><img src={VN} alt='Logo' /></a>
                                    <a className='tt-img' href><img src={EN} alt='Logo' /></a>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
