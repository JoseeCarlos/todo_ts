import React from "react";


type Myprops = {message: string};
type Mystate = {contador: number};

class ClassComponent extends React.Component<Myprops, Mystate>{
    state: Mystate = {contador: 0};

    execute = () => {
        this.setState({contador: this.state.contador + 1});
    }

    //estados de los componentes
    // componentDidMount() {
    //     console.log("Se ejecuta al momento de montarse el componente");
    // }

    // componentDidUpdate() {
    //     console.log("Se ejecuta al momento de actualizar el componente", this.state.contador);

    // }

    // componentWillUnmount() {
    //     console.log("Se ejecuta al momento de desmontarse el componente");
    // }

    // //estados de componentes que no se deben usar

    // componentWillMount = () => {
    //     console.log("-------------");
    //     console.log("el componente se va a actualizar", this.state.contador);

    // }



    render(): React.ReactNode {
        return (
            <div>
                <h1>{this.props.message}</h1>
                <h2>{this.state.contador}</h2>
                <button onClick={this.execute} style={{backgroundColor: 'red'}} >Incrementar</button>
            </div>
        );
    }
}


export default ClassComponent;