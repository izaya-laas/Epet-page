import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../services/auth";
import { supabase } from "../api/supabase.config";

const AuthContext = createContext({
  user: null,
  userOnline: false,
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userOnline, setUserOnline] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const user = getUser();
      console.log(getUser());

      if (user) {
        setUser(user);
        setUserOnline(true);

        const { user_metadata } = user;
        const { avatar_url, full_name } = user_metadata;
        localStorage.setItem("user_name", full_name);
        localStorage.setItem("user_avatar", avatar_url);

        navigate("/", { replace: true });
      } else {
        setUser(null);
        setUserOnline(false);
      }
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(() =>
      checkUser()
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, userOnline }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
