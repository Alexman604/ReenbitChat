
import "./chatbox.css";
import Message from "./message";

 ChatBox = ({data, activeID}) => {
    console.log(data, activeID);


    return( )


 }

 

/*     constructor (props) {
        super(props);
        
        this.state = {
           //totalReactPackages: null
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
        
        const {name, chatHistory} = this.props;
        console.log(name);
      //  const { totalReactPackages } = this.state;
        return (
          <div  className="chatbox-wrapper">
             
             <Message/>
             <Message/>
             <Message/>
             
            
             
            </div>    
        )

    }

}; */


export default ChatBox;

/* <div className="card text-center m-3">
                <h5 className="card-header">GET Request with Async/Await</h5>
                <div className="card-body">
                    Total react packages: {totalReactPackages}
                </div>
            </div> */