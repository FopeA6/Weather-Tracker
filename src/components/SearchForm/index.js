import React, { Component } from 'react';

class SearchForm extends Component {
    state = { location: "" }
    

    handleSubmit = e => {
        this.props.getResult(this.state.location);
        e.preventDefault();
    }

    handleInput = e => {
        const { location, value } = e.target;
        this.setState({ [location]: value });
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" />
                <input type="submit" value={this.state.search} 
                onChange={this.handleInput}/>
            </form>
        );
    };
};


export default SearchForm;
