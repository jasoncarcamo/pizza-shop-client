import React from "react";
import CustomerTokenService from "../../../../services/CustomerTokenService/CustomerTokenService";

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
    }

    getCustomer = ()=>{
        if(!CustomerTokenService.hasToken()){
            return;
        };
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