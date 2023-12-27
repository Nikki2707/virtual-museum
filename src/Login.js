import React from "react";
import { Form , Button } from "react-bootstrap";
import toast,{Toaster} from 'react-hot-toast';


function Login(){
  const notify = () => toast("Logged in successfully!");
    return(
      <div  id="loginform">
    <Form id="myform">
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={notify}>
        Login
      </Button>
     <Toaster />
    </Form>
    </div>
    );
}

export default Login;