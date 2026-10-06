"use client";

import { authClient, signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SignInPage = () => {
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await signIn.email({
      ...userData,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Invalid Email or Password");
      console.log(error);
      return;
    }

    if (data) {
      toast.success("Login Successful");
      console.log(data);
      router.push("/"); 
    }
  };

  const handleSignInGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <h2 className="text-2xl font-bold text-red-700">সাইন ইন</h2>
      <form onSubmit={handleSignIn} className="w-md">
        <fieldset className="fieldset rounded-box">
          <label className="label">ইমেইল</label>
          <input
            autoComplete="email"
            name="email"
            type="email"
            className="input w-md"
            placeholder="Email"
            required
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            autoComplete="current-password"
            type="password"
            className="input w-md"
            name="password"
            placeholder="Password"
            required
          />

          <button type="submit" className="btn bg-red-500 text-white mt-4">
            সাইন ইন করুন
          </button>
        </fieldset>
      </form>
      <button onClick={handleSignInGoogle} className="btn mt-3">
        Sign in With Google
      </button>
    </div>
  );
};

export default SignInPage;
