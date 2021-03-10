import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Basket } from './Basket';
import { groupBy } from 'lodash';
export default withRouter(Basket);


export class ConfigureComponents extends Component {
    static displayName = ConfigureComponents.name;
    constructor(props) {
        super(props);
        this.state = { components: [], selectedComponents: [], loading: true };
        this.insertToBasket = this.insertToBasket.bind(this);
        this.updateSelectedComponents = this.updateSelectedComponents.bind(this);
    }
    componentDidMount() {
        this.populateComponentsData();
    }

    updateSelectedComponents = e => {   //Managing a list of Component ID's selected
        const comp = parseInt(e.target.value);
        const selectedComp = this.state.selectedComponents;
        if (!selectedComp.includes(comp)) {
            if (comp % 2 === 0 & selectedComp.includes(comp - 1)) { //Splice odd component Id if even component Id is selected
                var index = this.state.selectedComponents.indexOf(comp - 1);
                this.setState({
                    selectedComponents: this.state.selectedComponents.splice(index, 1)
                });
            }
            if (!comp % 2 === 0 & selectedComp.includes(comp + 1)) { //Splice even component Id if odd component Id is selected
                var index = this.state.selectedComponents.indexOf(comp + 1);
                this.setState({
                    selectedComponents: this.state.selectedComponents.splice(index, 1)
                });
            }
            this.setState({ //concat component id to the array list.
                selectedComponents: this.state.selectedComponents.concat(comp)
            });
        }
    }
    insertToBasket() { //Validate if all components are selected and direct to basket.
        if (this.state.selectedComponents.length < 1) {
            alert("Please select one component from each category to proceed!");
        }
        else {
            this.props.history.push("/basket");
        }
    }
    render() {
        return (
            <div>
                <h1 id="tabelLabel" >Configure your Computer</h1>
                <p>Please select one component from each category!</p>
                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>Component Name</th>
                            <td>Component Category</td>
                            <th>Component Cost</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.components.map(component =>
                            <tr key={component.componentId}>
                                <td>{component.componentName}</td>
                                <td>{component.componentCategory}</td>
                                <td>{component.componentCost}</td>
                                <td><input type="radio" name={component.componentCategory} value={component.componentId} onChange={this.updateSelectedComponents} /></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div>
                    <button className="btn btn-primary" onClick={this.insertToBasket}>Insert to Basket</button>
                </div>
            </div>
        );
    }
    async populateComponentsData() { //fetch components data from API
        const response = await fetch('api/ComputerStore/GetAllComponentDetails');
        const data = await response.json();
        this.setState({ components: data, loading: false });
    }
}