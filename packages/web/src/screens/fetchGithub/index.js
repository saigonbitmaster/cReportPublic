import { LineChartIcon } from '../../styles/Icons';
import Main from './main'
export default {
  name: 'ChangePassword',
  label: 'generic.pages.fetchgithub',
  icon: LineChartIcon,
  url: 'fetchGitHub',
  screens: {
    main: Main,
  },
  resources: ['changepasswords'],
  active: true,
  access: {
    read: [],
    write: [],
  },
};
