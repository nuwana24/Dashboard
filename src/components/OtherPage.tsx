import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import {} from "./userData";
import UserPicture from "../img/user.jpg";
import "../css/navbar.css";
import Arrow from "../img/arrow.png";
import "../css/components.css";
import { Link } from "react-router-dom";
import api from "../api/index";

interface Props {}

// interface ChildComponentProps{
//  userData: []
// }

interface ParamTypes {
  [key: string]: string;
  id: string;
}

const OtherPage = (props: Props) => {
  const params = useParams<ParamTypes>();
  const [organizationItem, setOrganizationItem] = useState([]);
  const [userItem, setUserItem] = useState([]);

  const handleClick = () => {
    navigate("/");
  };
  const navigate = useNavigate();
  const viewOrganizationHandler = async () => {
    await api
      .get("/organization")
      .then((res: any) => {
        setOrganizationItem(res.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  useEffect(() => {
    viewOrganizationHandler();
  }, []);

  console.log(organizationItem);

  const viewUserHandler = async () => {
    await api
      .get("/user")
      .then((res: any) => {
        setUserItem(res.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  useEffect(() => {
    viewUserHandler();
  }, []);

  console.log(organizationItem);

  return (
    <>
      <nav className="nav__brand">
        <div className="me-auto left-links">
          <div className="nav__togglar">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <ul className="nav__menu">
            <li className="nav__item">
              <a id="nav-a" href="/" className="nav__link active">
                Overview
              </a>
            </li>
            <li className="nav__item">
              <a id="nav-a" href="/organization" className="nav__link">
                Organizations
              </a>
            </li>
            <li className="nav__item">
              <a id="nav-a" href="/user" className="nav__link">
                Users
              </a>
            </li>
          </ul>
        </div>
        <div className="right-links">
          <h5>Leo Blair</h5>
          <img
            src={UserPicture}
            alt=""
            height={"50px"}
            style={{ borderRadius: "50px" }}
          />
        </div>
      </nav>
      <div className="Body">
        <Container>
        <br/>
          <div className="hello-content ">
            <h2>Welcome, Leo Blair</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className="mt-3 ">
            <Row className="mb-3">
              <Col>
                <h3>Organizations ({organizationItem.length}) </h3>
                <p>Overview of Organizations</p>
                <div className="o-parent-card">
                  <div className="o-card">
                    {organizationItem.length > 0 &&
                      organizationItem.slice(-5).map((item: any) => (
                        <div key={item.orgName} className="data-card-row">
                          <img src={UserPicture} alt="" height={"40px"} />
                          <div className="data-card-detail">
                            <p id="o-name">{item.orgName}</p>
                            <p id="o-type">{item.type}</p>
                          </div>
                        </div>
                      ))}
                  </div>

                  <Link to="/organization">
                    <div className="viewall"></div>
                    <button className="viewall-btn">
                      <img src={Arrow} alt="" height={"20px"} /> View All
                    </button>
                  </Link>
                </div>
              </Col>
              <Col>
                <h3>Users ({userItem.length}) </h3>
                <p>Overview of Users</p>
                <div className="o-parent-card">
                  <div className="o-card">
                    {userItem.length > 0 &&
                      userItem.slice(-5).map((item: any) => (
                        <div key={item.firstName} className="data-card-row">
                          <img src={UserPicture} alt="" height={"40px"} />
                          <div className="data-card-detail">
                            <p id="o-name">
                              {item.firstName} {item.lastName}
                            </p>
                            <p id="o-type">{item.role}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                  <Link to="/user">
                    <div className="viewall"></div>
                    <button className="viewall-btn">
                      <img src={Arrow} alt="" height={"20px"} /> View All
                    </button>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default OtherPage;
