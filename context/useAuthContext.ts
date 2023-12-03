import {useContext} from 'react';
import AuthContext from './authContext';

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
