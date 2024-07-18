// assets
import { SettingOutlined, QuestionOutlined, LogoutOutlined } from '@ant-design/icons';

// icons
const icons = {
  SettingOutlined,
  QuestionOutlined,
  LogoutOutlined
};

// Quick Link - Menu Items

const QuickLink = {
  id: 'quicklinks',
  title: 'Quick Links',
  type: 'group',
  children: [
    {
      id: 'setting',
      title: ' Account Setting',
      type: 'item',
      url: '/setting',
      icon: icons.SettingOutlined
    },
    {
      id: 'faq',
      title: 'Support',
      type: 'item',
      url: '/support',
      icon: icons.QuestionOutlined
    },
    {
      id: 'logout',
      title: 'Logout',
      type: 'item',
      url: '/logout',
      icon: icons.LogoutOutlined
    },
  
  ]
};

export default QuickLink;
