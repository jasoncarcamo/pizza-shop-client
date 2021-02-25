import React from "react";

const CustomerContext = React.createContext({
    customer: {}
});

export class CustomerContextProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            customer: {}
        }
    }

    getCustomer = ()=>{

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
        return (
            <CustomerContext.Provider value={value}>
                {this.props.children}
            </CustomerContext.Provider>
        );
    };
}