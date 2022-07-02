let initialState = {
    navbarItems: [
        {to: '/profile', itemName: 'Profile'},
        {to: '/dialogs', itemName: 'Messages'},
        {to: '/news', itemName: 'News'},
        {to: '/music', itemName: "Music"},
        {to: '/settings', itemName: "Settings"}
    ],
    friends: [
        {
            name: 'Dzhamil',
            avatarUrl: 'https://maski-instagrama.ru/wp-content/uploads/a/6/c/a6c8a2ce39a7a097395e72c9e778a381.jpeg'
        },

        {
            name: 'Alena',
            avatarUrl: 'https://klike.net/uploads/posts/2018-06/1528374055_2.jpg'
        },
        {
            name: 'Pasha',
            avatarUrl: 'https://vraki.net/sites/default/files/mood/zh.jpg'
        }
    ]
};

const navbarReducer = (state = initialState, action) => {
    return state;
}

export default navbarReducer;