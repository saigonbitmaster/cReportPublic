import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Create,
  FlexForm,
  TextInput,
  required,
  translate,
  SelectInput,
  EditorInput,
  DateTimeInput,
  NumberInput,
  ArrayInput,
  SelectArrayInput,
  SimpleFormIterator,
  BooleanInput
} from 'creport-lib';
import { Grid , Hidden } from '@material-ui/core';

import compose from 'recompose/compose';
import config from '../../Config';
import moment from 'moment-timezone';

let employerWallet = "addr_test1qrrm07xev0qh9vr9lhwmn57n9gpfusclufwv3xmwmet0yy73zq9zh7e76renxpzpz860s6mh8hlt0llhmdr0vdcwqjrsqm08n8"
let jobSeekerWallet = "addr_test1qqqnh8nzqm5tq4gme0ga5nlj07ux5utp4qknza6dxcnjt6arz3ffwr04exhgzhcf6vhh8gkepwj80umecld6d9j5duhs5j63le"
let employerName = "Jenie"
let bidder = "Ana"
let smartContractAddress = "addr_test1wy27ag0w4dzhldz5tunqhlyy2pkllz6sym5zm509z659ngxgumgve"

//status = opening, candidate selected, contracted
class CreatePostJob extends Component {
  render() {
    const { props } = this;
    return (
      <Create {...props} resource="testreportfunds">
        <FlexForm style={{ flexGrow: 1 }} spacing={2} redirect="list" submitOnEnter={false}>
          <Grid middle container spacing={2}>
            <Grid middle item xs={12} sm={4}>
              <TextInput source="name" validate={[required()]} label="Proposal name" />
            </Grid>
            <Grid middle item xs={12} sm={4}>
              <DateTimeInput source="expectedDate" label="Expire date" />
            </Grid>
          
            <Grid middle item xs={12} sm={4}>
              <NumberInput source="estimatedCost" label="Requested budget (Ada)" />
            </Grid>
            <Grid middle item xs={12} sm={4}>
              <NumberInput source="requiredAda" label="Funded amount ADA" />
            </Grid>

            <Grid middle item xs={12} sm={4}>
              <SelectArrayInput
                label="Co-proposers"
                source="skills"
                choices={[
                  { id: 'Peter', name: 'Peter' },
                  { id: 'Yuval', name: 'Yuval' },
                  { id: 'Ana', name: 'Ana' },
                  { id: 'Thomas', name: 'Thomas' },
                  { id: 'Nimikura', name: 'Nimikura' },
                  { id: 'Kim', name: 'Kim' },
                  { id: 'Hamis', name: 'Hamis' },
                  { id: 'Bill', name: 'Bill' },
                  { id: 'Chen', name: 'Chen' },
                  { id: 'Ally', name: 'Ally' },
                  { id: 'Mohamed', name: 'Mohamed' },
                  { id: 'Helen', name: 'Helen' },
                  { id: 'Norvig', name: 'Norvig' },
                  { id: 'Allan', name: 'Allan' },
                  { id: 'Bryan', name: 'Bryan' },
                  { id: 'will', name: 'will' },
                  { id: 'Lexson', name: 'Lexson' },
                  { id: 'Art', name: 'Art' },
                  { id: 'Don', name: 'Don' },
                  { id: 'Mathis', name: 'Mathis' },
                  { id: 'Omar', name: 'Omar' },
                  { id: 'Jack', name: 'Jack' },
                  { id: 'Micheal', name: 'Micheal' },
                  { id: 'Cheng', name: 'Cheng' },
                ]}
              />
            </Grid>
            <Grid middle item xs={12} sm={4}>
              <DateTimeInput source="createdDate" label="Created date" defaultValue={moment()} disabled/>
            </Grid>
           
     
           
          
            <Grid middle item xs={6} sm={4}  >
              <TextInput label="Telegram" source="contractStatus" />
            </Grid>
            <Grid middle item xs={6} sm={4}   >
              <TextInput label="You tube link" source="contractType" />
            </Grid>
            
            <Grid middle item  xs={6} sm={4} >
              <TextInput label="Product link" source="bidder"/ >
            </Grid>
           
            <Grid middle item xs={6} sm={4}   >
              <BooleanInput label="Project completed" source="jobSeekerAgreed" defaultValue={false}  disabled/>
            </Grid>
             
      <Grid middle item xs={12} sm={4}>
              <BooleanInput label="Fully funded" source="expired" defaultValue={true}  />
            </Grid>
          
            <Grid middle item  xs={6} sm={6} >
              <TextInput label="Proposal link" source="proposalLink"/ >
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <TextInput label="Fund wallet address" source="employerWallet" defaultValue={employerWallet}  fullWidth />
            </Grid>
            <Grid middle item xs={12} sm={6}   >
              <TextInput label="Smart contract address" source="smartContractAddress"  defaultValue={smartContractAddress} fullWidth />
            </Grid>
            <Grid middle item xs={6} sm={6}>
              <TextInput label="Product wallet address" source="bidderWallet" defaultValue={jobSeekerWallet}  fullWidth/>
            </Grid>
            <Grid middle item xs={12} sm={4}>
              <NumberInput source="smartContractCalls" label="Smart contract calls" />
            </Grid>
            <Grid middle item xs={12} sm={4}>
              <NumberInput source="productTransactions" label="Product transactions" />
            </Grid>
            <Grid middle item xs={12} sm={4}>
              <NumberInput source="productTransactionValue" label="Product transaction value (Ada)" />
            </Grid>
            <Grid middle item xs={12} sm={4}>
              <NumberInput source="productRoi" label="Product roi (%)" />
            </Grid>
            <Grid middle item xs={6} sm={4}>
              <TextInput label="Product rank" source="productRank" />
            </Grid>
            <Grid middle item xs={12} sm={12} >
              <EditorInput source="description" label="Proposal detail" fullWidth />
            </Grid>
         
          </Grid>
        </FlexForm>
      </Create>
    );
  }
}


CreatePostJob.propTypes = {
  translate: PropTypes.func,
  hasList: PropTypes.bool,
  hasShow: PropTypes.bool,
  hasCreate: PropTypes.bool,
  hasEdit: PropTypes.bool,
  staticcontext: PropTypes.any,
};
CreatePostJob.detaultProps = {
  hasList: true,
  hasShow: true,
  hasCreate: false,
  hasEdit: false,
};

const enhance = compose(translate);
export default enhance(CreatePostJob);
