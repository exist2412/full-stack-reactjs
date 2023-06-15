import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form,FormGroup,Label,Row,Col,Input } from 'reactstrap';

class ModalAddNewUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            positionId: '',
            gender: '',
            roleId: ''
        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggle();
    }   


    render() {
        return (
            <div>
                <Modal isOpen={this.props.isOpen} toggle={() => { this.toggle()} } size='lg' centered>
                    <ModalHeader toggle={() => { this.toggle()} }>Thêm người dùng</ModalHeader>
                    <Form>
                    <ModalBody>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="exampleEmail">
                              Email
                            </Label>
                            <Input
                              id="exampleEmail"
                              name="email"
                              placeholder="Tài khoản đăng nhập"
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="examplePassword">
                              Password
                            </Label>
                            <Input
                              id="examplePassword"
                              name="password"
                              placeholder="Mật khẩu"
                              type="password"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                      <Col md={4}>
                          <FormGroup>
                            <Label for="exampleLastName">
                            Họ & chữ lót
                            </Label>
                            <Input
                              id="exampleLastName"
                              name="lastName"
                              placeholder="Họ & chữ lót"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="exampleFirstName">
                              Tên người dùng
                            </Label>
                            <Input
                              id="exampleFirstName"
                              name="firstName"
                              placeholder="Tên người dùng"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="examplePhone">
                            Số điện thoại
                            </Label>
                            <Input
                              id="examplePhone"
                              name="phone"
                              placeholder="Số điện thoại"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <Label for="exampleAddress">
                          Địa chỉ
                        </Label>
                        <Input
                          id="exampleAddress"
                          name="address"
                          placeholder=""
                        />
                      </FormGroup>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="examplePosition">
                              Trình độ
                            </Label>
                            <Input
                              id="examplePosition"
                              name="position"
                              type="select"
                              className='form-select'
                            >
                              <option value="P0">
                                Bác sĩ
                              </option>
                              <option value="P1">
                                Thạc sĩ
                              </option>
                              <option value="P2">
                                Tiến sĩ
                              </option>
                              <option value="P3">
                                Giáo sư
                              </option>
                              <option value="P4">
                                Phó giáo sư
                              </option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="exampleRole">
                              Loại tài khoản
                            </Label>
                            <Input
                              id="exampleRole"
                              name="role"
                              type="select"
                              className='form-select'
                            >
                              <option value="R1">
                                Quản trị viên
                              </option>
                              <option value="R2">
                                Bác sĩ
                              </option>
                              <option value="R3">
                                Bệnh nhân
                              </option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col md={2}>
                        <FormGroup>
                            <Label for="exampleGender">
                              Giới tính
                            </Label>
                            <Input
                              id="exampleGender"
                              name="gender"
                              type="select"
                              className='form-select'
                            >
                              <option value="0">
                                Nam
                              </option>
                              <option value="1">
                                Nữ
                              </option>
                              <option>
                                Khác
                              </option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                    </ModalBody>
                    <ModalFooter>
                    <Button className='px-4' color="primary" onClick={() => { this.toggle()} }>
                        Lưu
                    </Button>{' '}
                    <Button className='px-4' color="secondary" onClick={() => { this.toggle()} }>
                        Hủy
                    </Button>
                    </ModalFooter>
                    </Form>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddNewUser);
