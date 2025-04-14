export interface SidebarItem {
  title: string;
  path: string;
  icon: React.ReactNode;
}

export interface ThemeType {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface SidebarProps extends ThemeType {
  activePath?: string;
  isCollapsed: boolean;
  toggleCollapse: () => void;
}
