import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
// Import css files

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// import image
import avt from '../../../assets/images/team-8-200x200.jpg';

class Doctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className='section doctor-section attribute-item bg-grey'>
                <div className='container'>
                    <div className='tt-title text-center'>Bác sĩ nổi bật tuần qua</div>
                    <OwlCarousel className='owl-theme' {...this.props.options}>
                        <div className='item'>
                            <div className='image'>
                                <a><img src={avt} alt='Cơ xương khớp' /></a>
                            </div>
                            <a href='/'><h3>Cơ xương khớp</h3></a>
                        </div>
                        <div className='item'>
                            <div className='image'>
                                <img src={avt} alt='Cơ xương khớp' />
                            </div>
                            <h3>Thần kinh</h3>
                        </div>
                        <div className='item'>
                            <div className='image'>
                                <img src={avt} alt='Cơ xương khớp' />
                            </div>
                            <h3>Tiêu hóa</h3>
                        </div>
                        <div className='item'>
                            <div className='image'>
                                <img src={avt} alt='Cơ xương khớp' />
                            </div>
                            <h3>Tim mạch</h3>
                        </div>
                        <div className='item'>
                            <div className='image'>
                                <img src={avt} alt='Cơ xương khớp' />
                            </div>
                            <h3>Tai mũi họng</h3>
                        </div>
                        <div className='item'>
                            <div className='image'>
                                <img src={avt} alt='Cơ xương khớp' />
                            </div>
                            <h3>Y học cổ truyền</h3>
                        </div>
                    </OwlCarousel>
                    <div className='text-center'>
                        <a href='/' className='btn btn-outline-success mt-4'>Xem thêm</a>
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
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
