import React from 'react'

class SearchBar extends React.Component{

    state = {
        term : ''
    }

    onSubmitChange = (e) =>{
        e.preventDefault();
        this.props.onSubmit(this.state.term)
    }




    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmitChange}>
                   <div className="field">
                   <label>Image Search</label>
                    <input 
                    type="text" 
                    onChange={e => this.setState({term : e.target.value})}
                    value = {this.state.term}

                    />
                    </div> 
                </form>
                <h1>{this.state.term}</h1>
            </div>
        )
    }
}


export default SearchBar