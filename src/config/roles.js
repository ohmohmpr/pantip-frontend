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
      url: '/topic/2',
    },
    forum: {
      component: 'Forum',
      url: '/forum',
    },
    myfeed: {
      component: 'Home',
      url: '/myfeed',
    }
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
        components.forum,
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
        components.myfeed,
      ],
      redirect: '/'
    }
  }