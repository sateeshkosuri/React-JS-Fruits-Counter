import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}
  onIncreasement = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }
  onIncreasement1 = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }
  render() {
    const {count1, count2} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">
            Bob ate<span className="counter"> {count1} </span>mangoes
            <span className="counter"> {count2} </span>bananas
          </h1>
          <div className="image-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button className="button" onClick={this.onIncreasement}>
                Eat Mango
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <button className="button" onClick={this.onIncreasement1}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
