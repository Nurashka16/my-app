import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Music } from "../../app/types/musics";

interface MusicState {
  musics: Array<Music>;
  musicActual: string;
}
const initialState: MusicState = {
  musics: [
    {
      id: 1,
      url: "https://phonoteka.org/uploads/posts/2021-05/1620150662_8-phonoteka_org-p-fon-dlya-muzikalnogo-alboma-9.jpg",
      musicName: "Gala",
      author: "Ledy Gaga",
      musicLength: "3:41",
      play: false,
    },
    {
      id: 2,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7LLFFWm6C60EX3ANAuiTPgYhPHnu_qzTGFg&usqp=CAU",
      musicName: "Bananas",
      author: "Bad Boy men",
      musicLength: "2:44",
      play: false,
    },
    {
      id: 3,
      url: "https://btsarmy.ru/_pu/0/43245221.jpg",
      musicName: "KroCi",
      author: "MsNash",
      musicLength: "4:01",
      play: false,
    },
    {
      id: 4,
      url: "https://cdnstatic.rg.ru/uploads/images/gallery/81ec6bb3/1_6e7fde2d.jpg",
      musicName: "Sink",
      author: "Sem Smith",
      musicLength: "3:30",
      play: false,
    },
    {
      id: 5,
      url: "https://sun9-39.userapi.com/impf/c629528/v629528796/26f4/nWTxd-oUr5I.jpg?size=654x654&quality=96&sign=6e3ea547b7991f58a50a059c4407abd0&c_uniq_tag=tlC_TdpKkqmDJrvnpsToTGWdjz9F3UqYG448B5KWehU&type=album",
      musicName: "BAD BLOOD",
      author: "Taylor Sweet",
      musicLength: "4:20",
      play: false,
    },
  ],
  musicActual: "",
};
const musicsSlice = createSlice({
  name: "musics",
  initialState,
  reducers: {
    playMusic(state, action: PayloadAction<string>) {
      state.musicActual = action.payload;
    },
  },
});

export default musicsSlice.reducer;
export const { playMusic } = musicsSlice.actions;
