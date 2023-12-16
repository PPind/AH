import { createStore } from 'vuex'

export default createStore({
  strict: true,

  state: {
    postList:[
      {id:1, user: "kiisumiisu", userIcon: "../assets/fast-cat-cat-excited.gif", title: "cheeze", text: "rat eat cheese i think", postImage: "../assets/badrats.jpg", dislikes: 5, isPinned: false, date: "2006-10-23"},
      {id:2, user: "kassimassi", userIcon: "../assets/neutraalnekass.jpg", title: "hiii", text: "MA OLEN VÄIKE SILLY KASS KES ELAB SU PEA SEES IHHIHIHIHIH", postImage: "", dislikes: 160549, isPinned: true, date: "2023-10-01"},
      {id:3, user: "hatman43", userIcon: "../assets/hatman.jpg", title: "Hats cheap price in the world : D", text: "Inshallah i sell hat. hat good quality. never fallen off head of anyone. good hats and cheap price too : )", postImage: "../assets/hat.jpg", dislikes: 0, isPinned: false, date: "2023-09-01"},
      {id:4, user: "GloomRaven", userIcon: "../assets/gerry2.gif", title: "my meow meow", text: "look at my meow meow", postImage: "assets/gerry4.jpg", dislikes: 13, isPinned: false, date: "2023-10-31"},
      {id:5, user: "kurimuri123", userIcon: "../assets/on the mouth.jpg", title: "SHUT UP", text: "RAT DOES NOT EAT CHEESE STUPID !!!!!!!!!!!!!!!!! ", postImage: "", dislikes: 6, isPinned: false, date: "2016-6-9"},
      {id:6, user: "xX--cutekitten--Xx", userIcon: "../assets/roosimiisu.jpg", title: "UUS KASS", text: "ma leidsin uue video ühest vahvast kiisust :3", postImage: "assets/kiizu.gif", dislikes: 198037, isPinned: true, date: "2015-07-07"},
      {id:7, user: "C00l_G4m3r_1", userIcon: "../assets/emptyavatar.jpg", title: "Obama gaming", text: "gamebama", postImage: "assets/obam.jpg", dislikes: 101, isPinned: false, date: "2023-10-07"},
      {id:8, user: "ben", userIcon: "../assets/kass2.jpeg", title: "CONTROVERSIAL TAKE", text: "electric stoves aren’t real btw they’re placebo stoves. your food cooks because of the placebo effect ", postImage: "", dislikes: 8, isPinned: false, date: "2023-04-20"},
      {id:9, user: "mayonnaise", userIcon: "../assets/emptyavatar.jpg", title: "Me Irl", text: "Just Like Me Haha", postImage: "assets/cowboy.jpg", dislikes: 3, isPinned: false, date: "2022-12-31"},
      {id:10, user: "säga", userIcon: "../assets/säga.jpg", title: "Hei", text: "mulle väga meeldib säga", postImage: "assets/halloween.jpg", dislikes: 19, isPinned: false, date: "2023-10-31"},
      {id:11, user: "säga", userIcon: "../assets/säga.jpg", title: "Mamma mia", text: "Taste for cheesening", postImage: "assets/chef.jpg", dislikes: 20, isPinned: false, date: "2003-10-05"},
      {id:12, user: "ben", userIcon: "../assets/kass2.jpeg", title: "a margeician never reveals her tricks homie", text: "bottom text", postImage: "", dislikes: 39, isPinned: false, date: "2023-04-20"},
      {id:13, user: "ben", userIcon: "../assets/kass2.jpeg", title: "D:", text: "its called the D: drive because you look at how much space is left on it and you go 'D:'", postImage: "assets/docal.jpg", dislikes: 7, isPinned: false, date: "2023-04-19"}
    ]
  },
  getters: {
  },
  mutations: {
    IncreaseDislike: function(state, postID) {
      const post = state.postList.find(post => post.id === postID);
      if (post) {
        post.dislikes += 1;
      }
  },
    ResetDislikes: state => {
      state.postList.forEach(post =>{
          post.dislikes = 0;
      }) 
    }

  },
  actions: {
    IncreaseDislikeAct: (act, postID) => {
      setTimeout(function() {
          act.commit("IncreaseDislike", postID)
      }, 10)
  },
  ResetAct: act => {
    setTimeout(function() {
        act.commit("ResetDislikes")
    }, 10)
}

  },
  modules: {
  }
})
