import { React, Component } from "react";

class ClassCounterOne extends Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0,
            name : ''
        }
    }

    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            console.log("value updated")
            document.title = `Clicked ${this.state.count} times`
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {count : prevState.count + 1}
        })
    }

    nameChange = (e) => {
        this.setState({
            name : e.target.value
        })
    }

    render(){
        return (
            <div>
                <input type="text" value={this.state.name} onChange={(e) => this.nameChange(e)}/>
                <button onClick={() => this.incrementCount()}>Click {this.state.count} times</button>
            </div>
            
        )
    }
}

export default ClassCounterOne;