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
        recipient: ''
    }


    static async getInitialProps (props) {
        const { address } = props.query;

        return { address };
    }


    render() {
        return (
            <Layout>
                <h3>Create a Request</h3>
                <Form>
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
                    <Button primary>Create Request!</Button>
                </Form>
            </Layout>
        );
    }
}

export default RequestNew;