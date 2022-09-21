import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import "./AccordionForm.css";
import GeneralInformation from "./GeneralInformation.js";
import HealthAndSafety from "./HealthAndSafety";
import OngoingActivities from "./OngoingActivities";
import ObservanceOnOngoingActivities from "./ObservanceOnOngoingActivities";
import QualityAndProgress from "./QualityAndProgress";
import Progress from "./Progress";

export default class AccordionForm extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
          className="accordion"
        >
          <div className="accordion-title">
            <Icon name="dropdown" />
            General Information
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <GeneralInformation />
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <div className="accordion-title">
            <Icon name="dropdown" />
            Health & Safety
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <HealthAndSafety />
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <div className="accordion-title">
            <Icon name="dropdown" />
            Ongoing Activities
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <OngoingActivities />
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          <div className="accordion-title">
            <Icon name="dropdown" />
            Observance on Ongoing Activities
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <ObservanceOnOngoingActivities />
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={this.handleClick}
        >
          <div className="accordion-title">
            <Icon name="dropdown" />
            Quality & Progress
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <QualityAndProgress />
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 5}
          index={5}
          onClick={this.handleClick}
        >
          <div className="accordion-title">
            <Icon name="dropdown" />
            Progress
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
          <Progress />
        </Accordion.Content>
      </Accordion>
    );
  }
}
