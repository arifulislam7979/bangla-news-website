"use client";
import { authClient, signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };

    const { data, error } = await signUp.email({
      ...userData,
    });

    if (error) {
      toast.error(error.message || "Registration failed!");
      console.log(error);
      return;
    }

    if (data) {
      toast.success("Registration Successful! Please Sign In.");
      await authClient.signOut();
      router.push("/sign-in");
    }
  };

  const handleSignUpGoogle = async () => {
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
            required
          />

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
            autoComplete="new-password"
            type="password"
            className="input w-md"
            name="password"
            placeholder="Password"
            required
          />

          <button type="submit" className="btn bg-red-500 text-white mt-4">
            সাইন আপ করুন
          </button>
        </fieldset>
      </form>

      <button onClick={handleSignUpGoogle} className="btn mt-3">
        Sign up With Google
      </button>
    </div>
  );
};

export default SignUpPage;
