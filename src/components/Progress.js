import React from "react";
import { Form, TextArea, Input } from "semantic-ui-react";
import "./Progress.css";

const Progress = () => {
  return (
    <Form className="main-form">
      <div>
        <Form.Field>Actual % completed</Form.Field>
        <Form.Field>
          <Input type="number" />
        </Form.Field>
      </div>
      <br />
      <div>
        <Form.Field>Planed completion date</Form.Field>
        <Form.Field>
          <Input type="date" />
        </Form.Field>
      </div>
    </Form>
  );
};

export default Progress;
