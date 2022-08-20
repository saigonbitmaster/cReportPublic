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
} from 'ra-loopback3';
import { compose } from 'recompose';
import config from '../../Config';

const Filters = props => (
  <Filter {...props}>
    <TextInput source="name" label={'generic.search'} alwaysOn />
    <ReferenceInput source="fundId" reference="funds" alwaysOn>
    <SelectInput source="name"  />
</ReferenceInput>
  </Filter>
);


class ListPostJob extends Component {
  render() {
    const { translate, ...rest } = this.props;
   
    return (
      <List {...rest} filters={<Filters />} resource="challenges"  hasCreate={true}  bulkActionButtons={false}>
        <Datagrid >
          <TextField source="name" />
         

          <ReferenceField source="fundId" reference="funds">
    <TextField source="name" />
</ReferenceField>
          
          <NumberField source="budget" />
       
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
