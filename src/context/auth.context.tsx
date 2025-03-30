import React, { useContext, createContext, useState } from 'react';
import { useNavigate } from 'react-router';
import UserModel from '../models/user.model';

export interface AuthContextData {
  isSignedIn: boolean;
  signIn: (data: unknown) => Promise<void>;
  logout: () => void;
  user: UserModel | null;
  token: string | null;
}

const AuthContext = createContext<AuthContextData>({ isSignedIn: false, signIn: async () => {}, logout: () => {}, user: null, token: null });

const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<UserModel | null>(null);
  const [token, setToken] = useState(localStorage.getItem('authToken'));

  const navigate = useNavigate();

  const signIn = async (data: unknown) => {
    try {
      // Uncomment for real api call
      // const response = await fetch('your-api-endpoint/auth/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // });
      // const res = await response.json();
      // if (res.data) {
      //   setUser(res.data.user);
      //   setToken(res.token);
      //   localStorage.setItem('authToken', res.token);
      //   navigate('/dashboard');
      //   return;
      // }
      // throw new Error(res.message);
      setUser(new UserModel(1, 'Danny', 'López', '01dlopezs98@gmail.com'));
      setToken(token);
      navigate('/admin');
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
    setUser(null);
    setToken('');
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return <AuthContext.Provider value={{ isSignedIn: user !== null, signIn, user, token, logout }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
