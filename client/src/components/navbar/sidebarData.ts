export interface IMenu {
  title: string,
  path: string,
  cName: string,
  header: string

}

export const SidebarData: IMenu[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    cName: 'nav-text',
    header: 'View Your Progress'
  },
  {
    title: 'Processes',
    path:'/processes',
    cName: 'nav-text',
    header: 'Learn',
  },
  {
    title: 'Exercises',
    path:'/exercises',
    cName: 'nav-text',
    header: 'Engage',
  },
  {
    title: 'Journal',
    path: '/journal',
    cName: 'nav-text',
    header: 'Journal'
  }
]