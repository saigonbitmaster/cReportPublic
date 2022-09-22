import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Edit,
  FlexForm,
  TextInput,
  required,
  translate,
  SelectInput,
  EditorInput,
  DateTimeInput,
  ReferenceInput,
  NumberInput,
  FormDataConsumer,
} from 'ra-loopback3';
import { Grid } from '@material-ui/core';
import compose from 'recompose/compose';
import config from '../../Config';
import Abc from './dateTimeInput';

let transactionTypes = [
  { id: 'deposit', name: 'deposit' },
  { id: 'withdraw', name: 'withdraw' },
];

class EditPartner extends Component {
  render() {
    const { props } = this;
    return (
      <Edit {...props} Deposit resource="reportfunds">
        <FlexForm style={{ flexGrow: 1 }} spacing={2} redirect="list" submitOnEnter={false}>
          <Grid middle item xs={12} sm={6}>
            <ReferenceInput label="Proposal" source="proposalId" reference="fundedProposals">
              <SelectInput optionText="name" />
            </ReferenceInput>
          </Grid>

          <Grid middle item xs={12} sm={6}>
            <NumberInput source="receivedFund" />
          </Grid>
          <Grid middle item xs={12} sm={6}>
            <NumberInput source="requestFund" />
          </Grid>

          <Grid middle item xs={12} sm={12}>
            <EditorInput source="description" fullWidth />
          </Grid>
        </FlexForm>
      </Edit>
    );
  }
}

EditPartner.propTypes = {
  translate: PropTypes.func,
  hasList: PropTypes.bool,
  hasShow: PropTypes.bool,
  staticcontext: PropTypes.any,
};
EditPartner.detaultProps = {
  hasList: true,
  hasShow: true,
};

const enhance = compose(translate);
export default enhance(EditPartner);
