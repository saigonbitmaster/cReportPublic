import { AccountBox } from '@material-ui/icons';
import List from './list';
import Create from './create';
import Edit from './edit';
import Show from './show';


export default {
  name: 'reportFund',
  label: 'generic.pages.proposer',
  icon: AccountBox,
  url: 'proposer',
  screens: {
    list: List,
    create: Create,
    edit: Edit,
    show: Show,
  },
  resources: ['proposers'],
  active: true,
  access: {
    read: [],
    write: [],
  },
};
