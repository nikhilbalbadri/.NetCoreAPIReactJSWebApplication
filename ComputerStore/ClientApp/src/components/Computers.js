import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Basket } from './Basket';
import { ConfigureComponents } from './ConfigureComponents';

export default withRouter(ConfigureComponents);

export class Computers extends Component {
    static displayName = Computers.name;

    constructor(props) {
        super(props);
        this.state = { computers: [], selectedComputer: '', loading: true };
        this.directtoComponents = this.directtoComponents.bind(this);
        this.updateSelectedComputer = this.updateSelectedComputer.bind(this);
    }

    componentDidMount() {
        this.populateComputerData();
    }

    updateSelectedComputer = e => {  //storing id of selected computer 
        this.setState({ selectedComputer: e.target.value })
    }
    directtoComponents() {     //Validate if Computer is selected and direct to Components Page
        if (this.state.selectedComputer === "") {
            alert("Please select a computer to proceed!");
        }
        else {
            this.props.history.push("/configureComponents");
        }
    }

    render() {
        return (
            <div>
                <form>
                    <h1 id="tabelLabel" >Select your desired Computer</h1>
                    <div>
                        <table className='table table-striped' aria-labelledby="tabelLabel">
                            <thead>
                                <tr>
                                    <th>Computer Brand</th>
                                    <th>Computer Cost</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.computers.map(computer =>
                                    <tr key={computer.computerId}>
                                        <td>{computer.computerName}</td>
                                        <td>{computer.computerCost}</td>
                                        <td><input type="radio" name="ComputerGroup" onChange={this.updateSelectedComputer} value={computer.computerId} /></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={this.directtoComponents}>Configure Components</button>
                    </div>
                </form>
            </div>
            
        );
    }

    async populateComputerData() { //Function to fetch data from API
        const response = await fetch('api/ComputerStore/GetAllComputerDetails');
        const data = await response.json();
        this.setState({ computers: data, loading: false });
    }


}
