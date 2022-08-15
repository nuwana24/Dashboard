import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import UserForm from './UserForm';
import UserList from './UserList';
import api from "../../api/index"
import "../../css/components.css"
import UserPicture from "../../img/user.jpg";
import "../../css/navbar.css"
import Footer from "../footer";


type Props = {}

interface IList {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    organization: string;
    role: string;

}

const UserPage = (props: Props) => {

    const [userList, setUserList] = useState<IList[]>([]);

    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(Object);
    const [updatedItem, setUpdatedItem] = useState(false);
    const [deletedItem, setDeletedItem] = useState(false);


    const getUsers = async() =>{
        const response = await api.get("/user");
        return response.data
    }

    useEffect(() => {
        console.log("test use effect ")
        getUsers().then((res : any) =>{
            setUserList(res);
        }).catch((error : any) => {

            
        })
    },[updatedItem, deletedItem])


    const userHandler = async (user: any) => {
        setUserList(userList.concat(user));
        console.log(user)
        const request = user;

        const response = await api.post("/user", request). then((res:any) =>{
            setUserList([...userList , res.data])
        }).catch((error: any) =>{
            console.log(error)
        })
        return response;

    };
    const userupdateHandler = async (user: any) => {
        let updateItem = user;

        await api.put("/user/$(user.id)", updateItem).then ((res:any) => {
            setUpdatedItem(user.id);

        }).catch((error:any) => {
            console.log(error)
        })


    };
    const closeHandler = () => {
        setShow(false);
    }
    const deleteHandler = async(selected: any) => {

        await api.delete("/user/$(selected.id)").then ((res:any) => {
            setDeletedItem(selected.id);

        }).catch((error:any) => {
            console.log(error)
        })


    };
    const handleClose = () => setShow(false);

    const handleEdit = (selected: any) => {
        setSelected(selected);
        setShow(true);
    };

    const modal = (

        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Modal heading </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UserForm  closeHandler = {closeHandler} userHandler={userHandler} userupdateHandler = {userupdateHandler} formUpdate={true} userList={selected}/>
                </Modal.Body>

            </Modal>
        </>

    );
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
                    <li className="nav__item"><a id='nav-a' href="/organization" className='nav__link'>Organizations</a></li>
                    <li className="nav__item"><a id='nav-a' href="/user" className='nav__link active'>Users</a></li>
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

            <UserForm userHandler={userHandler} closeHandler = {closeHandler} userupdateHandler = {userupdateHandler} userList=""/>
            {userList.length > 0 ? (
                <UserList userList={userList} deleteHandler = {deleteHandler} handleEdit={handleEdit} userHandler={userHandler} closeHandler={closeHandler} userupdateHandler={userupdateHandler}/>
            ): ""
            }
            {modal}

        </div>
        {/* <Footer/> */}


            
        </>
    )
}
export default UserPage