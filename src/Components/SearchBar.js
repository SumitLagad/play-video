import React from 'react'

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.state = {searchTerm : ''};
    }

    onInputChange (event) {        
        this.setState({
            searchTerm: event.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.searchTerm);
    }

    render() {
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit= {this.onFormSubmit}>
                    <div className="field">
                        <label>Search Video</label>
                        <input type="text" value={this.state.searchTerm} name="search-text" onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;