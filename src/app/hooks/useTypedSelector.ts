import {TypedUseSelectorHook, useSelector} from "react-redux";
import { RootState } from "../../redux-slice-store";

export const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector;