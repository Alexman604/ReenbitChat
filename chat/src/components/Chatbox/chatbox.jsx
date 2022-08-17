import { Component } from "react";
import "./chatbox.css";

class ChatBox extends Component {

    constructor (props) {
        super(props);
        
        this.state = {
            totalReactPackages: null
        };
    }

    async componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        console.log(data.value);
        this.setState({ totalReactPackages: data.value })
    }

    render () {
        const { totalReactPackages } = this.state;
        return (
          <div  className="chatbox-wrapper">
             <img src="https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/32/Apps-preferences-desktop-user-icon.png" alt="USerPicture" />
      
            
             <div className="card text-center m-3">
                <h5 className="card-header">GET Request with Async/Await</h5>
                <div className="card-body">
                    Total react packages: {totalReactPackages}
                </div>
            </div>
            </div>    
        )

    }

};


export default ChatBox;