declare module '../layout/Sidebar' {
  import { FC } from 'react';
  interface SidebarProps {
    collapsed: boolean;
  }
  const Sidebar: FC<SidebarProps>;
  export default Sidebar;
} 