import { MatDetailTypeIcon } from '../../styles/Icons';
import ListPostJob from '../../resources/proposalKpi/listPostJob';
import CreatePostJob from '../../resources/proposalKpi/createPostJob';
import EditPostJob from '../../resources/proposalKpi/editPostJob';
import ShowPostJob from '../../resources/proposalKpi/showPostJob';

export default {
  name: 'PostJob',
  label: 'generic.pages.proposalKpi',
  icon: MatDetailTypeIcon,
  url: 'fundreport',
  screens: {
    list: ListPostJob,
    create: CreatePostJob,
    edit: EditPostJob,
    show: ShowPostJob,
  },
  resources: ['testreportfunds'],
  active: true,
  access: {
    read: [],
    write: [],
  },
};
