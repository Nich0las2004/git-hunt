import classes from "./Mode.module.css";

import Form from "react-bootstrap/Form";

import { CiDark } from "react-icons/ci";

const Mode = () => {
  return (
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Check this switch"
        />
      </Form>
  );
};

export default Mode;
