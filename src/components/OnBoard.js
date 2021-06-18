import React, { Component } from "react";
import { Steps} from "intro.js-react";

import "intro.js/introjs.css";

export default class OnBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        doneLabel: "Done",
        exitOnOverlayClick: true,
        exitOnEsc: true,
        scrollToElement: true,
        hidePrev:true
      },
      stepsEnabled: true,
      initialStep: 0,
      steps: [
        {
          element: ".onBoard-1",
          intro: "Welcome to Onboard session 🎉🎉 <br /> <br /> This session will guide you through all aspects of application",
          tooltipClass: "font-normal body-font focus:outline-none focus-within:outline-none",
        },
        {
          element: ".onBoard-2",
          intro: "Explore global situation",
          tooltipClass: "font-normal body-font focus:outline-none focus-within:outline-none"
        },
        {
          element: ".onBoard-3",
          intro: "Explore each country situation",
          tooltipClass: "font-normal body-font focus:outline-none focus-within:outline-none"
        },
        {
          element: ".onBoard-4",
          intro: "Filter each data by click on the table's header",
          tooltipClass: "font-normal body-font focus:outline-none focus-within:outline-none"
        },
        {
          element: ".onBoard-5",
          intro: "Can't Find What You're Looking For? <br /><br /> Try Search instead ! 🕵",
          tooltipClass: "font-normal body-font focus:outline-none focus-within:outline-none"
        },
        {
          element: ".onBoard-6",
          intro: "That's it, <br /><br /> Hope you enjoy! 😍",
          tooltipClass: "font-normal body-font focus:outline-none focus-within:outline-none"
        }
      ],  };
  }

  render() {
    const {
      stepsEnabled,
      steps,
      initialStep,
      options
    } = this.state;

    return (
        <Steps
          enabled={stepsEnabled}
          steps={steps}
          initialStep={initialStep}
          onExit={this.onExit}
          options={options}
        />
    );
  }

  onExit = () => {
    this.setState(() => ({ stepsEnabled: false }));
  };

}