import React, { Component } from 'react'

class ClassInterval extends Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    componentDidMount(){
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    tick = () => {
        this.setState(prevState => {
            return {count : prevState.count + 1}
        })
    }

    render(){
        return <h2>{this.state.count}</h2>
    }
}

export default ClassInterval