import { GoogleOAuthProvider } from "@react-oauth/google";
import { LoginWrapper } from "../../../features/auth";
// const client_id = import.meta.env.CLIENT_ID;
export const Login = () => {
  return (
    <GoogleOAuthProvider clientId="578359250737-rbsj546mekk24tdqni59b6r8d48dfeqg.apps.googleusercontent.com">
      <LoginWrapper />
    </GoogleOAuthProvider>
  );
};
