import { RevenueIcon } from '../../styles/Icons';
import Dashboard from './reportKpi';

export default {
  name: 'dashboard',
  label: 'generic.pages.dashboard',
  icon: RevenueIcon,
  url: 'dashboard',
  screens: {
    main: Dashboard
  },
  resources: ['reportfunds'],
  active: true,
  access: {
    read: [],
    write: [],
  },
};
