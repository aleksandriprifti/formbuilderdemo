import React, { Component } from "react";
import { Form, Radio, TextArea } from "semantic-ui-react";
import "./HealthAndSafety";

export default class HealthAndSafety extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <Form className="main-form">
        <Form.Field>Health & Safety Observations</Form.Field>
        <Form.Field>
          <Radio
            label="PPE"
            name="radioGroup"
            value="this"
            checked={this.state.value === "this"}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="AUXILIARY INSTALL"
            name="radioGroup"
            value="that"
            checked={this.state.value === "that"}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="DEEP EXC / HEIGHT PROT"
            name="radioGroup"
            value="that"
            checked={this.state.value === "that"}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="SIGNAGE & MARKING"
            name="radioGroup"
            value="that"
            checked={this.state.value === "that"}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="LAVATORIES"
            name="radioGroup"
            value="that"
            checked={this.state.value === "that"}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="FIRST AID / HEALTH RISK "
            name="radioGroup"
            value="that"
            checked={this.state.value === "that"}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Or that"
            name="radioGroup"
            value="that"
            checked={this.state.value === "that"}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>Health & Safety Observations</Form.Field>
        <TextArea placeholder="Tell us more" />
      </Form>
    );
  }
}
