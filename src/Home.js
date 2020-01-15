import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        const {history } = this.props
        console.log(this.props)
        return (
            <div>
                <h1>Welcome to the homepage</h1>
                <button onClick={()=> history.push("/")}>Log out</button>
            </div>
        )
    }
}
