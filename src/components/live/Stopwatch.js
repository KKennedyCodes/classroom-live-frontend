// Resource Link: https://medium.com/@peterjd42/building-timers-in-react-stopwatch-and-countdown-bc06486560a2
import React, { Component } from "react";
// import "./App.css";
class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      timerStart: 0,
      timerTime: 0
    };
  }

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };
  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  };

  componentDidMount () {
    this.startTimer();
  }

  render() {
    const { timerTime } = this.state;
    // let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    return (
      <section className="Stopwatch">
        <section className="Stopwatch-header">Stopwatch</section>
        <section className="Stopwatch-display">
  {hours} : {minutes} : {seconds}
  {/* {hours} : {minutes} : {seconds} : {centiseconds} */}
</section>
{this.state.timerOn === false && this.state.timerTime === 0 && (
  <button onClick={this.startTimer}>Start</button>
)}
{this.state.timerOn === true && (
  <button onClick={this.stopTimer}>Stop</button>
)}
{this.state.timerOn === false && this.state.timerTime > 0 && (
  <button onClick={this.startTimer}>Resume</button>
)}
{this.state.timerOn === false && this.state.timerTime > 0 && (
  <button onClick={this.resetTimer}>Reset</button>
)}
      </section>
    );
  }
}
export default Stopwatch;