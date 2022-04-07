// Write your code here
import {Component} from 'react'
import './index.css'

const intialState = {
  timerInSeconds: 0,
  isTimerRunning: false,
}

class Stopwatch extends Component {
  state = intialState

  componentWillUnmount() {
    this.clearTimeInterval()
  }

  onStartBtn = () => {
    this.intervalId = setInterval(this.IncrementedtimerInSeconds, 1000)
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
  }

  onStopBtn = () => {
    this.clearTimeInterval()
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
  }

  onResetBtn = () => {
    this.clearTimeInterval()
    this.setState(intialState)
  }

  getTimerinMinutesSeconds() {
    const {timerInSeconds, isTimerRunning} = this.state
    const minutes = Math.floor(timerInSeconds / 60)
    const seconds = Math.floor(timerInSeconds % 60)
    const stringifyMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifySeconds = seconds > 9 ? seconds : `0${seconds}`
    return `${stringifyMinutes}:${stringifySeconds}`
  }

  clearTimeInterval = () => clearInterval(this.intervalId)

  IncrementedtimerInSeconds = () => {
    this.setState(prevState => ({timerInSeconds: prevState.timerInSeconds + 1}))
  }

  render() {
    const {isTimerRunning} = this.state
    const stopWatchTimer = this.getTimerinMinutesSeconds()
    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="card">
            <div className="head-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="stop-watch-png"
              />
              <p className="timer-cls">Timer</p>
            </div>
            <h1 className="running-time">{stopWatchTimer}</h1>
            <div className="btn-container">
              <button
                className="btn btn-start"
                type="button"
                onClick={this.onStartBtn}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                className="btn btn-stop"
                type="button"
                onClick={this.onStopBtn}
              >
                Stop
              </button>
              <button
                className="btn btn-reset"
                type="button"
                onClick={this.onResetBtn}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
