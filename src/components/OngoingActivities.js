import React from "react";
import "./OngoingActivities.css";
import { Form, Input, TextArea, Radio } from "semantic-ui-react";

const OngoingActivities = () => {
  return (
    <Form className="main-form">
      <div>
        <Form.Field>Block/Location</Form.Field>
        <Form.Field>
          <Input type="text" />
        </Form.Field>
      </div>
      <br />
      <div>
        <Form.Field>Description of works</Form.Field>
        <Form.Field>
          <TextArea type="text" />
        </Form.Field>
      </div>
      <br />
      <div>
        <Form.Field>Per Schedule</Form.Field>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Form.Field>
            <Radio label="Yes" name="radioGroup" value="" />
          </Form.Field>
          <Form.Field>
            <Radio label="No" name="radioGroup" />
          </Form.Field>
        </div>
      </div>
      <br />
      <div>
        <Form.Field>Per Schedule Comments</Form.Field>
        <Form.Field>
          <Input type="text" />
        </Form.Field>
      </div>
      <br />
      <div>
        <Form.Field>Remarks</Form.Field>
        <Form.Field>
          <TextArea type="text" />
        </Form.Field>
      </div>
    </Form>
  );
};

export default OngoingActivities;
