"use client";

import { authClient, signIn } from "@/lib/auth-client";

const SignInPage = () => {
  const hendleSignIn = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await signIn.email({
      ...userData,
      callbackURL: "/",
    });
    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  };

  const hendleSignInGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <h2 className="text-2xl font-bold text-red-700">সাইন ইন</h2>
      <form onSubmit={hendleSignIn} className="w-md">
        <fieldset className="fieldset rounded-box ">
          <label className="label">ইমেইল</label>
          <input
            autoComplete="email"
            name="email"
            type="email"
            className="input w-md"
            placeholder="Email"
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            autoComplete="new-password"
            type="password"
            className="input w-md"
            name="password"
            placeholder="Password"
          />

          <button type="submit" className="btn bg-red-500 text-white mt-4">
            সাইন ইন করুন
          </button>
        </fieldset>
      </form>
      <button onClick={hendleSignInGoogle} className="btn ">Sign in With Google</button>
    </div>
  );
};

export default SignInPage;
