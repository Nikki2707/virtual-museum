import React from "react";
import { Form , Button } from "react-bootstrap";
import toast,{Toaster} from 'react-hot-toast';

function SignUp(){
  const notify = () => toast("You are Signed up!");
    return(
      <div id="signupform">
        <Form id="myform">
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="terms and conditions apply" required/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={notify}>
        Sign Up
      </Button>
      <Toaster />
    </Form>
    </div>
    );
}

export default SignUp;