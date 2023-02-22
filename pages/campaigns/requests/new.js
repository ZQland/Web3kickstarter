import React, { Component } from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';

class RequestNew extends Component {
    state = {
        value: '',
        description: '',
        recipient: '',
        loading: false,
        errorMessage: ''
    }


    static async getInitialProps (props) {
        const { address } = props.query;

        return { address };
    }

    onSubmit = async event => {
        event.preventDefault();


        const campaign = Campaign(this.props.address);
        this.setState({ loading: true, errorMessage: '' });

        const { description, value, recipient } = this.state;

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods
                .createRequest(description, web3.utils.toWei(value, 'ether'), recipient)
                .send( { from: accounts[0] });

            Router.pushRoute(`/campaigns/${this.props.address}/requests`);
        } catch (err) {
            this.setState({errorMessage: err.message});
        }
        this.setState({loading: false});
    }

    render() {
        return (
            <Layout>
                <Link route={`/campaigns/${this.props.address}/requests`}>
                    <a>
                        Back
                    </a>
                </Link>
                <h3>Create a Request</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <div class="field">
                        <label>
                            Description
                        </label>
                        <Input 
                            value={this.props.description}
                            onChange={event => this.setState({ description: event.target.value })}
                        />
                    </div>

                    <div class="field">
                        <label>
                            Value in Ether
                        </label>
                        <Input 
                            value={this.props.value}
                            onChange={event => this.setState({ value: event.target.value})}
                        />

                    </div>

                    <div class="field">
                        <label>
                            Recipient
                        </label>
                        <Input 
                            value={this.props.recipient}
                            onChange={event => this.setState({ recipient: event.target.value})}
                        />

                    </div>
                    <div class="ui error message">
                        <i class="close icon"></i>
                        <div class="header">
                            Oops!
                        </div>
                        <p>{this.state.errorMessage}</p>
                    </div>
                    <Button primary loading={this.state.loading}>Create Request!</Button>
                </Form>
            </Layout>
        );
    }
}

export default RequestNew;