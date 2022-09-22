import { RevenueIcon } from '../../styles/Icons';
import List from './list';
import Create from './create';
import Edit from './edit';
import Show from './show';
import GitCommit from './gitCommit'
import { PlaylistAdd } from '@material-ui/icons';

export default {
  name: 'reportFund',
  label: 'generic.pages.fundedProposal',
  icon: PlaylistAdd,
  url: 'proposal',
  screens: {
    list: List,
    create: Create,
    edit: Edit,
    show: Show,
    gitCommit: {component: GitCommit, subPath: ":id"}
  },
  resources: ['fundedProposals'],
  active: true,
  access: {
    read: [],
    write: [],
  },
};
