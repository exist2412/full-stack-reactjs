import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
// Import css files

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// import image
import avt from '../../../assets/images/du-hoc-nghe-tai-duc-nganh-co-khi-o-to.png';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className='section blog-section'>
                <div className='container'>
                    <div className='tt-title text-center'>Cẩm nang</div>
                    <OwlCarousel className='owl-theme' {...this.props.options}>
                        <div className='item'>
                            <div className='row'>
                                <div className='col-lg-5'>
                                    <div className='blog-image'>
                                        <a><img src={avt} alt='Cơ xương khớp' /></a>
                                    </div>
                                </div>
                                <div className='col-lg-7'>
                                    <a href='/' className='blog-title'><h3>The standard Lorem Ipsum passage, used since the 1500s</h3></a>
                                    <div className='blog-description'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='row'>
                                <div className='col-lg-5'>
                                    <div className='blog-image'>
                                        <a><img src={avt} alt='Cơ xương khớp' /></a>
                                    </div>
                                </div>
                                <div className='col-lg-7'>
                                    <a href='/' className='blog-title'><h3>The standard Lorem Ipsum passage, used since the 1500s</h3></a>
                                    <div className='blog-description'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='row'>
                                <div className='col-lg-5'>
                                    <div className='blog-image'>
                                        <a><img src={avt} alt='Cơ xương khớp' /></a>
                                    </div>
                                </div>
                                <div className='col-lg-7'>
                                    <a href='/' className='blog-title'><h3>The standard Lorem Ipsum passage, used since the 1500s</h3></a>
                                    <div className='blog-description'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                    <div className='text-center'>
                        <a href='/' className='btn btn-outline-success mt-4'>Xem tất cả</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
