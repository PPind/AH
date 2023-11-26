import { createStore } from 'vuex'

export default createStore({
  strict: true,

  state: {
    postList:[
      {id:1, user: "kiisumiisu", userIcon: "fast-cat-cat-excited.gif", title: "cheeze", text: "rat eat cheese i think", postImage: "@/vudinad_ja_vidinad/badrats.jpg", dislikes: 5, isPinned: false, date: "2006-10-23"},
      {id:2, user: "kassimassi", userIcon: "../assets/neutraalnekass.jpg", title: "hiii", text: "MA OLEN VÄIKE SILLY KASS KES ELAB SU PEA SEES IHHIHIHIHIH", postImage: "", dislikes: 160549, isPinned: true, date: "2023-10-01"},
      {id:3, user: "hatman43", userIcon: "../assets/hatman.jpg", title: "Hats cheap price in the world : D", text: "Inshallah i sell hat. hat good quality. never fallen off head of anyone. good hats and cheap price too : )", postImage: "vudinad_ja_vidinad/hat.jpg", dislikes: 0, isPinned: false, date: "2023-09-01"},
      {id:4, user: "GloomRaven", userIcon: "../assets/gerry2.gif", title: "my meow meow", text: "look at my meow meow", postImage: "@/vudinad_ja_vidinad/gerry4.jpg", dislikes: 13, isPinned: false, date: "2023-10-31"},
      {id:5, user: "kurimuri123", userIcon: "../assets/on the mouth.jpg", title: "SHUT UP", text: "RAT DOES NOT EAT CHEESE STUPID !!!!!!!!!!!!!!!!! ", postImage: "", dislikes: 6, isPinned: false, date: "2016-6-9"},
      {id:6, user: "xX--cutekitten--Xx", userIcon: "../assets/roosimiisu.jpg", title: "UUS KASS", text: "ma leidsin uue video ühest vahvast kiisust :3", postImage: "vudinad_ja_vidinad/kiizu.gif", dislikes: 198037, isPinned: true, date: "2015-07-07"},
      {id:7, user: "C00l_G4m3r_1", userIcon: "../assets/emptyavatar.jpg", title: "Obama gaming", text: "gamebama", postImage: "vudinad_ja_vidinad/obam.jpg", dislikes: 101, isPinned: false, date: "2023-10-07"},
      {id:8, user: "ben", userIcon: "../assets/kass2.jpeg", title: "CONTROVERSIAL TAKE", text: "electric stoves aren’t real btw they’re placebo stoves. your food cooks because of the placebo effect ", postImage: "", dislikes: 8, isPinned: false, date: "2023-04-20"},
      {id:9, user: "mayonnaise", userIcon: "../assets/emptyavatar.jpg", title: "Me Irl", text: "Just Like Me Haha", postImage: "vudinad_ja_vidinad/cowboy.jpg", dislikes: 3, isPinned: false, date: "2022-12-31"},
      {id:10, user: "säga", userIcon: "../assets/säga.jpg", title: "Hei", text: "mulle väga meeldib säga", postImage: "vudinad_ja_vidinad/halloween.jpg", dislikes: 19, isPinned: false, date: "2023-10-31"},
      {id:11, user: "säga", userIcon: "../assets/säga.jpg", title: "Mamma mia", text: "Taste for cheesening", postImage: "vudinad_ja_vidinad/chef.jpg", dislikes: 20, isPinned: false, date: "2003-10-05"},
      {id:12, user: "ben", userIcon: "../assets/kass2.jpeg", title: "a margeician never reveals her tricks homie", text: "bottom text", postImage: "", dislikes: 39, isPinned: false, date: "2023-04-20"},
      {id:13, user: "ben", userIcon: "../assets/kass2.jpeg", title: "D:", text: "its called the D: drive because you look at how much space is left on it and you go 'D:'", postImage: "vudinad_ja_vidinad/docal.jpg", dislikes: 7, isPinned: false, date: "2023-04-19"}
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
