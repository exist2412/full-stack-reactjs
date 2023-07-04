import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header/header';
import Slide from './Body/slide';
import Speciality from './Body/speciality';
import Facilities from './Body/facilities';
import Doctor from './Body/doctor';
import Blog from './Body/blog';
import Footer from './Footer/footer';
import './Body/body.scss';
import './Footer/footer.scss';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        const options = {
            margin: 20,
            responsiveClass: true,
            nav: true,
            dots: false,
            loop: true,
            autoplay: true,
            navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
            smartSpeed: 1000,
            autoplayHoverPause: true,
            autoplayTimeout: 10000,
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                700: {
                    items: 3,
                },
                1000: {
                    items: 4,
        
                }
            },
        };
        const options_blog = {
            margin: 20,
            responsiveClass: true,
            nav: true,
            dots: false,
            loop: true,
            autoplay: true,
            navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
            smartSpeed: 1000,
            autoplayHoverPause: true,
            autoplayTimeout: 10000,
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                700: {
                    items: 2,
                },
                1000: {
                    items: 2,
        
                }
            },
        };
        return (
            <div className='tt-page-wrapper'>
                <Header />
                <Slide />
                <Speciality options={options} />
                <Facilities options={options} />
                <Doctor options={options} />
                <Blog options={options_blog} />
                <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(Index);
