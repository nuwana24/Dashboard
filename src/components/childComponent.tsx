import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {useNavigate, useParams} from 'react-router-dom'; 
import {} from "./userData"

interface Props  {

}

// interface ChildComponentProps{
//  userData: []
// }

// interface ParamTypes{
//   [key: string]: string;
//   id: string;
// }

// const OtherPage = (props: Props) => {

//   const params = useParams<ParamTypes>();

//   const handleClick =() => {
//     navigate("/");

//   };
//   const navigate = useNavigate();

//   return (
//     <Container>
//       <div>OtherPage {params.id}</div>
//       <Button onClick={handleClick} variant="danger">Back Home</Button>
//     </Container>

//   )
// }
const OtherPage = () =>{
//   const {userData} = props;
//   console.log("userData", userData);

//   const tableBody = userData.map((value:any, key) =>
//   <>
//       <tr key={key}>
//           <td>{value.name}</td>
//       </tr>
//   </>
//   );

  return(
    <>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {/* {tableBody} */}
      </tbody>
 
    </table>
    </>
  )
}
export default OtherPage