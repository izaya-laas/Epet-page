import { supabase } from "../api/supabase.config";

export const singInWithGoogle = async () => {
  try {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "google",
    });

    if (error) throw new Error("Ha oucrrido un error en la autenticación");

    return { user, session };
  } catch (error) {
    console.error(error);
  }
};

export const singout = async () => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) throw new Error(error);
  } catch (error) {
    console.error(error);
  }
};

export const getUser = () => {
  try {
    const user = supabase.auth.user();

    if (!user) return;

    return user;
  } catch (error) {
    console.error(error);
  }
};
