import { RevenueIcon } from '../../styles/Icons';
import List from './list';
import Create from './create';
import Edit from './edit';
import Show from './show';

import { PlaylistAdd } from '@material-ui/icons';

export default {
  name: 'reportFund',
  label: 'generic.pages.challenge',
  icon: PlaylistAdd,
  url: 'challenge',
  screens: {
    list: List,
    create: Create,
    edit: Edit,
    show: Show,
  },
  resources: ['challenges'],
  active: true,
  access: {
    read: [],
    write: [],
  },
};
