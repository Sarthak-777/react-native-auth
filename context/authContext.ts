import {createContext} from 'react';

const AuthContext = createContext<
  [
    {
      token?: string | null;
    },
    (
      | {
          setToken: React.Dispatch<React.SetStateAction<string>>;
          signOut: () => void;
        }
      | undefined
    ),
  ]
>([{}, undefined]);

export default AuthContext;
