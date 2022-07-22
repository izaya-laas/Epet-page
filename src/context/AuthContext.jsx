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

  // useEffect(() => {
  //   const verInformacion = () => {
  //     const usuario = getUser();

  //     if (usuario) {
  //       console.log("Usuario Conectado");
  //       setUserOnline(true);
  //     } else {
  //       console.log("Usuario NO Conectado");
  //       setUserOnline(false);
  //     }
  //   };

  //   verInformacion();
  // }, [user, userOnline]);

  useEffect(() => {
    const checkUser = async () => {
      const user = getUser();
      console.log(getUser());

      if (user) {
        setUser(user);
        setUserOnline(true);

        console.log(user);
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

  console.log(user);
  return (
    <AuthContext.Provider value={{ user, userOnline }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
