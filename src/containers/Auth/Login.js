import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './login.scss';
import {handleLoginApi} from '../../services/userServices';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShow: false,
        }
    }

    handleUsername = (event) => {
        let UserName = event.target.value;
        this.setState({
            username: UserName
        })
    }

    handlePassword = (event) => {
        let PassWord = event.target.value;
        this.setState({
            password: PassWord
        })
    }

    handleLogin = async () => {
        try {
            let data = await handleLoginApi(this.state.username, this.state.password);
            console.log(data)
            if (data && data.data.errCode !== 0) {
                this.setState({
                    errMassage: data.data.errMessage
                })
            }
            if (data && data.data.errCode === 0) {
                this.props.userLoginSuccess(data.data.user);
            }
        } catch (e) {
            console.log(e);
            // this.setState({
            //     errMassage: e.response.data.errMessage
            // })
        }
        
    }

    handleShowHidePassWord = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        
        return (
            <div className='main-login-container'>
                <div className='login-container'>
                <div id="loginform">
                    <h2 id="headerTitle">Login</h2>
                    <div>
                        <div className="row">
                            <label>Username</label>
                            <input type="text" placeholder="Enter your username" value={this.state.username} onChange={(event) => this.handleUsername(event)} />
                        </div>  
                        <div className="row position-relative">
                            <label>Password</label>
                            <input type={this.state.isShow ? 'text': 'password'} placeholder="Enter your password" value={this.state.password} onChange={(event) => this.handlePassword(event)} />
                            <span className='showPassword' onClick={() => this.handleShowHidePassWord()}><i className={this.state.isShow ? 'far fa-eye-slash': 'fas fa-eye'}></i></span>
                        </div>
                        <div className="err">{this.state.errMassage}</div>
                        <div id="button" className="row">
                            <button onClick={() => this.handleLogin()}>Login</button>
                        </div>
                        <a className="forgot-password" href="#">Quên mật khẩu?</a>
                    </div>
                    <div id="alternativeLogin">
                        <label>Or sign in with:</label>
                        <div id="iconGroup">
                            <a href="#" id="facebookIcon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" id="googleIcon">
                                <i className="fab fa-google-plus-g"></i>
                            </a> 
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
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
