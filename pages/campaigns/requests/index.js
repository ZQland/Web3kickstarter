import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Link } from '../../../routes';
import { Button, Table } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';

class RequestIndex extends Component {
    static async getInitialProps(props) {
        const { address } = props.query;
        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestsCount().call();
        const approversCount = await campaign.methods.approversCount().call();

        const request = await Promise.all(
            Array(parseInt(requestCount)).fill().map((element, index) => {
                return campaign.methods.requests(index).call()
            })
        );

        return { address, request, requestCount, approversCount };
    }

    renderRow() {
        return this.props.request.map((request, index) => {
            return <RequestRow 
                key={index}
                request={request}
                id={index}
                address={this.props.address}
                approversCount = {this.props.approversCount}
                />
        })
    }

    render() {
        const { Header, Row, HeaderCell, Body } = Table;
        return (
            <Layout>
               <h3>Request List</h3>
               <Link route={ `/campaigns/${this.props.address}/requests/new`}>
                <a>
                    <Button primary>
                        Add Request
                    </Button>
                </a>
               </Link>
               <table class="ui celled table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Recipient</th>
                        <th>Approval Count</th>
                        <th>Approve</th>
                        <th>Finalize</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {this.renderRow()}
                </tbody>
               </table>
            </Layout>
        )
    }
};

export default RequestIndex;