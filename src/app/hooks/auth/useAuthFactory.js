import { useParams } from "react-router-dom";
import SignInContainer from "../../../Components/Auth/AuthPageRouter/Content/SignIn/SignInContainer";
import SignUpContainer from "../../../Components/Auth/AuthPageRouter/Content/SignUp/SignUpContainer";

export function useAuthFactory() {
  const { block: blockName } = useParams();
  console.log(useParams());
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
      component: <SignUpContainer />,
    };
  }
}
