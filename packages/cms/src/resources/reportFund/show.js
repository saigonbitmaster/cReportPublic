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
  FunctionField
} from 'ra-loopback3';
import config from '../../Config';

class ShowPostJob extends Component {
  render() {
    const { translate, ...rest } = this.props;

    return (
      <Show {...rest} resource="reportfunds">
        <FlexForm toolbar={false} style={{ flexGrow: 1 }} spacing={2}>



          <Grid middle container spacing={2}>
            <Grid middle item xs={12} sm={6}>
            <ReferenceField source="proposalId" reference="fundedProposals" label="Project" >
            <TextField source="name" />
          </ReferenceField>
            </Grid>
            <Grid middle item xs={12} sm={6}>
            <NumberField source="requestFund" />
            </Grid>
            <Grid middle item xs={12} sm={6}>
            <NumberField source="receivedFund" />
            </Grid>
           
            <Grid middle item xs={12} sm={6}>
            <ReferenceField source="proposalId" reference="fundedProposals" label="projectStatus">
            <TextField source="projectStatus" />
          </ReferenceField>
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
