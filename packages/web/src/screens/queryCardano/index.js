import { QuotasomeIcon } from '../../styles/Icons';
import Main from '../../resources/queryCardano/main'
export default {
  name: 'ChangePassword',
  label: 'generic.pages.querycardano',
  icon: QuotasomeIcon,
  url: 'querycardano',
  screens: {
    main: Main
  },
  resources: ['changepasswords'],
  active: true,
  access: {
    read: [],
    write: [],
  },
};
