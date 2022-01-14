import React from "react";

class SignUp extends React.Component {
    constructor(props) {
        super(props); // takes a parent class constructor, defining 'this'

        this.state = { 
            name:'', 
            gender:1
        }; 
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value // ES6 : variable in a square braket can be a key
        });
    }

    // class component requires a render method
    render() { 
        const { name, gender } = this.state; // { variables } : deconstructuring in ES6

        // Return in class component returns only 1 parent element.
        return (
            <form onSubmit={this.handleSubmit}>
                {/* enter name here */}
                <label>
                    Name
                    <input 
                        type='text' 
                        name={'name'} 
                        value={name}
                        onChange={this.handleChange}>
                    </input>
                </label>
                {/* select gender here */} <br/>
                <label>
                    Gender
                    <select
                        name={'gender'}
                        value={gender}
                        onChange={this.handleChange}>
                        <option value={1}>Male</option>
                        <option value={0}>Female</option>
                    </select>
                </label> 
                <br/>
                <input type="submit" value="submit"></input>
            </form>
        );
    }
}

export default SignUp