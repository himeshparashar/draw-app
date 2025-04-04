"use client";

import { AuthCard, AuthForm, AuthLogo, AuthLinks } from "@repo/ui";

export default function Signin() {
  return (
    <AuthCard
      title="Sign in to Excalidraw"
      subtitle="Continue with your account"
      logo={<AuthLogo />}
      footer={
        <AuthLinks isSignIn={true} signInHref="/signin" signUpHref="/signup" />
      }
    >
      <AuthForm
        isSignIn={true}
        onSubmit={(email, password) => {
          // Handle authentication logic here
          console.log({ email, password });
        }}
        onGoogleSignIn={() => {
          // Handle Google Sign In
          console.log("Google Sign In");
        }}
        onGithubSignIn={() => {
          // Handle GitHub Sign In
          console.log("GitHub Sign In");
        }}
        passwordResetHref="/reset-password"
      />
    </AuthCard>
  );
}
