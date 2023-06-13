import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./user-manager.scss";
import { get_all_users} from '../../services/userServices';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: []
        }
    }

    async componentDidMount() {
        let res = await get_all_users('all');
        if (res && res.status === 200) {
            this.setState({
                arrUsers: res.data.listUsers
            })
        }
        console.log(res);
    }


    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <div className="title text-center mb-4">Danh sách người dùng</div>
                <table id="userManager">
                    <tr>
                        <th>Email</th>
                        <th>Tên người dùng</th>
                        <th>Điện thoại</th>
                        <th>Địa chỉ</th>
                        <th>Action</th>
                    </tr>
                    
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
                                        <button className="button button-delete"><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            </>
                        )
                    })
                        
                    }
                    
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
