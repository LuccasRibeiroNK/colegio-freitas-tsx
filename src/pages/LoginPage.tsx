import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  import.meta.env.VITE_REACT_APP_SUPABASE_URL,
  import.meta.env.VITE_REACT_APP_ANON_KEY
);

function LoginPage() {
  const navigate = useNavigate();
  supabase.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_IN") {
      navigate("/home");
    } else if (event === "SIGNED_OUT") {
      navigate("/");
    }
  });

  return (
    <div>
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          style: {
            button: { backgroundColor: "red", color: "white" },
            input: { backgroundColor: "red", color: "white" },
            anchor: { backgroundColor: "red", color: "white" },
            container: { backgroundColor: "red", color: "white" },
          },
        }}
        theme="dark"
        providers={["google"]}
      />
    </div>
  );
}
export default LoginPage;
