import React, { Component } from 'react';
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
            positionId: 'P0',
            gender: '0',
            roleId: 'R1'
        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggle();
    }   

    handleOnChangeField = (event, name) => {
      // good code
      let mapState = {...this.state};
      mapState[name] = event.target.value;
      this.setState({
        ...mapState
      });
    }

    handleAddNewUser = () => {
      let isValid = this.checkValidate();
      if (isValid === true) {
        // call api
        this.props.createNewUser(this.state);
        // DELETE VALUE
      }
    }

    checkValidate = () => {
      let isValid = true;
      let arrField = ['email','password','firstName','lastName','phone','address'];
      for(let i = 0; i < arrField.length; i ++) {
        if (!this.state[arrField[i]]) {
          isValid = false;
          alert(`Missing: ${arrField[i]}`);
          break;
        }
      }
      return isValid;
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
                              onChange={(event) => {this.handleOnChangeField(event, "email")}}
                              value={this.state.email}
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
                              onChange={(event) => {this.handleOnChangeField(event, "password")}}
                              value={this.state.password}
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
                              onChange={(event) => {this.handleOnChangeField(event, "lastName")}}
                              value={this.state.lastName}
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
                              onChange={(event) => {this.handleOnChangeField(event, "firstName")}}
                              value={this.state.firstName}
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
                              onChange={(event) => {this.handleOnChangeField(event, "phone")}}
                              value={this.state.phone}
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
                          onChange={(event) => {this.handleOnChangeField(event, "address")}}
                          value={this.state.address}
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
                              name="positionId"
                              type="select"
                              className='form-select'
                              onChange={(event) => {this.handleOnChangeField(event, "positionId")}}
                              value={this.state.positionId}
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
                              name="roleId"
                              type="select"
                              className='form-select'
                              onChange={(event) => {this.handleOnChangeField(event, "roleId")}}
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
                              onChange={(event) => {this.handleOnChangeField(event, "gender")}}
                            >
                              <option value="0">
                                Nam
                              </option>
                              <option value="1">
                                Nữ
                              </option>
                              <option value="2">
                                Khác
                              </option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                    </ModalBody>
                    <ModalFooter>
                    <Button className='px-4' color="primary" onClick={() => { this.handleAddNewUser()} }>
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
