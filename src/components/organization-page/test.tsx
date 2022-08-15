import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';


interface Props {
    organizationHandler : (user : object) => void;
    organizationList : any;
    organizationupdateHandler : (user : object) => void;
    formUpdate?: boolean;
    closeHandler : () => void;
    
    

}
interface State {
    id:string;
    orgName: string;
    parentOrgName: string;
    type: string;
    orgStatus: string;

}

export default class OrganizationForm extends Component<Props, State>{


    state = {
        id:this.props.organizationList.id || uuidv4(),
        orgName: this.props.organizationList.orgName || "",
        parentOrgName: this.props.organizationList.parentOrgName || "",
        type: this.props.organizationList.type || "",
        orgStatus: this.props.organizationList.orgStatus || "",
    }
    componentDidUpdate() {
        console.log(this.state)
    }
    addOrganization = (e:any) =>{
        this.setState({
            id:uuidv4()
        })
        e.preventDefault();
        this.props.organizationHandler(this.state);
    }
    update = () =>{
        this.props.organizationupdateHandler(this.state);
        this.props.closeHandler();
    }


    render() {
        return (
            <div>
                <Container>
                    <form onSubmit={this.addOrganization}>
                        <Row>
                            <Col>
                                <div>
                                    <label>Organization Name</label></div>
                                    <Form.Control type="text" placeholder="Enter Name" value={this.state.orgName} onChange={(e) => this.setState({ orgName: e.target.value })} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    <label>Parent Organization Name</label></div>
                                    <Form.Select aria-label="Default select example" value={this.state.parentOrgName} onChange={(e) => this.setState({ parentOrgName: e.target.value })}>
                                        <option>Select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    <label>Type</label></div>
                                    <Form.Select aria-label="Default select example" value={this.state.type} onChange={(e) => this.setState({ type: e.target.value })}>
                                        <option>Select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    <label>Organization Status</label></div>
                                    <Form.Select aria-label="Default select example" value={this.state.orgStatus} onChange={(e) => this.setState({ orgStatus: e.target.value })}>
                                        <option>Select</option>
                                        <option value="Active">Active</option>
                                        <option value="Disabled">Disabled</option>
                                    </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='mt-3'>
                                {this.props.formUpdate ? (
                                    <>
                                    <Button type="submit" onClick={this.update} variant="success" >Update</Button>
                                    <Button type="submit" onClick={this.props.closeHandler}variant="light" >Cancel</Button>
                                    </>
                                ) : (
                                    <Button type="submit" onClick={this.addOrganization} variant="success" >Add</Button>
                                )}
                                
                            </Col>
                        </Row>

                    </form>
                </Container>
            </div>
        )

    }
}