import React, { Component } from 'react';
import { connect } from 'react-redux';
import './body.scss';

class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        
        return (
            <div className='home-slide'>

                <div className="tt-home-slide-content">
                    <div className="container">
                        <div className="title">NỀN TẢNG Y TẾ <br/>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
                        <div className="search-bar">
                            <div className="header-search mb-3">
                                <input type="text" className="form-control" placeholder="Nhập từ khóa" />
                                <button className="btn-search" type="button"><i className="fas fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="options-container">
                        <div className='options'>
                            <div className="option">
                                <div className="icon">
                                <i className="fas fa-hospital-alt"></i>
                                </div>
                                <div className="text">
                                    Khám chuyên khoa
                                </div>
                            </div>
                            <div className="option">
                                <div className="icon">
                                    <i className="fas fa-file-alt"></i>
                                </div>
                                <div className="text">
                                    Khám tổng quát
                                </div>
                            </div>
                            <div className="option">
                                <div className="icon">
                                    <i className="fas fa-stethoscope"></i>
                                </div>
                                <div className="text">
                                    Khám nha khoa
                                </div>
                            </div>
                            <div className="option">
                                <div className="icon">
                                    <i className="fas fa-procedures"></i>
                                </div>
                                <div className="text">
                                    Xét nghiệm y học
                                </div>
                            </div>
                            <div className="option">
                                <div className="icon">
                                    <i className="fas fa-ambulance"></i>
                                </div>
                                <div className="text">
                                    Gói phẫu thuật
                                </div>
                            </div>
                            <div className="option">
                                <div className="icon">
                                    <i class="fas fa-notes-medical"></i>
                                </div>
                                <div className="text">
                                    Xét nghiệm y tế
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

export default connect(mapStateToProps, mapDispatchToProps)(Slide);
