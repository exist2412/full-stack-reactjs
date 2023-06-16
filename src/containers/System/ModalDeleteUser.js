import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';

class ModalDeleteUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    toggle = () => {
      this.props.toggle();
    }

    propsDeleteUser = (id) => {
      this.props.deleteUser(id);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.modalDelete} toggle={() => { this.toggle()} } size='md' centered>
                    <ModalHeader className='bg-warning' toggle={() => { this.toggle()} }>Bạn có chắc chắn muốn xóa người dùng này??</ModalHeader>
                    <ModalBody className='text-center'>
                      <Button className='px-4' color="danger" onClick={() => {this.propsDeleteUser(this.props.id)}}>
                          Xác nhận
                      </Button>
                      <Button className='px-4 ms-3' color="secondary" onClick={() => { this.toggle()} }>
                          Hủy
                      </Button>
                    </ModalBody>
                </Modal>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalDeleteUser);

