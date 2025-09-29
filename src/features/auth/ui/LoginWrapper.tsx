import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUser } from "../model/authSlie";

export const LoginWrapper = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container mt-30 max-w-[400px] w-full mx-auto min-h-[70vh]">
        <h3 className="text-4xl mb-5 text-center text-red-600">Sign in</h3>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const payload = jwtDecode(credentialResponse.credential as string);
            dispatch(setUser(payload));
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
};
