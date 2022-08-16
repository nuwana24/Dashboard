import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "antd/dist/antd.css";
import { Table, Input } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";

type Props = {
  userList: any;
  userHandler: (user: object) => void;
  userupdateHandler: (user: object) => void;
  closeHandler: () => void;
  handleEdit: (use: object) => void;
  deleteHandler: (use: object) => void;
  onSearch: (e: React.FormEvent<HTMLInputElement>) => void;
};

const UserList = (props: Props) => {
  const userList = props.userList;

  const columns = [
    {
      key: "firstName",
      title: "First Name",
      dataIndex: "firstName",
    },
    {
      key: "lastName",
      title: "Last Name",
      dataIndex: "lastName",
    },
    {
      key: "organization",
      title: "Organization",
      dataIndex: "organization",
    },
    {
      key: "role",
      title: "Role",
      dataIndex: "role",
    },
    {
      key: "actions",
      title: "",
      render: (user: any) => {
        return (
          <>
            <EditOutlined onClick={() => props.handleEdit(user)} />
            <DeleteOutlined
              style={{ color: "red", marginLeft: 12 }}
              onClick={() => props.deleteHandler(user)}
            />
          </>
        );
      },
    },
  ];

  // const tableHead = (

  //     <>
  //         <tr>
  //             <th>First Name</th>
  //             <th>Last Name</th>
  //             <th>Organization</th>
  //             <th>Role</th>
  //             <th>Actions</th>
  //         </tr>
  //     </>

  // );

  // const tableBody = userList.map((user: any, index: number) =>
  //     <>
  //         <tr key={index}>
  //             <td>{user.firstName}</td>
  //             <td>{user.lastName}</td>
  //             <td>{user.organization}</td>
  //             <td>{user.role}</td>
  //             <td><Button variant="success" onClick={() => props.handleEdit(user)}>Edit</Button>
  //                 <Button variant="danger" onClick={() => props.deleteHandler(user)} >Delete</Button></td>
  //         </tr>
  //     </>

  // );

  return (
    <Container className="mt-3">
      <div className="white-color">
        <div className="search-bar-row mb-4">
          <Row>
            <Col>
              <Input
                prefix={<SearchOutlined />}
                style={{ width: 250 }}
                placeholder=" Search"
                onChange={props.onSearch}
              />
            </Col>
            <Col id="add-button">
              <Button id="add-button" className="me-auto" variant="danger">
                {" "}
                + Add User{" "}
              </Button>
            </Col>
          </Row>
        </div>

        {/* <Table striped bordered hover>
                <thead>
                    {tableHead}
                </thead>
                <tbody>
                    {tableBody}
                </tbody>
            </Table> */}
        <Table columns={columns} dataSource={userList}></Table>
      </div>
    </Container>
  );
};
export default UserList;
