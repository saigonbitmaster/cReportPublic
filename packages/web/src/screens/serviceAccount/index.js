import { ManageAccountsIcon } from '../../styles/Icons';
import Main from './main'
export default {
  name: 'ServiceAccount',
  label: 'generic.pages.serviceAccount',
  icon: ManageAccountsIcon,
  url: 'serviceaccount',
  screens: {
    main: Main
  },
  resources: ['serviceaccounts'],
  active: true,
  access: {
    read: [],
    write: [],
  },
};
