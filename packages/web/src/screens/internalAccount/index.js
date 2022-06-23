import { SwitchAccountIcon } from '../../styles/Icons';
import Main from './main'
export default {
  name: 'InternalAccount',
  label: 'generic.pages.internalAccount',
  icon: SwitchAccountIcon,
  url: 'internalaccount',
  screens: {
    main: Main
  },
  resources: ['internalaccounts'],
  active: true,
  access: {
    read: [],
    write: [],
  },
};
