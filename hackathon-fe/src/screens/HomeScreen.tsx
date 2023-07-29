import "../App.css";
import { Screen } from "../components/Screen";
import $ from 'jquery';
import MainBoard from '../components/mainBoard';

export function HomeScreen() {
  function handleSubmit() {
    $('#container').addClass("none");
    $('#screenGame').addClass("block");
    $('#screenGame').removeClass("none");
  }

  return (
    <Screen>
      <div className="container" id="container">
        <button id="start" className="button button--piyo" onClick={handleSubmit}>
          <div className="button__wrapper">
              <span className="button__text">Start</span>
          </div>
          <div className="characterBox">
              <div className="character wakeup">
                  <div className="character__face"></div>
              </div>
              <div className="character wakeup">
                  <div className="character__face"></div>
              </div>
              <div className="character">
                  <div className="character__face"></div>
              </div>
          </div>
        </button>
      </div>
      <div id="screenGame" className="none">
      <MainBoard/>
      </div>
    </Screen> 
  );
}
