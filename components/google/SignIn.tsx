"use client";
import { auth } from "@/firebaseConfig";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { redirect } from "next/navigation";

const SignInWithGoogle = () => {
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    try {
      signInWithRedirect(auth, provider);
      redirect("/chat");
    } catch (error) {}
  };

  return <button onClick={signIn}>Sign in with Google</button>;
};

export default SignInWithGoogle;
