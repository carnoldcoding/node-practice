import _ from 'lodash';
import myName from "./myName";
import './styles.css';
import Profile from './assets/profile.jpeg'

function component() {
    const element = document.createElement('div');
  
    // Lodash, is imported above
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add("hello");

    // Add the image to our existing div.
    const myProfile = new Image();
    myProfile.src = Profile;
    element.appendChild(myProfile);
  
    return element;
  }
  
  document.body.appendChild(component());

  console.log(myName("Cameron"));