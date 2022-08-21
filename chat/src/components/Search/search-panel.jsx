import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {

    constructor (props) {
        super(props);
        this.state = {
            term: ''
        }
    }

     onUpdateSearch = (e) =>{
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);

    } 
        clearLS = () =>{
            localStorage.clear()
        }
    render () {
        return (
          <div  className="search-panel">
            <img src="https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/32/Apps-preferences-desktop-user-icon.png" alt="USerPicture" />
                
            <input 
            type="text" 
            className="search-form"
            placeholder="Search or start new chat"
            value = {this.state.term}
            onChange = {this.onUpdateSearch}
            
            />
            <button className="clearLS" onClick={this.clearLS}>clear localStorage</button>
            </div>    
        )

    }

}


export default SearchPanel;


