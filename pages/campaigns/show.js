import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
    static async getInitialProps(props) {
        const  campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();

        return { 
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
         };
    }

    rednerCards() {
        const {
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount
        } = this.props;

        const items = [
            {
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign and can create requests to withdraw money',
                style: { overflowWrap: 'break-word'}
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contirbute at least this much wei to become an approver',
            },
            {
                header: requestsCount,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers',
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donated to this campaign',
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campaign has left to spend'
            }
        ];

        return <Card.Group items = { items } />;


    }

    render() {

        return (
            <Layout>
                <h3>Campaign show</h3>
                <div class="ui grid">
                    <div class="row">
                        <div class="ten wide column">
                            {this.rednerCards()}
                            
                        </div>
                    
                    
                   
                        <div class="six wide column">
                            <ContributeForm address={this.props.address}/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="column">
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>View Requests</Button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </Layout>
            
        )
    }
}

export default CampaignShow;