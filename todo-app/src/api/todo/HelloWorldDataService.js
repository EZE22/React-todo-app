import axios from 'axios'

class HelloWorldService {
    //this is to handle just the hello world String 
    executeHelloWorldService(){
        //console.log("executed servcie");
        return axios.get('http://localhost:8080/hello-world')
    }

    //this is to handle the hello world bean 
    executeHelloWorldBeanService(){
        //console.log("executed servcie");
        return axios.get('http://localhost:8080/hello-world-bean')
    }

    //this is to handle the hello world with path variables 
    executeHelloWorldPathVariableService(name){
        //console.log("executed servcie");
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
    }

}

export default new HelloWorldService()