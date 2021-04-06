const nav = [
    {
        name: '首页',
        id: 11
    },
    {
        name: '头部导航一',
        id: 1
    },
    {
        name: '头部导航二',
        id: 2
    },
    {
        name: '头部导航三',
        id: 3
    },
]

const menuList = [
    {
        name: '主菜单1',
        id: 111,
        children: [
            {
                name: 'option1',
                id: 112
            },
            {
                name: 'option2',
                id: 113
            },
            {
                name: 'option3',
                id: 114
            }
        ]
    },
    {
        name: '主菜单2',
        id: 115,
        children: [
            {
                name: 'option4',
                id: 116
            },
            {
                name: 'option5',
                id: 117
            },
            {
                name: 'option6',
                id: 118
            }
        ]
    },
]

export {nav, menuList}
