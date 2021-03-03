import React from "react";
import SizeOptions from "./SizeOptions/SizeOptions";
import SpecialRequestOption from "./SpecialRequestOption/SpecialRequestOption";
import QuatityOption from "./QuatityOption/QuatityOption";
import EditItemButton from "./EditItemButton/EditItemButton";
import CancelItemBtn from "./CancelItemBtn/CancelItemBtn";
import "./EditItemCustomizer.css";

// serves as container for order item data
export default class EditItemCustomizer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menuItem: this.props.menuItem,
            orderItem: {
                id: this.props.menuItem.id,
                category: this.props.menuItem.category,
                name: this.props.menuItem.name,
                price: this.props.menuItem.price,
                size: this.props.menuItem.size,
                ingredients: {},
                special_request: this.props.menuItem.special_request,
                quantity: this.props.menuItem.quantity
            }
        }
    }

    componentDidMount(){
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
                        <EditItemButton
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
