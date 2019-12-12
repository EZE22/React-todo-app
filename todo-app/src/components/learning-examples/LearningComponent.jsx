import React, {Component} from "react"
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';

//Parent Component
class LearningComponent extends Component {
    render(){
      return (
        <div className="LearningComponents">
          My Hello World
          <FirstComponent /> 
          <SecondComponent />
          <ThirdComponent />
        </div>
      );
    }
  }

export default LearningComponent