import FirstComponent from './FirstComponent';
import {FifthComponent} from './FirstComponent';
import LearningJavaScript from './LearningJavaScript.jsx';
import SecondComponent from './SecondComponent';

export default function LearningComponent() {
    return (
        <div className="App">
          My Todo application component.
          <FirstComponent></FirstComponent>
          <SecondComponent></SecondComponent>
          <FifthComponent></FifthComponent>
          <LearningJavaScript></LearningJavaScript>
        </div>
    );
}