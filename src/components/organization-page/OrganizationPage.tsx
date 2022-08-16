import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import OrganizationForm from "./OrganizationForm";
import OrganizationList from "./OrganizationList";
import api from "../../api/index";
import "../../css/components.css";
import OrganizationModal from "./OrganizationModal";
import UserPicture from "../../img/user.jpg";
import "../../css/navbar.css"
import { AnyCnameRecord } from "dns";

type Props = {};

interface IList {
  id: string;
  orgName: string;
  parentOrgName: string;
  type: string;
  orgStatus: string;
}

const OrganizationPage = (props: Props) => {
  const [organizationList, setOrganizationList] = useState<IList[]>([]);

  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedItem, setUpdatedItem] = useState(false);
  const [deletedItem, setDeletedItem] = useState(false);
  const [organizations, setOrganizations] = useState<IList[]>([]);

  const getOrganizations = async () => {
    const response = await api.get("/organization");
    return response.data;
  };

  useEffect(() => {
    console.log("test use effect ");
    getOrganizations()
      .then((res: any) => {
        setOrganizationList(res);
        setOrganizations(res);
      })
      .catch((error: any) => {});
  }, [updatedItem, deletedItem]);

  const organizationHandler = async (organization: any) => {
    setOrganizationList(organizationList.concat(organization));
    console.log(organization);
    const request = organization;

    const response = await api
      .post("/organization", request)
      .then((res: any) => {
        console.log(res);
        setOrganizationList([...organizationList, res.data]);
        setOrganizations([...organizationList, res.data]);
      })
      .catch((error: any) => {
        console.log(error);
      });
    return response;
  };
  const organizationupdateHandler = async (organization: any) => {
    let updateItem = organization;

    await api
      .put(`/organization/${organization.id}`, updateItem)
      .then((res: any) => {
        setUpdatedItem(organization.id);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  const closeHandler = () => {
    setShow(false);
  };
  const deleteHandler = async (selected: any) => {
    await api
      .delete(`/organization/${selected.id}`)
      .then((res: any) => {
        setDeletedItem(selected.id);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  const handleClose = () => {
    setSelected(null);
    setShow(false);
  }

  const handleEdit = (selected: any) => {
    setSelected(selected);
    setShow(true);
  };

  const handleSubmitModal = () => setShow(!show);

  const onSearchChangeHandler = (e: React.FormEvent<HTMLInputElement>) =>
  e.currentTarget.value
    ? setOrganizations(
        organizationList.filter(
          (org: any) => org.orgName === e.currentTarget.value
        )
      )
    : setOrganizations(organizationList);

  return (
    <>
    <nav className='nav__brand'>
            <div className='me-auto left-links'>
                <div className="nav__togglar">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul className='nav__menu'>
                    <li className="nav__item"><a id='nav-a' href="/" className='nav__link'>Overview</a></li>
                    <li className="nav__item"><a id='nav-a' href="/organization" className='nav__link active'>Organizations</a></li>
                    <li className="nav__item"><a id='nav-a' href="/user" className='nav__link'>Users</a></li>
                </ul>

            </div>
            <div className='right-links'>
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
      {/* <OrganizationForm
        organizationHandler={organizationHandler}
        closeHandler={closeHandler}
        organizationupdateHandler={organizationupdateHandler}
        organizationList=""
      /> */}
      <br/>
      {organizationList.length > 0 ? (
        <OrganizationList
          organizationList={organizations}
          deleteHandler={deleteHandler}
          handleEdit={handleEdit}
          organizationHandler={organizationHandler}
          closeHandler={closeHandler}
          organizationupdateHandler={organizationupdateHandler}
          onAddClick={handleSubmitModal}
          onSearch={onSearchChangeHandler}
        />
      ) : (
        ""
      )}
      {/* {modal} */}
      <OrganizationModal
        show={show}
        selected={selected}
        updateData={null}
        formUpdate={!!selected}
        handleClose={handleClose}
        closeHandler={closeHandler}
        organizationupdateHandler={organizationupdateHandler}
        organizationHandler={organizationHandler}
      />
    </div>
    </>
  );
};
export default OrganizationPage;
