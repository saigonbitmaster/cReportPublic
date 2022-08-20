import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Create, FlexForm, TextInput, required, translate, SelectInput, EditorInput, DateTimeInput,ReferenceInput,  NumberInput, SelectArrayInput } from 'ra';
import { Grid } from '@material-ui/core';
import compose from 'recompose/compose';
import config from '../../Config';
import Abc from './test'


let transactionTypes = [
  { id: 'deposit', name: 'deposit' },
  { id: 'withdraw', name: 'withdraw' },
];


class CreatePostJob extends Component {
  render() {
    const { props } = this;
    return (
      <Create {...props} resource="challenges">
        <FlexForm style={{ flexGrow: 1 }} spacing={2} redirect="list" submitOnEnter={false}>
        <Grid middle container spacing={2}>
            <Grid middle item xs={12} sm={12}>
              <TextInput source="name" validate={[required()]} label="Name"/>
            </Grid>
           
            <Grid middle item xs={12} sm={6}>
            <ReferenceInput label="Fund" source="fundId" reference="funds">
    <SelectInput optionText="name" />
</ReferenceInput>
            </Grid>
            <Grid middle item xs={12} sm={6}>
            <ReferenceInput label="Fund" source="fundId" reference="funds" >
    <SelectInput optionText="currency" disabled/>
</ReferenceInput>
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <NumberInput source="budget"  />
            </Grid>
            <Grid middle item xs={12} sm={12}>
              <Abc source="createdDate" label="Created date" />
            </Grid>

           
           
            <Grid middle item xs={12} sm={12}>
              <EditorInput source="description" fullWidth />
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
