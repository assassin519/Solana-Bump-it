import { useContext } from 'react';

// auth provider
import JWTContext from '../contexts/JWTContext';
// import AuthContext from 'contexts/FirebaseContext';
// import AuthContext from 'contexts/AWSCognitoContext';
// import AuthContext from 'contexts/Auth0Context';

// ==============================|| AUTH HOOKS ||============================== //

const useAuth = () => {
  const context = useContext(JWTContext);

  if (!context) throw new Error('context must be use inside provider');

  return context;
};

export default useAuth;