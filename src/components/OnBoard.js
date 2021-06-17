import React, { Component } from "react";
import { Steps} from "intro.js-react";

import "intro.js/introjs.css";

export default class OnBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stepsEnabled: true,
      initialStep: 0,
      steps: [
        {
          element: ".onBoard-1",
          intro: "Hello Welcome to ..."
        },
        {
          element: ".onBoard-2",
          intro: "Explore Global situation"
        },
        {
          element: ".onBoard-3",
          intro: "Explore each country situation"
        },
        {
          element: ".onBoard-4",
          intro: "Filter by Click on the table's header"
        },
        {
          element: ".onBoard-5",
          intro: "Can't find country you looking for ? /n Try Search instead"
        },
        {
          element: ".onBoard-6",
          intro: "That's it, Hope you enjoy!"
        }
      ],  };
  }

  render() {
    const {
      stepsEnabled,
      steps,
      initialStep,
    } = this.state;

    return (
        <Steps
          enabled={stepsEnabled}
          steps={steps}
          initialStep={initialStep}
          onExit={this.onExit}
        />
    );
  }

  onExit = () => {
    this.setState(() => ({ stepsEnabled: false }));
  };

}