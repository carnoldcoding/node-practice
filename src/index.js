import _ from 'lodash';
import myName from "./myName";

function component() {
    const element = document.createElement('div');
  
    // Lodash, is imported above
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());

  console.log(myName("Cameron"));