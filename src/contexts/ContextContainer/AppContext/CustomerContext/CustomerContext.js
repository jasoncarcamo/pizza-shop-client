import React from "react";
import CustomerTokenService from "../../../../services/CustomerTokenService/CustomerTokenService";
import CustomerRequest from "../../../../services/FetchRequests/CustomerRequest";

const CustomerContext = React.createContext({
    customer: {},
    getCustomer: ()=>{},
    setCustomer: ()=>{},
    updateCustomer: ()=>{},
    deleteCustomer: ()=>{}
});

export default CustomerContext;

export class CustomerContextProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            customer: {}
        }
    }

    componentDidMount(){
        this.getCustomer();
    }

    getCustomer = ()=>{
        const token = CustomerTokenService.getToken()
        if(!token){
            return;
        };

        CustomerRequest.getCustomer(token)
            .then( resData => {
                const customer = resData.customer;
                console.log(resData);
                this.setCustomer(customer);
                this.setOrderContext(customer);
            })
            .catch( err => {
                console.log(err);
            })
    }

    setCustomer = (customer)=>{
        this.setState({
            customer
        });
    }

    updateCustomer = (customer)=>{
        this.setCustomer(customer);
    }

    deleteCustomer = ()=>{
        const customer = {};

        this.setCustomer(customer);
    }

    setOrderContext = (customer)=>{
        const order = this.props.ordersContext.order;
        
        order.customer_first_name = customer.first_name;
        order.customer_last_name = customer.last_name;
        order.customer_mobile_number = customer.mobile_number;
        order.customer_address = customer.address;
        order.customer_city = customer.city;
        order.customer_state = customer.state;
        order.customer_zip_code = customer.zip_code;

        this.props.ordersContext.updateOrder(order);
    }

    render(){
        const value = {
            customer: this.state.customer,
            getCustomer: this.getCustomer,
            setCustomer: this.setCustomer,
            updateCustomer: this.updateCustomer,
            deleteCustomer: this.deleteCustomer
        };

        return (
            <CustomerContext.Provider value={value}>
                {this.props.children}
            </CustomerContext.Provider>
        );
    };
}