// * Call it
import { createContext } from "react";

interface ContextProps {
  user: any;
  username: null | string;
}
// * Initialize the context will default value =({obj}) to use the value in the hole app
export const UserContext = createContext<ContextProps>({
  user: null,
  username: null,
});
