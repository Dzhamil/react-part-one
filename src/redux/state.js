import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        content: {
            profilePage: {
                posts: [
                    {id: 0, message: 'Hi, have are you?', likeCounts: 12},
                    {id: 1, message: 'It\'s my first posts', likeCounts: 988}
                ],
                newPostText: ''
            },
            messagesPage: {
                dialogs: [
                    {
                        id: 0,
                        name: 'Dzhamil',
                        avatarUrl: 'https://maski-instagrama.ru/wp-content/uploads/a/6/c/a6c8a2ce39a7a097395e72c9e778a381.jpeg'
                    },
                    {
                        id: 1,
                        name: 'Dima',
                        avatarUrl: 'https://pbs.twimg.com/profile_images/998651045491367939/ySo7CMSH.jpg'
                    },
                    {
                        id: 2,
                        name: 'Katya',
                        avatarUrl: 'https://proprikol.ru/wp-content/uploads/2019/09/prikolnye-foto-na-avu-dlya-devochek-60.jpg'
                    },
                    {
                        id: 3,
                        name: 'Pasha',
                        avatarUrl: 'https://vraki.net/sites/default/files/mood/zh.jpg'
                    },
                    {
                        id: 4,
                        name: 'Kristina',
                        avatarUrl: 'https://w-dog.ru/wallpapers/4/0/460972246140572/devushka-pomada-krasnye-guby-shlyapa-ruka-kolca.jpg'
                    },
                    {
                        id: 5,
                        name: 'Alena',
                        avatarUrl: 'https://klike.net/uploads/posts/2018-06/1528374055_2.jpg'
                    }
                ],
                messages: [
                    {id: 0, src: 'producer', message: 'Hello'},
                    {
                        id: 1,
                        src: 'producer',
                        message: 'Have are you? Have are you? Have are you? Have are you? Have are you? Have are you? Have are you? Have are you?'
                    },
                    {id: 1, src: 'consumer', message: 'Fine'},
                    {id: 1, src: 'producer', message: 'What?'},
                    {id: 2, src: 'consumer', message: 'Yo'}
                ],
                newDialogText: ''
            }
        },
        navbar: {
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
        },
        header: {
            img: {
                url: 'https://www.clipartmax.com/png/full/246-2461592_computer-icons-electron-microscope-portable-network-icon.png',
                alt: ""
            }
        }
    },

    _callSubscriber() {
        console.log('state is changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.content.profilePage = profileReducer(this._state.content.profilePage, action);
        this._state.content.messagesPage = dialogsReducer(this._state.content.messagesPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;