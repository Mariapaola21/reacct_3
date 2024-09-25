import React from "react";
class Contador_simple extends React.Component{
    constructor(props){
        super(props);
        
        this.state={contador: 0};
    }
    incrementar=()=>{
        this.setState({contador: this.state.contador + 1});
    }
    componentDidMount(){
        console.log("el contador ha sido montado")
    }
    componentDidUpdate(){
        console.log("el contador se esta cambiando");
    }
    componentWillUnmount(){
        console.log("el contador ira a desaparecer")
    }
    render(){
        return(
            <div>
                <h1> Contador que incrementa { this.state.contador}</h1>
                <button onClick={this.incrementar}>aumentar</button>
            </div>
        );
    }
}

export default Contador_simple;