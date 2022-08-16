import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../css/components.css";
import "antd/dist/antd.css";
import { Table, Input } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import { EditOutlined, DeleteOutlined, SearchOutlined } from "@ant-design/icons";

type Props = {
  organizationList: any;
  organizationHandler: (organization: object) => void;
  organizationupdateHandler: (organization: object) => void;
  closeHandler: () => void;
  handleEdit: (organization: object) => void;
  deleteHandler: (organization: object) => void;
  onAddClick: () => void;
};

const OrganizationList = (props: Props) => {
  const organizationList = props.organizationList;
  const dataSource = organizationList;

  const columns = [
    {
      key: "orgName",
      title: "Organization Name",
      dataIndex: "orgName",
    },
    {
      key: "parentOrgName",
      title: "Parent Organization Name",
      dataIndex: "parentOrgName",
    },
    {
      key: "type",
      title: "Type",
      dataIndex: "type",
    },
    {
      key: "orgStatus",
      title: "Status",
      dataIndex: "orgStatus",
    },
    {
      key: "actions",
      title: "",
      render: (organization: any) => {
        return (
          <>
            <EditOutlined onClick={() => props.handleEdit(organization)} />
            <DeleteOutlined
              style={{ color: "red", marginLeft: 12 }}
              onClick={() => props.deleteHandler(organization)}
            />
          </>
        );
      },
    },
  ];

  // const tableHead = (

  //     <>
  //         <tr>
  //             <th>Organization Name</th>
  //             <th>Parent Organization Name</th>
  //             <th>Type</th>
  //             <th>Organization Status</th>
  //             <th>Actions</th>
  //         </tr>
  //     </>

  // );

  // const tableBody = organizationList.map((organization: any, index: number) =>
  //     <>
  //         <tr key={index}>
  //             <td>{organization.orgName}</td>
  //             <td>{organization.parentOrgName}</td>
  //             <td>{organization.type}</td>
  //             <td>{organization.orgStatus}</td>
  //             <td><Button variant="success" onClick={() => props.handleEdit(organization)}>Edit </Button>

  //                 <Button variant="danger" onClick={() => props.deleteHandler(organization)} >Delete</Button></td>
  //         </tr>
  //     </>

  // );

  return (
    <>
    <Container className="mt-3">
      <div className="white-color">
        <div className="search-bar-row mb-4">
          <Row>
            <Col>
              <Input prefix={<SearchOutlined />} style={{ width: 250 }}placeholder= " Search" />

            </Col>
            <Col id="add-button">
              <Button
                id="add-button"
                className="me-auto"
                variant="danger"
                onClick={props.onAddClick}
              >
                {" "}
                + Add Organization{" "}
              </Button>
            </Col>
          </Row>
        </div>

        {/* <Table>
                    <thead>
                        {tableHead}
                    </thead>
                    <tbody>
                        {tableBody}
                    </tbody>
                </Table> */}
        <Table columns={columns} dataSource={dataSource}></Table>
      </div>
    </Container>
    <br/>
    </>
  );
};
export default OrganizationList;
