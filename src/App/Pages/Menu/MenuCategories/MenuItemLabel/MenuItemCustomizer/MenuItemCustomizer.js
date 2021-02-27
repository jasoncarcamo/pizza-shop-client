import React from "react";
import SizeOptions from "./SizeOptions/SizeOptions";
import SpecialRequestOption from "./SpecialRequestOption/SpecialRequestOption";
import QuatityOption from "./QuatityOption/QuatityOption";


// serves as container for order item data
export default class MenuItemCustomizer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menuItem: this.props.menuItem,
            orderItem: {
                id: "",
                category: "",
                price: "",
                size: "",
                ingredients: {

                },
                special_request: ""
            }
        }
    }

    componentDidMount(){
        const orderItem = {
            id: this.props.menuItem.id,
            category: this.props.menuItem.category,
            price: this.props.menuItem.price_small,
            size: "size_small",
            ingredients: {},
            special_request: ""
        };

        this.setState({
            orderItem
        });
    }

    toggleOptions = ()=>{
        this.props.toggleOptions();
    }

    updateOrderItem = (orderItem)=>{
        this.setState({
            orderItem
        });
    }

    render(){
        return (
            <section>
                <h2>{this.state.menuItem.name}</h2>
                <p>${this.state.orderItem.price}</p>
                <p>{this.state.menuItem.description}</p>

                <SizeOptions 
                    menuItem={this.state.menuItem}
                    orderItem={this.state.orderItem}
                    updateOrderItem={this.updateOrderItem}
                />
                <SpecialRequestOption 
                    orderItem={this.state.orderItem}
                    updateOrderItem={this.updateOrderItem}
                />
                <QuatityOption 
                    orderItem={this.state.orderItem}
                    updateOrderItem={this.updateOrderItem}
                />
            </section>
        );
    };
}
