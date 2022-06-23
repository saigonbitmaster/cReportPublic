import dashboard from '../screens/dashboard';
import {
  GeoIcon,
  ParentMenuStatisticIcon,
} from '../styles/Icons';

// import GeoCountry from '../screens/geoCountry';
import FundHistory from '../screens/reportFund';
import configuration from '../screens/configuration';
import ProposalKpi from '../screens/proposalKpi';
import InternalAccount from '../screens/internalAccount';
import ServiceAccount from '../screens/serviceAccount';
import ChangePassword from '../screens/changepassword';
import QueryCardano from '../screens/queryCardano';
import FetchGithub from '../screens/fetchGithub';
import FetchIdeaScale from '../screens/fetchIdeaScale';
import AdfScannerIcon from '@material-ui/icons/AccountBoxOutlined';

export default {
  menu: [
    dashboard,
    {
      name: 'report',
      label: 'generic.pages.report',
      icon: GeoIcon,
      menu: [FundHistory, ProposalKpi],
    },
   
    {
      name: 'tools',
      label: 'generic.pages.tools',
      icon: ParentMenuStatisticIcon,
      menu: [QueryCardano, FetchGithub, FetchIdeaScale],
    },
    
  
    {
      name: 'accountManagement',
      label: 'generic.pages.accountManagement',
      icon: AdfScannerIcon,
      menu: [InternalAccount, ServiceAccount],
    },
    ChangePassword,
    configuration,
  ],
};
