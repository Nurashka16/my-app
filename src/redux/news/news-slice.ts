import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../app/types/post";
import { Story } from "../../app/types/stories";

interface NewsState {
  posts: Array<Post>;
  stories: Array<Story>;
}
const initialState: NewsState = {
  posts: [
    {
      id: 1,
      text: "– Возьми лето в руку, налей лето в бокал – в самый крохотный, конечно, из какого только и сделаешь единственный терпкий глоток, поднеси его к губам – и по жилам твоим вместо лютой зимы побежит жаркое лето. Рей Бредбери «Вино из одуванчиков»",
      like: 5,
      comments: 0,
      share: 1,
      viewed: 10,
      img: "https://sun1-54.userapi.com/impg/UNvIXnRM4Kdye7DXeHpd4zGZ1SOdtZoFlhGMAw/aU_h46vkKeY.jpg?size=661x807&quality=96&sign=700fabf1c03b60df84afdbc04351ba81&c_uniq_tag=h3GYjJMQt_Pws25tsBS1_bQ2TAdWkJ_e0qNJkSVOPc4&type=album",
      name: "Мемограмм",
      avatar:
        "https://sun1-20.userapi.com/impg/P_-ANPhPRQmCqaDrLqEMeX25OOdrmrPgBx5vcA/Q8oFK9mi-uM.jpg?size=588x807&quality=96&sign=107e0157e49399431adf8e04f7fc730f&c_uniq_tag=HJL01k4fUunRSPBxi7y5nm_wbOCchqSZ8fBC6GI0nYY&type=album",
      date: "18 фев в 9:09",
    },
    {
      id: 2,
      text: "– Возьми лето в руку, налей лето в бокал – в самый крохотный, конечно, из какого только и сделаешь единственный терпкий глоток, поднеси его к губам – и по жилам твоим вместо лютой зимы побежит жаркое лето. Рей Бредбери «Вино из одуванчиков»",
      like: 5,
      comments: 0,
      share: 1,
      viewed: 10,
      img: "",

      name: "чай с мелиссой",

      avatar:
        "https://sun1-18.userapi.com/impg/oRxh-gXLa9j-OPseIk4ByxGjpMQqbOloSGSxIw/cRiscap7t_o.jpg?size=564x564&quality=95&sign=9a50a7f6abfdaef1ba0e0ea0e8f8f816&c_uniq_tag=I2xoILBvUA3-AkxM4NIQqJ079NKUmqyFdtyeAxtP9Bk&type=album",
      date: "2 года назад",
    },
  ],
  stories: [
    {
      id: 1,
      name: "Мемология",
      img: "https://sun1-20.userapi.com/impg/P_-ANPhPRQmCqaDrLqEMeX25OOdrmrPgBx5vcA/Q8oFK9mi-uM.jpg?size=588x807&quality=96&sign=107e0157e49399431adf8e04f7fc730f&c_uniq_tag=HJL01k4fUunRSPBxi7y5nm_wbOCchqSZ8fBC6GI0nYY&type=album",
    },
    {
      id: 1,
      name: "Чай с мелиссой",
      img: "https://sun1-18.userapi.com/impg/oRxh-gXLa9j-OPseIk4ByxGjpMQqbOloSGSxIw/cRiscap7t_o.jpg?size=564x564&quality=95&sign=9a50a7f6abfdaef1ba0e0ea0e8f8f816&c_uniq_tag=I2xoILBvUA3-AkxM4NIQqJ079NKUmqyFdtyeAxtP9Bk&type=album",
    },
    {
      id: 1,
      name: "Чай с мелиссой",
      img: "https://sun1-18.userapi.com/impg/oRxh-gXLa9j-OPseIk4ByxGjpMQqbOloSGSxIw/cRiscap7t_o.jpg?size=564x564&quality=95&sign=9a50a7f6abfdaef1ba0e0ea0e8f8f816&c_uniq_tag=I2xoILBvUA3-AkxM4NIQqJ079NKUmqyFdtyeAxtP9Bk&type=album",
    },
    {
      id: 1,
      name: "Чай с мелиссой",
      img: "https://sun1-18.userapi.com/impg/oRxh-gXLa9j-OPseIk4ByxGjpMQqbOloSGSxIw/cRiscap7t_o.jpg?size=564x564&quality=95&sign=9a50a7f6abfdaef1ba0e0ea0e8f8f816&c_uniq_tag=I2xoILBvUA3-AkxM4NIQqJ079NKUmqyFdtyeAxtP9Bk&type=album",
    },
    {
      id: 1,
      name: "Чай с мелиссой",
      img: "https://sun1-18.userapi.com/impg/oRxh-gXLa9j-OPseIk4ByxGjpMQqbOloSGSxIw/cRiscap7t_o.jpg?size=564x564&quality=95&sign=9a50a7f6abfdaef1ba0e0ea0e8f8f816&c_uniq_tag=I2xoILBvUA3-AkxM4NIQqJ079NKUmqyFdtyeAxtP9Bk&type=album",
    },
    {
      id: 1,
      name: "Чай с мелиссой",
      img: "https://sun1-18.userapi.com/impg/oRxh-gXLa9j-OPseIk4ByxGjpMQqbOloSGSxIw/cRiscap7t_o.jpg?size=564x564&quality=95&sign=9a50a7f6abfdaef1ba0e0ea0e8f8f816&c_uniq_tag=I2xoILBvUA3-AkxM4NIQqJ079NKUmqyFdtyeAxtP9Bk&type=album",
    },
    {
      id: 1,
      name: "Чай с мелиссой",
      img: "https://sun1-18.userapi.com/impg/oRxh-gXLa9j-OPseIk4ByxGjpMQqbOloSGSxIw/cRiscap7t_o.jpg?size=564x564&quality=95&sign=9a50a7f6abfdaef1ba0e0ea0e8f8f816&c_uniq_tag=I2xoILBvUA3-AkxM4NIQqJ079NKUmqyFdtyeAxtP9Bk&type=album",
    },
    {
      id: 1,
      name: "Чай с мелиссой",
      img: "https://sun1-18.userapi.com/impg/oRxh-gXLa9j-OPseIk4ByxGjpMQqbOloSGSxIw/cRiscap7t_o.jpg?size=564x564&quality=95&sign=9a50a7f6abfdaef1ba0e0ea0e8f8f816&c_uniq_tag=I2xoILBvUA3-AkxM4NIQqJ079NKUmqyFdtyeAxtP9Bk&type=album",
    },
    {
      id: 1,
      name: "Чай с мелиссой",
      img: "https://sun1-18.userapi.com/impg/oRxh-gXLa9j-OPseIk4ByxGjpMQqbOloSGSxIw/cRiscap7t_o.jpg?size=564x564&quality=95&sign=9a50a7f6abfdaef1ba0e0ea0e8f8f816&c_uniq_tag=I2xoILBvUA3-AkxM4NIQqJ079NKUmqyFdtyeAxtP9Bk&type=album",
    },
    {
      id: 1,
      name: "Ван пис",
      img: "https://n1s1.hsmedia.ru/9d/58/dc/9d58dc855c7ffb64bb4bb70798010714/600x600_1_d57ad2ea87f26bcf4ad9e5f819e74c71@720x720_0xKjfrFMVU_1152301336622800367.jpg",
    },
    {
      id: 1,
      name: "Ван пис",
      img: "https://n1s1.hsmedia.ru/9d/58/dc/9d58dc855c7ffb64bb4bb70798010714/600x600_1_d57ad2ea87f26bcf4ad9e5f819e74c71@720x720_0xKjfrFMVU_1152301336622800367.jpg",
    },
    {
      id: 1,
      name: "Ван пис",
      img: "https://n1s1.hsmedia.ru/9d/58/dc/9d58dc855c7ffb64bb4bb70798010714/600x600_1_d57ad2ea87f26bcf4ad9e5f819e74c71@720x720_0xKjfrFMVU_1152301336622800367.jpg",
    },
    {
      id: 1,
      name: "Ван пис",
      img: "https://n1s1.hsmedia.ru/9d/58/dc/9d58dc855c7ffb64bb4bb70798010714/600x600_1_d57ad2ea87f26bcf4ad9e5f819e74c71@720x720_0xKjfrFMVU_1152301336622800367.jpg",
    },
    {
      id: 1,
      name: "Ван пис",
      img: "https://n1s1.hsmedia.ru/9d/58/dc/9d58dc855c7ffb64bb4bb70798010714/600x600_1_d57ad2ea87f26bcf4ad9e5f819e74c71@720x720_0xKjfrFMVU_1152301336622800367.jpg",
    },
    {
      id: 1,
      name: "Ван пис",
      img: "https://n1s1.hsmedia.ru/9d/58/dc/9d58dc855c7ffb64bb4bb70798010714/600x600_1_d57ad2ea87f26bcf4ad9e5f819e74c71@720x720_0xKjfrFMVU_1152301336622800367.jpg",
    },
    {
      id: 1,
      name: "Ван пис",
      img: "https://n1s1.hsmedia.ru/9d/58/dc/9d58dc855c7ffb64bb4bb70798010714/600x600_1_d57ad2ea87f26bcf4ad9e5f819e74c71@720x720_0xKjfrFMVU_1152301336622800367.jpg",
    },
    {
      id: 1,
      name: "Ван пис",
      img: "https://n1s1.hsmedia.ru/9d/58/dc/9d58dc855c7ffb64bb4bb70798010714/600x600_1_d57ad2ea87f26bcf4ad9e5f819e74c71@720x720_0xKjfrFMVU_1152301336622800367.jpg",
    },
    {
      id: 1,
      name: "Ван пис",
      img: "https://n1s1.hsmedia.ru/9d/58/dc/9d58dc855c7ffb64bb4bb70798010714/600x600_1_d57ad2ea87f26bcf4ad9e5f819e74c71@720x720_0xKjfrFMVU_1152301336622800367.jpg",
    },
    {
      id: 1,
      name: "Ван пис",
      img: "https://n1s1.hsmedia.ru/9d/58/dc/9d58dc855c7ffb64bb4bb70798010714/600x600_1_d57ad2ea87f26bcf4ad9e5f819e74c71@720x720_0xKjfrFMVU_1152301336622800367.jpg",
    },
    {
      id: 1,
      name: "Ван пис",
      img: "https://n1s1.hsmedia.ru/9d/58/dc/9d58dc855c7ffb64bb4bb70798010714/600x600_1_d57ad2ea87f26bcf4ad9e5f819e74c71@720x720_0xKjfrFMVU_1152301336622800367.jpg",
    },
    {
      id: 1,
      name: "Ван пис",
      img: "https://n1s1.hsmedia.ru/9d/58/dc/9d58dc855c7ffb64bb4bb70798010714/600x600_1_d57ad2ea87f26bcf4ad9e5f819e74c71@720x720_0xKjfrFMVU_1152301336622800367.jpg",
    },
  ],
};
export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
});

export default newsSlice.reducer;
export const {} = newsSlice.actions;
