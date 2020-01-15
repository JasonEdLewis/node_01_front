import React, { Component } from 'react';
import './register.css';
import axios from 'axios'

export default class Register extends Component {
    state = {
        name: " ",
        email: "",
        password: " "

    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', this.state)
            .then(data => {
                console.log(data);
                this.setState({
                    name: " ",
                    email: "",
                    password: " "

                });
                this.props.history.push("/home")
            }

            )
    }

    render() {

        return (
            <div>
                <div className="register-form">
                    <h1>Register</h1>
                    < form onSubmit={this.handleSubmit}>
                        <p>Username:</p>
                        <input type="text"
                            onChange={this.handleChange}
                            name="name"
                            required
                        />
                        <p>Email:</p>
                        <input type="email"
                            onChange={this.handleChange}
                            name="email"
                            required
                        />
                        <p>Password:</p>
                        <input type="password"
                            onChange={this.handleChange}
                            name="password"
                            required
                        />
                        <p></p>
                        <input type="submit" />
                    </form>
                    <p>Already a memeber? <span className="signIn-on-register-page" onClick={() => this.props.history.push('/')} >Sign in</span></p>
                </div>
            </div>
        )
    }
}
