import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { Grid } from '@material-ui/core';
import {
  Show,
  HtmlField,
  TextField,
  translate,
  FlexForm,
  SelectField,
  DateField,
  NumberField,
  ReferenceField,
} from 'ra-loopback3';
import config from '../../Config';

class ShowPostJob extends Component {
  render() {
    const { translate, ...rest } = this.props;

    return (
      <Show {...rest} resource="fundedProposals">
        <FlexForm toolbar={false} style={{ flexGrow: 1 }} spacing={2}>
          <Grid middle container spacing={2}>
            <Grid middle item xs={12} sm={6}>
              <TextField source="name" />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <TextField source="projectId" label="Project ID" />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <ReferenceField source="proposerId" reference="proposers">
                <TextField source="name" />
              </ReferenceField>
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <TextField source="projectStatus" />
            </Grid>
           
            <Grid middle item xs={12} sm={6}>
              <ReferenceField source="fundId" reference="funds">
                <TextField source="name" />
              </ReferenceField>
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <ReferenceField source="challengeId" reference="challenges">
                <TextField source="name" />
              </ReferenceField>
            </Grid>

            <Grid middle item xs={12} sm={6}>
              <TextField source="url" />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <TextField source="gitLink" />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <TextField source="requestedBudget" />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <ReferenceField source="fundId" reference="funds" label="Currency" >
                <TextField source="currency" />
              </ReferenceField>
            </Grid>
            <Grid middle item xs={12} sm={4}>
              <DateField source="startDate" />
            </Grid>
            <Grid middle item xs={12} sm={4}>
              <DateField source="completeDate" />
            </Grid>

            <Grid middle item xs={12} sm={12}>
              <HtmlField source="description" />
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
