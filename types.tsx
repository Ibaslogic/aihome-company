export type NavItem = {
  title: string;
  path: string;
  submenu?: boolean;
  subMenuItems?: NavItem[];
};
