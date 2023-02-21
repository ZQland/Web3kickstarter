import React, { Component } from 'react';
import { Form, Button } from "semantic-ui-react";
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {
    state = {
        minimumContribution: '',
        errorMessage: '',
        loading: false

    }

    onSubmit = async (event) => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods
                .createCampaign(this.state.minimumContribution)
                .send({
                    from: accounts[0]
                });
            
            Router.pushRoute('/');
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false });
    };

    render() {
        
        return (
            <Layout>
                <h3>Create a Campaign</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <div class="field">
                        <label>Minimum Contribution</label>
                        <div class="ui right labeled input">
                            <input 
                                type="text" 
                                value={this.state.minimumContribution}
                                onChange={event => 
                                    this.setState({minimumContribution: event.target.value})}
                            />
                            <div class="ui label">
                                <div class="text">wei</div>
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
                    <Button loading={this.state.loading} primary>Create!</Button>
                </Form>
            </Layout>
        );
    }
};

export default CampaignNew;