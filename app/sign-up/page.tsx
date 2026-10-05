"use client";
import { authClient, signUp } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SignUpPage = () => {
  const handleSignUp = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const userData = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };

    const { data, error } = await signUp.email({
      ...userData,
      callbackURL: "/",
    });
    if (data) {
      console.log(data);
      redirect("/");
    }
    if (error) {
      console.log(error);
    }
  };
  const hendleSignUpGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <h2 className="text-2xl font-bold text-red-700">সাইন আপ</h2>
      <form onSubmit={handleSignUp}>
        <fieldset className="fieldset rounded-box w-md">
          <label className="label">নাম</label>
          <input
            type="text"
            name="name"
            className="input w-md"
            placeholder="Name"
          />

          <label className="label">ImageURL</label>
          <input
            type="url"
            name="image"
            className="input w-md"
            placeholder="Image"
          />

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
            সাইন আপ করুন
          </button>
        </fieldset>
      </form>
      <button onClick={hendleSignUpGoogle} className="btn ">Sign up With Google</button>
    </div>
  );
};

export default SignUpPage;
