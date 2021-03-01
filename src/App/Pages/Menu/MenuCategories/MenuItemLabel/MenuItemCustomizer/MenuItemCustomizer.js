import React from "react";
import SizeOptions from "./SizeOptions/SizeOptions";
import SpecialRequestOption from "./SpecialRequestOption/SpecialRequestOption";
import QuatityOption from "./QuatityOption/QuatityOption";
import AddItemButton from "./AddItemButton/AddItemButton";
import CancelItemBtn from "./CancelItemBtn/CancelItemBtn";
import "./MenuItemCustomizer.css";

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
                special_request: "",
                quantity: ""
            }
        }
    }

    componentDidMount(){
        const orderItem = {
            id: this.props.menuItem.id,
            category: this.props.menuItem.category,
            name: this.props.menuItem.name,
            price: this.props.menuItem.price_small,
            size: "size_small",
            ingredients: {},
            special_request: "",
            quantity: 1
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
            <section className="menu-item-customizer-container">
                <section className="menu-item-customizer">
                    <h2>{this.state.orderItem.name}</h2>
                    <p><strong>Price: </strong>${this.state.orderItem.price}</p>
                    <p>{this.state.orderItem.description}</p>

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
                        menuItem={this.state.menuItem}
                        orderItem={this.state.orderItem}
                        updateOrderItem={this.updateOrderItem}
                    />

                    <div className="menu-item-custom-btn-container">
                        <AddItemButton
                            index={this.props.index}
                            toggleOptions={this.toggleOptions}
                            orderItem={this.state.orderItem} 
                        />
                        <CancelItemBtn
                            updateOrderItem={this.updateOrderItem}
                            toggleOptions={this.toggleOptions}
                        />
                    </div>
                </section>
            </section>
        );
    };
}
