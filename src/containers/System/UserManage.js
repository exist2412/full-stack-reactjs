import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./user-manager.scss";
import { get_all_users, createUser, handleDeleteUser } from '../../services/userServices';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import ModalAddNewUser from './ModalAddNewUser';
import ModalDeleteUser from './ModalDeleteUser';
import { add } from 'lodash';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpen: false,
            modalDelete: false,
            id: ''
        }
    }

    async componentDidMount() {
        await this.getAllUsers();
    }

    getAllUsers = async () => {
        let res = await get_all_users('all');
        if (res && res.status === 200) {
            this.setState({
                arrUsers: res.data.listUsers
            })
        }
    }

    callAddNewUser = () => {
        this.setState({
            isOpen: true,
        });
    }

    callDeleteUser = (item) => {
        this.setState({
            modalDelete: true,
            id: item.id
        });
    }

    deleteUser = async (id) => {
        try {
            let res = await handleDeleteUser(id);
            if(res && res.status === 200) {
                await this.getAllUsers();
                this.setState({
                    modalDelete: false
                });
            }
            toast(res.data.massage, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } catch (e) {
           console.log(e); 
        }
    }

    AddNewUser = async (data, message) => {
        try {
            let res = await createUser(data);
            
            if(res && res.data.result.errCode === 0 && res.status === 200) {
                await this.getAllUsers();
                this.setState({
                    isOpen: false
                });
            }
            toast(res.data.result.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            this.setState({
                isClear: false
            });
        } catch (e) {
            console.log(e);
        }
    }

    toggleAddUserModal = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }


    toggleDeleteUserModal = () => {
        this.setState({
            modalDelete: !this.state.modalDelete
        });
    }

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <div className="title text-center mb-4">Danh sách người dùng</div>
                <div className='text-right mb-3'>
                    <button 
                        className='btn-default btn-primary px-4 py-2'
                        onClick={() => this.callAddNewUser()}
                    >
                        <i className="fas fa-user-plus"></i> Thêm mới
                    </button>
                </div>
                <ModalAddNewUser 
                    key={'modalNewUser'} 
                    createNewUser={this.AddNewUser} 
                    isOpen={this.state.isOpen} 
                    toggle={this.toggleAddUserModal} 
                />
                <ModalDeleteUser
                    key={'modalDeleteUser'} 
                    modalDelete={this.state.modalDelete}
                    toggle={this.toggleDeleteUserModal}
                    deleteUser={this.deleteUser}
                    id={this.state.id}
                />
                <table id="userManager">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Tên người dùng</th>
                            <th>Điện thoại</th>
                            <th>Địa chỉ</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    { arrUsers && arrUsers.map((item, index) => {
                        return(
                            <>
                                <tr key={index}>
                                    <td>{item.email}</td>
                                    <td>{item.lastName} {item.firstName}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className="button button-edit"><i className="fas fa-wrench"></i></button>
                                        <button className="button button-delete" onClick={() => this.callDeleteUser(item)}><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            </>
                        )
                    })
                        
                    }
                    </tbody>
                </table>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
