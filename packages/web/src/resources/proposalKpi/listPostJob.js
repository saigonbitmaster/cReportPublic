//tham khảo: https://www.epa.ie/pubs/advice/water/quality/Water_Quality.pdf

  import React, { Component, Fragment } from 'react';
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
  NumberField,
  ArrayField,
  SingleFieldList,
  ChipField,
  BooleanField,
  Button
} from 'ra-loopback3';
import { Chip } from '@material-ui/core';
import { compose } from 'recompose';
import config from '../../Config';

const Filters = props => (
  <Filter {...props}>
    <TextInput source="name" label={'generic.search'} alwaysOn />
  </Filter>
);

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

class ListPostJob extends Component {
  render() {
    const { translate, ...rest } = this.props;
    return (
      <List {...rest} filters={<Filters />} 
      extActions={
        <Fragment>
          <Button label="Export excel"/>
          <Button label="Import excel"/>
        </Fragment>
      }

      resource="testreportfunds">
        <Datagrid>
          <TextField source="name" label="Proposal name" />
          <TextField source="employer" label="Proposer" />
          <NumberField source="estimatedCost" label="Requested budget (ADA)" />
          <NumberField source="requiredAda" label="Funded amount (ADA)" />

          <TagsField label="Team members" source="skills"></TagsField>
          <BooleanField source="expired" label="Fully funded" />
          
          <BooleanField source="jobSeekerAgreed" label="Project complete" />
          
              <NumberField source="productRoi" label="Product ROI (%)" />
          
          <DateField source="expectedDate" label="Expire date" />

          <DateField source="createdDate" label="Approved date" />
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
