module.exports = {
    base: "/eee/",
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        sidebar: "auto",
        sidebarDepth: 3,
        logo: 'https://excalidraw.com/apple-touch-icon.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '关于', link: 'https://u1s1.vip/about' },
            { text: '友链', link: 'https://u1s1.vip' },
            {
                text: '下拉菜单',
                ariaLabel: '这是提示语',
                items: [
                    { text: '下拉1', link: '/', target:'_self' },
                    { text: '下拉2', link: 'https://u1s1.vip', target:'_blank' }
                ]
            }
        ]
    }
}
