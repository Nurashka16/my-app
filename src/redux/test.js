/*let initialState = {
  musics: [
    {
      id: 1,
      url: "",
      musicName: "",
      author: "",
      musicLength: "",
      play: false,
    },
    {
      id: 2,
      url: "",
      musicName: "",
      author: "",
      musicLength: "",
      play: false,
    },
    {
      id: 3,
      url: "",
      musicName: "",
      author: "",
      musicLength: "",
      play: false,
    },
    {
      id: 4,
      url: "",
      musicName: "",
      author: "",
      musicLength: "",
      play: false,
    },
    {
      id: 5,
      url: "",
      musicName: "",
      author: "",
      musicLength: "",
      play: false,
    },
  ],
  musicActual: null,
};

 const test = (state, id) => {
  let actual = state.musicActual;
  let stateCopy = state;
  if (actual == null) {
    actual = state.musics.find((m) => m.id == id);
    actual.play = true;
  } else {
   stateCopy.musicActual.play = false;
   actual = state.musics.find((m) => m.id == id);
   actual.play = true;
  }
  stateCopy.musicActual = actual;
  return stateCopy;
};

console.log(test(initialState, 2));
console.log(test(initialState, 4));*/