// * Call it
import { StaticImport } from "next/image";
import { createContext } from "react";

interface ContextProps {
  photoURL?: string | StaticImport; //! Need to be fix typescript error
  user: null | { photoURL: string | StaticImport } | {} | undefined;
  username: null | string;
}
// * Initialize the context will default value =({obj}) to use the value in the hole app
export const UserContext = createContext<ContextProps | null>({
  user: null,
  username: null,
  photoURL: "",
});
