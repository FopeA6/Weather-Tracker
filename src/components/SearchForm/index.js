import React, { Component } from 'react';

class SearchForm extends Component {
    state = { location: "" }

    handleSubmit = e => {
        this.props.getResult(this.state.location);
    }

    updateInput = e => {
        const location = e.target.value 
        this.setState({ location })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" />
                <input type="submit" value="Search" />
            </form>
        );
    };
};

export default SearchForm;
