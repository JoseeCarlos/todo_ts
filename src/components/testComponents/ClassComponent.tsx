import React from "react";


type Myprops = {message: string};
type Mystate = {contador: number};

class ClassComponent extends React.Component<Myprops, Mystate>{
    state: Mystate = {contador: 0};

    execute = () => {
        this.setState({contador: this.state.contador + 1});
    }

    render(): React.ReactNode {
        return (
            <div>
                <h1>{this.props.message}</h1>
                <h2>{this.state.contador}</h2>
                <button onClick={this.execute}>Incrementar</button>
            </div>
        );
    }
}


export default ClassComponent;