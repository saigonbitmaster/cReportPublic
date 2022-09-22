//tham khảo: https://www.epa.ie/pubs/advice/water/quality/Water_Quality.pdf
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  translate,
  TextField,
  List,
  Datagrid,
  EditButton,
  ShowButton,
  SelectField,
  Filter,
  TextInput,
  DateField,
  ReferenceField,
  NumberField,
  SelectInput,
  ReferenceInput,
  FunctionField,
} from 'ra-loopback3';
import { compose } from 'recompose';
import config from '../../Config';

import Button from './button';
import GitCommit from './gitCommit';

class ListPostJob extends Component {
  render() {
    const { translate, ...rest } = this.props;

    return (
      <List {...rest} resource="reportfunds" hasCreate={true} bulkActionButtons={false}>
        <Datagrid expand={<GitCommit />}>
          <ReferenceField source="proposalId" reference="fundedProposals" label="Project">
            <TextField source="name" />
          </ReferenceField>

          <NumberField source="receivedFund" />
          <NumberField source="requestFund" />
          <ReferenceField source="proposalId" reference="fundedProposals" label="projectStatus">
            <TextField source="projectStatus" />
          </ReferenceField>

          <FunctionField
            label="Delivered percentage (%)"
            render={record =>
              record.receivedFund ? (
                record.requestFund ? (
                  <div>{(record.receivedFund / record.requestFund) * 100}</div>
                ) : null
              ) : null
            }
          />
          <ShowButton label="View Detail" />
          <EditButton />
        </Datagrid>
      </List>
    );
  }
}

ListPostJob.propTypes = {
  translate: PropTypes.func,
  hasList: PropTypes.bool,
  hasShow: PropTypes.bool,
  hasCreate: PropTypes.bool,
  hasEdit: PropTypes.bool,
};

export default compose(translate)(ListPostJob);
