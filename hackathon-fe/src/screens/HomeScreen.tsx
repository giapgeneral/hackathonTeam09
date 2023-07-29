import "../App.css";
import { Screen } from "../components/Screen";
import $ from 'jquery';

export function HomeScreen() {
  function handleSubmit() {
    $('#container').addClass("none");
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
    </Screen> 
  );
}
