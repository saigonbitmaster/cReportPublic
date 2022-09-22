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
  FunctionField
} from 'ra-loopback3';
import { compose } from 'recompose';
import config from '../../Config';

import Button from './button'
import GitCommit from './gitCommit'


const Filters = props => (
  <Filter {...props}>
    <TextInput source="name" label={'generic.search'} alwaysOn />
    <ReferenceInput source="fundId" reference="funds" alwaysOn>
      <SelectInput source="name" />
    </ReferenceInput>
  </Filter>
);

class ListPostJob extends Component {
  render() {
    const { translate, ...rest } = this.props;

    return (
      <List {...rest} filters={<Filters />} resource="fundedProposals" hasCreate={true} bulkActionButtons={false}>
        <Datagrid expand={<GitCommit />}>
          <TextField source="name" />

          <TextField source="projectId" />
          <TextField source="url" />
          <TextField source="projectStatus" />
          
          <NumberField source="requestedBudget" />
          <ReferenceField source="fundId" reference="funds" label="Currency" >
            <TextField source="currency" />
          </ReferenceField>
          <ReferenceField source="fundId" reference="funds">
            <TextField source="name" />
          </ReferenceField>
          <ReferenceField source="challengeId" reference="challenges">
            <TextField source="name" />
          </ReferenceField>
          <ReferenceField source="proposerId" reference="proposers">
            <TextField source="name" />
          </ReferenceField>
          <FunctionField label="git commits" render={record => record.gitCommits? record.gitCommits.length? <div>{record.gitCommits.length}</div> : null : null} />
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
