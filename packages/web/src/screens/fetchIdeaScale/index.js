import { SourceTemplateIcon } from '../../styles/Icons';
import Main from './main'
export default {
  name: 'FetchIdeaScale',
  label: 'generic.pages.fetchideascale',
  icon: SourceTemplateIcon,
  url: 'fetchideascale',
  screens: {
    main: Main
  },
  resources: ['fetchideascales'],
  active: true,
  access: {
    read: [],
    write: [],
  },
};
