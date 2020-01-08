// component's config object.
const components = {
    login: {
      component: 'Login',
      url: '/login',
    },
    signup: {
      component: 'Signup',
      url: '/signup',
    },
    createtopic: {
      component: 'CreateTopicTrue',
      url: '/createtopic',
    },
    changepassword: {
      component: 'ChangePassword',
      url: '/changepassword',
    },
    friend: {
      component: 'Friend',
      url: '/friends',
    },
    home: {
      component: 'Home',
      url: '/',
    },
    profile: {
      component: 'Profile',
      url: '/my-profile',
    },
    topic: {
      component: 'Topic',
      url: '/topic',
    },
    myfeed: {
      component: 'Home',
      url: '/myfeed',
    },
    roomforum: {
      component: 'RoomForum',
      url: '/',
    },
  };
  
  export default {
    //role name as a key.
    admin: {
      routes: [...Object.values(components)],
    },
    user: {
      routes: [
        components.changepassword,
        components.friend,
        components.home,
        components.profile,
        components.createtopic,
        components.topic,
        components.myfeed,
      ],
      redirect: '/'
    },
    guest: {
      routes: [
        components.login,
        components.signup,
        components.home,
        components.topic,
        components.roomforum,
      ],
      redirect: '/login'
    }
  }