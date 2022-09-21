import React from "react";
import { Form, Radio, TextArea, Input } from "semantic-ui-react";
import "./QualityAndProgress.css";

const QualityAndProgress = () => {
  return (
    <Form className="main-form">
      <div>
        <Form.Field>Per Schedule</Form.Field>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Form.Field>
            <Radio label="Quality" name="radioGroup" value="" />
          </Form.Field>
          <Form.Field>
            <Radio label="Progress" name="radioGroup" />
          </Form.Field>
        </div>
      </div>
      <br />
      <div>
        <Form.Field>Comments</Form.Field>
        <Form.Field>
          <TextArea type="text" />
        </Form.Field>
      </div>
      <br />
      <div>
        <Form.Field>Remarks on Quality/Progress</Form.Field>
        <Form.Field>
          <TextArea type="text" />
        </Form.Field>
      </div>
      <br />
      <div>
        <Form.Field>Potential Impact on Schedule/Cost</Form.Field>
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
        <Form.Field>Photo on Observance</Form.Field>
        <Form.Field>
          <Input type="text" />
        </Form.Field>
      </div>
    </Form>
  );
};

export default QualityAndProgress;
