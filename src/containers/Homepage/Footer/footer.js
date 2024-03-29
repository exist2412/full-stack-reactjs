import React, { Component } from 'react';
import { connect } from 'react-redux';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    render() {
        
        return (
            
               
                <footer class="footer text-center text-lg-start text-light">
                
                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    
                    <div className='container'>
                    
                    <div className='socials'>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                       
                    
                    </div>
                    </div>
                
                </section>
                
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                    
                    <div className="row mt-3">
                    
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        
                        <h6 className="text-uppercase fw-bold mb-4">
                            <i className="fas fa-gem me-3"></i>Company name
                        </h6>
                        <p>
                            Here you can use rows and columns to organize your footer content. Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit.
                        </p>
                        </div>
                    
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        
                        <h6 className="text-uppercase fw-bold mb-4">
                            Products
                        </h6>
                        <p>
                            <a href="#!" class="text-reset">Angular</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">React</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Vue</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Laravel</a>
                        </p>
                        </div>
                        
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        
                        <h6 className="text-uppercase fw-bold mb-4">
                            Useful links
                        </h6>
                        <p>
                            <a href="#!" className="text-reset">Pricing</a>
                        </p>
                        <p>
                            <a href="#!" className="text-reset">Settings</a>
                        </p>
                        <p>
                            <a href="#!" className="text-reset">Orders</a>
                        </p>
                        <p>
                            <a href="#!" className="text-reset">Help</a>
                        </p>
                        </div>
                    
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        
                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                        <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                        <p>
                            <i className="fas fa-envelope me-3"></i>
                            info@example.com
                        </p>
                        <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                        <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>
                        
                    </div>
                    
                    </div>
                </section>
                
                <div className="copyright text-center p-4">
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> Exist Nguyen</a>
                </div>
                
                </footer>

            
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
