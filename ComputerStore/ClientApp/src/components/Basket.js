import React, { Component } from 'react';
//import { Computers } from './Computers';
//import { ConfigureComponents } from './components/ConfigureComponents';

export class Basket extends Component {
    static displayName = Basket.name;
    constructor(props) {
        super(props);
        this.state = { basket: [], Computers: [], components: [], loading: true };

    }
    render() {
        return (
            <div>
                {/*<Computers data={this.state}/>*/}
                <h1 id="tabelLabel" >Basket</h1>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Computer</th>
                                <th>Components</th>
                                <th>Cost</th>
                            </tr>
                        </thead>
                    </table>
                    <h3>Soon to be filled</h3>
                    <button className="btn btn-warning" onClick={this.clearBasket}>Clear Basket</button>
                    <button className="btn btn-primary" onClick={this.placeOrder}>Place Order</button>
                </div>
            </div>
        );
    }

    clearBasket() {
        alert("Basket Cleared");
    }
    placeOrder() {
        alert("Order Placed");
    }
}