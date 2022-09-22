import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Edit, FlexForm, TextInput, required, translate, SelectInput, EditorInput, DateTimeInput, ReferenceInput, NumberInput, FormDataConsumer } from 'ra-loopback3';
import { Grid } from '@material-ui/core';
import compose from 'recompose/compose';
import config from '../../Config';
import Abc from './dateTimeInput'


let transactionTypes = [
  { id: 'deposit', name: 'deposit' },
  { id: 'withdraw', name: 'withdraw' },
];


class EditPartner extends Component {
  render() {
    const { props } = this;
    return (
      <Edit {...props} Deposit resource="fundedProposals">
     <FlexForm style={{ flexGrow: 1 }} spacing={2} redirect="list" submitOnEnter={false}>
     <Grid middle container spacing={2}>
            <Grid middle item xs={12} sm={12}>
              <TextInput source="name" validate={[required()]} label="Name" />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <TextInput source="projectId" validate={[required()]} label="Project Id" />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <TextInput source="url" label="IdeaScale Url" />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <ReferenceInput label="Fund" source="fundId" reference="funds">
                <SelectInput optionText="name" />
              </ReferenceInput>
            </Grid>

            <Grid middle item xs={12} sm={6}>
              <FormDataConsumer>
                {({ formData, ...rest }) => (
                  <ReferenceInput
                    source="challengeId"
                    key={formData.fundId}
                    resource="challenges"
                    reference="challenges"
                    allowEmpty
                    validate={required()}
                    filter={{ fundId: formData.fundId }}
                    {...rest}
                  >
                    <SelectInput optionText="name" />
                  </ReferenceInput>
                )}
              </FormDataConsumer>
            </Grid>

            <Grid middle item xs={12} sm={6}>
              <ReferenceInput label="Proposer" source="proposerId" reference="proposers">
                <SelectInput optionText="name" />
              </ReferenceInput>
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <NumberInput source="requestedBudget" />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <ReferenceInput label="Currency" source="fundId" reference="funds">
                <SelectInput optionText="currency" disabled />
              </ReferenceInput>
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <SelectInput
                source="projectStatus"
                choices={[
                  { id: 'pending', name: 'Pending' },
                  { id: 'complete', name: 'Complete' },
                  { id: 'stopped', name: 'Stopped' },
                ]}
              />
            </Grid>
            <Grid middle item xs={12} sm={12}>
              <TextInput source="gitLink"  />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <Abc source="startDate" label="Created date" />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <Abc source="completeDate" label="Complete date" />
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
