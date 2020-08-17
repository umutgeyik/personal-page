import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import TextyAnim from 'rc-texty';


function HomeButton() {
  return <AwesomeButton onPress={() => window.open('https://docdro.id/Zmjvg4L')} type="secondary" size="large">print("Resume")<TextyAnim></TextyAnim></AwesomeButton>;
}

export default HomeButton;