import { Object, auth } from "./clients";
import E from "./endpoints";

export const API = {
  AUTH: {
    SIGN_IN: (body: string): Object<string> => auth.post(E.SIGN_IN(), body),
  },
};
