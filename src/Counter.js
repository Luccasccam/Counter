import React from "react"
class Counter extends React.Component {
    constructor(props){
        super(props)

        this.handleDecrementClick = this.handleDecrementClick.bind(this)
        this.handleInclementClick = this.handleInclementClick.bind(this)

        this.state = {
            counter: props.initialCount
        }
    }

    handleDecrementClick() {
        this.setState({ counter: this.state.counter - 1})
        
    }
    handleInclementClick() {
        this.setState({ counter: this.state.counter + 1})
    }

    render() {
        const style ={
            color: this.props.color
        }
        return(
            <div>
                <span style={style}> O contador está  em: {this.state.counter} </span>
                <button onClick={this.handleDecrementClick}>-</button>
                <button onClick={this.handleInclementClick}>+</button>
            </div>
        )
    }
}

export default Counter