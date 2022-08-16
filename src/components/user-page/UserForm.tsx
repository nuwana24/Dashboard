import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import "../../css/components.css"

interface Props {
    userHandler : (user : object) => void;
    userList : any;
    userupdateHandler : (user : object) => void;
    formUpdate?: boolean;
    updateData?: any;
    closeHandler : () => void;
    
}
interface State {
    id:string;
    email: string;
    firstName: string;
    lastName: string;
    organization: string;
    role: string;

}

export default class UserForm extends Component<Props, State>{
    state = {
        id:this.props.userList?.id || uuidv4(),
        email: this.props.userList?.email || "",
        firstName: this.props.userList?.firstName || "",
        lastName: this.props.userList?.lastName || "",
        organization: this.props.userList?.organization || "",
        role: this.props.userList?.role || "",
        isOpen: true,
    }
    componentDidUpdate() {
        console.log(this.state)
    }
    addUser = (e:any) =>{
        this.setState({
            id:uuidv4()
        })
        e.preventDefault();
        this.props.userHandler(this.state);
        this.props.closeHandler();

    }
    update = () =>{
        this.props.userupdateHandler(this.state);
        this.props.closeHandler();
    }
    onSubmitHandler(e: React.SyntheticEvent) {
        e.preventDefault();
    
        if (this.props.formUpdate) {
            this.update();
            return;
        }
    
        this.addUser(e);
      }

    render() {
        return (
            <div id='Body'>
                <Container>
                    <form onSubmit={this.props.formUpdate ? this.update: this.addUser}>
                        <Row>
                            <Col>
                                <div>
                                    <label>Email</label></div>
                                    <Form.Control type="email" placeholder="Enter Name" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    <label>First Name</label></div>
                                    <Form.Control type="text" placeholder="Enter Name" value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })} />
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col>
                                <div>
                                    <label>Last Name</label></div>
                                    <Form.Control type="text" placeholder="Enter Name" value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    <label>Organization</label></div>
                                    <Form.Select aria-label="Default select example" value={this.state.organization} onChange={(e) => this.setState({ organization: e.target.value })}>
                                        <option>Select</option>
                                        <option value="Company">Company</option>
                                        <option value="Department">Department</option>
                                        <option value="Branch">Branch</option>
                                        <option value="BYOx Fed">BYOx Fed</option>
                                    </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    <label>Role</label></div>
                                    <Form.Select aria-label="Default select example" value={this.state.role} onChange={(e) => this.setState({ role: e.target.value })}>
                                        <option>Select</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Reviewer">Reviewer</option>
                                        <option value="Editor">Editor</option>
                                    </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='mt-3'>
                                {this.props.userList ? (
                                    <>
                                    <Button type="submit" onClick={this.update} variant="success" >Update</Button>
                                    <Button type="submit" onClick={this.props.closeHandler}variant="light" >Cancel</Button>
                                    </>
                                ) : (
                                    <Button type="submit" onClick={this.addUser} variant="success" >Add</Button>
                                )}
                                
                            </Col>
                        </Row>

                    </form>
                </Container>
            </div>
        )

    }
}