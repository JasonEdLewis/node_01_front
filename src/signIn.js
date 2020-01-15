import React, { Component } from 'react';
import './signIn.css';
import axios from "axios";


export default class signIn extends Component {

    state = {
        email: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/signin', this.state).then(data => {
        !!data && this.props.history.push("/home");
            this.setState({ email: "", password: "" })

        });


    }


    render() {
        
        return (
            <div>
                <div className="sign-in-form">
                    <h1>Welcome!!</h1>
                    < form onSubmit={this.handleSubmit}>
                        <p>Email:</p>
                        <input type="text"
                            onChange={this.handleChange}
                            name="email" />
                        <p>Password:</p>
                        <input type="text"
                            onChange={this.handleChange}
                            name="password" />
                        <p></p>
                        <input type="submit" />
                    </form>
                    <p>New? <span className="register-on-sigin-page" onClick={() => this.props.history.push('/register')} >Register </span> here</p>
                </div>
            </div>
        )
    }
}
