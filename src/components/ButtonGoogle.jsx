import { singInWithGoogle } from "../services/auth";
import { FcGoogle } from "react-icons/fc";

const ButtonGoogle = () => {
  return (
    <button
      onClick={singInWithGoogle}
      className="flex items-center bg-primary-color py-2 px-8 rounded-lg mx-auto text-fourth-color w-36 text-sm h-8"
    >
      <FcGoogle className="mr-2 scale-125" />
      Google
    </button>
  );
};

export default ButtonGoogle;
