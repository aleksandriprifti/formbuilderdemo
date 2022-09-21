import React from "react";
import { Card, CardContent, Icon, Button } from "semantic-ui-react";
import AccordionForm from "./AccordionForm";
import ModalForm from "./UI/ModalForm";

import "./CardForm.css";

const CardForm = () => (
  <div className="main-form">
    <Card fluid>
      <Card.Content>
        <h1>Site Inspection Report</h1>
      </Card.Content>
      <Card.Content extra>
        <AccordionForm />
      </Card.Content>
      <Card.Content extra className="main-button-controls">
        <Button className="button-style-save">
          <Icon name="edit" />
          Save Draft
        </Button>
        <div>
          <Icon name="info" />
        </div>

        <Button className="button-style-submit">
          <Icon name="check" />
          Submit
        </Button>
      </Card.Content>
    </Card>
  </div>
);

export default CardForm;
