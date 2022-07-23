import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { Grid, Chip } from '@material-ui/core';
import { Show, HtmlField, TextField, translate, FlexForm, BooleanField, DateField, NumberField, ArrayField, SingleFieldList, ChipField} from 'ra-loopback3';
import config from '../../Config';

const TagsField = ({ record }) =>
  record.skills ? (
    <ul>
      {record.skills.map(item => (
        <Chip key={item} label={item} />
      ))}
    </ul>
  ) : null;
TagsField.defaultProps = {
  addLabel: true,
};

class ShowPostJob extends Component {
  render() {
    const { translate, ...rest } = this.props;
    return (
      <Show {...rest} resource="testreportfunds">
        <FlexForm toolbar={false} style={{ flexGrow: 1 }} spacing={1}>

        <Grid middle container spacing={1}>

        <Grid middle item xs={12} sm={3}>
              <TextField source="name"  label="Proposal name" />
            </Grid>
            <Grid middle item xs={12} sm={3}>
              <DateField source="expectedDate" label="Expire date" />
            </Grid>
          
            <Grid middle item xs={12} sm={3}>
              <NumberField source="estimatedCost" label="Requested budget (Ada)" />
            </Grid>
            <Grid middle item xs={12} sm={3}>
              <NumberField source="requiredAda" label="Funded amount ADA" />
            </Grid>

            <Grid middle item xs={12} sm={3}>
            <TagsField label="Co-proposers" source="Co-proposers"></TagsField>
            </Grid>
            <Grid middle item xs={12} sm={3}>
              <DateField source="createdDate" label="Created date" />
            </Grid>
           
     
           
          
            <Grid middle item xs={6} sm={3}  >
              <TextField label="Telegram" source="contractStatus" />
            </Grid>
            <Grid middle item xs={6} sm={3}   >
              <TextField label="You tube link" source="contractType" />
            </Grid>
            
            <Grid middle item  xs={6} sm={3} >
              <TextField label="Product link" source="bidder"/ >
            </Grid>
           
            <Grid middle item xs={6} sm={3}   >
              <BooleanField label="Project completed" source="jobSeekerAgreed"   />
            </Grid>
             
      <Grid middle item xs={12} sm={3}>
              <BooleanField label="Fully funded" source="expired"   />
            </Grid>
            
            <Grid middle item  xs={6} sm={3} >
              <TextField label="Proposal link" source="proposalLink"/ >
            </Grid>
            <Grid middle item xs={12} sm={12}>
              <TextField label="Fund wallet address" source="employerWallet"   fullWidth />
            </Grid>
            <Grid middle item xs={12} sm={12}   >
              <TextField label="Smart contract address" source="smartContractAddress"   fullWidth />
            </Grid>
            <Grid middle item xs={6} sm={12}>
              <TextField label="Product wallet address" source="bidderWallet"   fullWidth/>
            </Grid>
            <Grid middle item xs={12} sm={4}>
              <NumberField source="smartContractCalls" label="Smart contract calls" />
            </Grid>
            <Grid middle item xs={12} sm={4}>
              <NumberField source="productTransactions" label="Product transactions" />
            </Grid>
            <Grid middle item xs={12} sm={4}>
              <NumberField source="productTransactionValue" label="Product transaction value (Ada)" />
            </Grid>
            <Grid middle item xs={12} sm={4}>
              <NumberField source="productRoi" label="Product roi (%)" />
            </Grid>
            <Grid middle item xs={6} sm={4}>
              <TextField label="Product rank" source="productRank" />
            </Grid>
            <Grid middle item xs={12} sm={12} >
              <HtmlField source="description" label="Proposal detail" fullWidth />
            </Grid>
         
          </Grid>



        </FlexForm>
      </Show>
    );
  }
}

ShowPostJob.propTypes = {
  translate: PropTypes.any,
};

ShowPostJob.detaultProps = {
  hasShow: true,
};
const enhance = compose(translate);
export default enhance(ShowPostJob);
