import Form from "react-bootstrap/Form";
import Styles from "./Input.css";
import Button from "./Button";

const Input = (props) => {
  return (
    <Form>
      <Form.Group className="user-input" controlId="formUserInput">
        <Form.Label className="form-label">Username</Form.Label>
        <Form.Control type="username" placeholder="Enter username" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="user-input" controlId="formUserInput">
        <Form.Label>Age(Years)</Form.Label>
        <Form.Control type="age" placeholder="Age" />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
    </Form>
  );
};

export default Input;
