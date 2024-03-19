import { useParams } from "react-router-dom";
import SignIn from "../../../Components/Auth/AuthPageRouter/Content/SignIn/SignIn.jsx";
import SignUp from "../../../Components/Auth/AuthPageRouter/Content/SignUp/SignUp.jsx";
import { ReactComponentElement, ReactElement } from "react";

// interface AuthFactory{
//   description: {
//     item1: string;
//     item2: string;
//   },
//   component:ReactElement
// }

export const useAuthFactory = () => {
  const { block: blockName } = useParams();
  if (blockName == "signIn") {
    return {
      description: {
        item1: "Введите телефон или почту, которые",
        item2: "привязаны к аккаунту",
      },
      component: <SignInContainer />,
    };
  }
  if (blockName == "signUp") {
    return {
      description: {
        item1: "Ваш номер телефона будет использоваться",
        item2: "для входа в аккаунт",
      },
      component: <SignUp />,
    };
  }
};
