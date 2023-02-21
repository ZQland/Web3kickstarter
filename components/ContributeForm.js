import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
    state = {
        value: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);

        this.setState({ loading: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            });
            Router.replaceRoute(`/campaigns/${this.props.address}`);
       } catch (err) {
            this.setState({ errorMessage: err.message});
       }


       this.setState( { loading: false, value: '' });

    };
    
    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <div class="field">                      
                 <label>Amount to Contribute</label>
                    <div class="ui right labeled input">
                        <input 
                            value={this.state.value}
                            onChange={event => 
                                this.setState({value: event.target.value})}
                        />
                        <div class="ui label">
                            <div clas="text"> ether </div>
                        </div>
                    </div>

                    
                    
                </div>
                <div class="ui error message">
                        <i class="close icon"></i>
                        <div class="header">
                            Oops!
                        </div>
                        <p>{this.state.errorMessage}</p>
                </div>
                <Button primary loading={this.state.loading}>Contribute!</Button>
            </Form>
        )
    }
}

export default ContributeForm;