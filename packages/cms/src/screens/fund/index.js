import { RevenueIcon } from '../../styles/Icons';
import List from './list';
import Create from './create';
import Edit from './edit';
import Show from './show';

export default {
  name: 'reportFund',
  label: 'generic.pages.fund',
  icon: RevenueIcon,
  url: 'fund',
  screens: {
    list: List,
    create: Create,
    edit: Edit,
    show: Show,
  },
  resources: ['funds'],
  active: true,
  access: {
    read: [],
    write: [],
  },
};
