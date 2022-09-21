import React from "react";
import "./ObservanceOnOngoingActivities.css";
import { Form, TextArea, Input } from "semantic-ui-react";

const ObservanceOnOngoingActivities = () => {
  return (
    <Form className="main-form">
      <div>
        <Form.Field>Observance</Form.Field>
        <Form.Field>
          <TextArea type="text" />
        </Form.Field>
      </div>
      <br />
      <div>
        <Form.Field>Photo on Observance</Form.Field>
        <Form.Field>
          <Input type="up" />
        </Form.Field>
      </div>
    </Form>
  );
};

export default ObservanceOnOngoingActivities;
