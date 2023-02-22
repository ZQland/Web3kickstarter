import React, { Component } from 'react';
import { Button, Row } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

class RequestRow extends Component {

    onApprove = async () => {
        const campaign = Campaign(this.props.address);

        const accounts = await web3.eth.getAccounts();
        await campaign.methods.approveRequest(this.props.id).send({ 
            from: accounts[0]
        });
    };
    onFinalize = async () => {
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.finalizeRequest(this.props.id).send({
            from: accounts[0]
        });
    };


    render() {
        const { id, request, approversCount } = this.props;
        const readyToFinalize = request.approvalCount > approversCount/2;

        return (
           <tr class={request.complete? "disabled" : readyToFinalize ? "positive" : null}>
            <td>{id}</td>
            <td>{request.description}</td>
            <td>{web3.utils.fromWei(request.value, 'ether')}</td>
            <td>{request.recipient}</td>
            <td>{request.approvalCount}/{approversCount}</td>
            <td>
                { request.complete ? null : (
                <Button color="green" basic onClick={this.onApprove}>
                    Approve
                </Button>
                )}
            </td>
            <td>
                {request.complete ? null : (
                <Button color="teal" basic onClick={this.onFinalize}>Finalize</Button>
                )}
            </td>
           </tr> 
        )
    }
}

export default RequestRow;