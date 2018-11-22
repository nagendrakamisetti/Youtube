// This is class based component.

import React, { Component } from 'react';

class SearchBar2 extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    /*
    Type 1:
    render() {
        return <input onChange={this.onInputChange} />;
    }

    onInputChange(event) {
        console.log(event.target.value);
    }
     */
    /*
        render() {        
            return <input onChange={event => console.log(event.target.value)} />;
        }
    */

    render() {

        return (
            <div className="search-bar">
                <input onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}


export default SearchBar2;