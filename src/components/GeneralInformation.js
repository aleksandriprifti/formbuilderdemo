import React, { useState } from "react";
import "./GeneralInformation";

import {
  Form,
  Grid,
  Header,
  Label,
  Dropdown,
  Segment,
  Accordion,
  Icon,
  Input,
} from "semantic-ui-react";

const optionsOblast = [
  {
    key: "Dnipropetrovsk	",
    text: "Dnipropetrovsk	",
    value: "Dnipropetrovsk	",
  },
  {
    key: "Donetks",
    text: "Donetks",
    value: "Donetks",
  },
  {
    key: "Kharkiv",
    text: "Kharkiv",
    value: "Kharkiv",
  },
  {
    key: "Luhanks",
    text: "Luhanks",
    value: "Luhanks",
  },
];

const optionsName = [
  {
    key: "Mariupol",
    text: "Mariupol",
    value: "Mariupol",
  },
  {
    key: "Dobropillia",
    text: "Dobropillia",
    value: "Dobropillia",
  },
];

const GeneralInformation = () => {
  return (
    <div>
      <Grid.Column>
        {/* <Header textAlign="center">
          <h1>Site Inspection Report</h1>
        </Header> */}
        <Form className="main-form">
          <Form.Field>
            <label>Oblast</label>
            <Dropdown
              placeholder="blank"
              fluid
              selection
              options={optionsOblast}
              className="form-column"
            />
          </Form.Field>
          <Form.Field>
            <label>SP Name</label>
            <Dropdown
              placeholder="none selected"
              fluid
              selection
              options={optionsName}
            />
          </Form.Field>
          <Form.Field>
            <label>SP_Code</label>
            <Input disabled type="text" style={{ backgroundColor: "grey" }} />
          </Form.Field>
          <Form.Field>
            <label>Inspection Date</label>
            <Input type="date" />
          </Form.Field>
          <Form.Field>
            <label>Contractor</label>
            <Input disabled style={{ backgroundColor: "grey" }} />
          </Form.Field>
          <Form.Field>
            <label>Contractors representative</label>
            <Input type="text" />
          </Form.Field>
          <Form.Field>
            <label>USIF representative</label>
            <Input type="text" />
          </Form.Field>
        </Form>
      </Grid.Column>
    </div>
  );
};

export default GeneralInformation;
