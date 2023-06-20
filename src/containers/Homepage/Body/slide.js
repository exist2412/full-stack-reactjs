import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
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
                        <div className="title"><FormattedMessage id="slide.base" /> <br/><FormattedMessage id="slide.health_care" /></div>
                        <div className="search-bar">
                            <div className="header-search mb-3">
                                <input type="text" className="form-control" placeholder="" />
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
                                    <FormattedMessage id="slide.specility_exam" />
                                </div>
                            </div>
                            <div className="option">
                                <div className="icon">
                                    <i className="fas fa-file-alt"></i>
                                </div>
                                <div className="text">
                                    <FormattedMessage id="slide.physical_exam" />
                                </div>
                            </div>
                            <div className="option">
                                <div className="icon">
                                    <i className="fas fa-stethoscope"></i>
                                </div>
                                <div className="text">
                                    <FormattedMessage id="slide.dentai_exam" />
                                </div>
                            </div>
                            <div className="option">
                                <div className="icon">
                                    <i className="fas fa-procedures"></i>
                                </div>
                                <div className="text">
                                    <FormattedMessage id="slide.medical_test" />
                                </div>
                            </div>
                            <div className="option">
                                <div className="icon">
                                    <i className="fas fa-ambulance"></i>
                                </div>
                                <div className="text">
                                    <FormattedMessage id="slide.pack" />
                                </div>
                            </div>
                            <div className="option">
                                <div className="icon">
                                    <i class="fas fa-notes-medical"></i>
                                </div>
                                <div className="text">
                                    <FormattedMessage id="slide.product" />
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
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Slide);
