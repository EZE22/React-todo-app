import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from "../../api/todo/HelloWorldDataService.js"

class WelcomeComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            welcomeMessage: '',
            errorMessage: ''
        }
        this.retriveWelcomeMessage = this.retriveWelcomeMessage.bind(this);
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
        this.handleError = this.handleError.bind(this)
    }
    render(){
        return(
            <>
                <div className="container">
                    {this.state.errorMessage}
                </div>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name} 
                    You can manage your todos <Link to="/todos">here</Link>.
                </div>
                <div>
                    Click here to get a customized welcome message. 
                    <br/>
                    <button onClick={this.retriveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        )
    }

    retriveWelcomeMessage(){
        //This is for just getting my hello world as a string 
        // HelloWorldService.executeHelloWorldService()
        // .then(response => this.handleSuccessfulResponse(response))

        //This is for getting my hello-world-bean which is a JSON object 
        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response => this.handleSuccessfulResponse(response))
        
        //This is for getting my hello-world with path variables 
        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then(response => this.handleSuccessfulResponse(response))
        .catch(error => this.handleError(error))
        
    }

    handleSuccessfulResponse(response){
        console.log(response)
        this.setState({welcomeMessage: response.data.message})
    }

    handleError(error){
        console.log(error.response)
        this.setState({errorMessage: error.response.data.message})
    }
}

export default WelcomeComponent