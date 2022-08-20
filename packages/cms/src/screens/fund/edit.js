import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Edit, FlexForm, TextInput, required, translate, SelectInput, EditorInput, DateTimeInput, NumberInput } from 'ra';
import { Grid } from '@material-ui/core';
import compose from 'recompose/compose';
import config from '../../Config';

import Abc from './test'


let transactionTypes = [
  { id: 'deposit', name: 'deposit' },
  { id: 'withdraw', name: 'withdraw' },
];


class EditPartner extends Component {
  render() {
    const { props } = this;
    return (
      <Edit {...props} Deposit resource="funds">
     <FlexForm style={{ flexGrow: 1 }} spacing={2} redirect="list" submitOnEnter={false}>
     <Grid middle container spacing={2}>
            <Grid middle item xs={12} sm={6}>
              <TextInput source="name" validate={[required()]} label="Name"/>
            </Grid>
            <Grid middle item xs={12} sm={12}>
              <NumberInput source="budget"  />
            </Grid>
            <Grid middle item xs={12} sm={12}>
              <TextInput source="currency"  />
            </Grid>
        
            <Grid middle item xs={12} sm={6}>
              <Abc source="startDate" label="startDate" />
            </Grid>

           
           
            <Grid middle item xs={12} sm={12}>
              <EditorInput source="description" fullWidth />
            </Grid>
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
