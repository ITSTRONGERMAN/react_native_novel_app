interface TabBarProps {
    name: string,
    title: string,
    icon: any

}
const props: TabBarProps[] = [
    {
        name: 'index',
        title: '推荐',
        icon: 'home'
    },
    {
        name: 'BookShelf',
        title: '书架',
        icon: 'book'
    },
    {
        name: 'Class',
        title: '分类',
        icon: 'grid'
    },
    {
        name: 'My',
        title: '我的',
        icon: 'person'
    },
]
export default props