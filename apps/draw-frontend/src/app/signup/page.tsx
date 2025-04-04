"use client";

import { AuthCard, AuthForm, AuthLogo, AuthLinks } from "@repo/ui";

export default function Signup() {
  return (
    <AuthCard
      title="Create your account"
      subtitle="Start creating drawings with Excalidraw"
      logo={<AuthLogo />}
      footer={
        <AuthLinks isSignIn={false} signInHref="/signin" signUpHref="/signup" />
      }
    >
      <AuthForm
        isSignIn={false}
        onSubmit={(email, password, name) => {
          // Handle registration logic here
          console.log({ email, password, name });
        }}
        onGoogleSignIn={() => {
          // Handle Google Sign In
          console.log("Google Sign In");
        }}
        onGithubSignIn={() => {
          // Handle GitHub Sign In
          console.log("GitHub Sign In");
        }}
      />
    </AuthCard>
  );
}
