import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

export const Auth = () => {
  return (
    <div>
      <SignedOut>
        <SignUpButton />
        <SignInButton />
      </SignedOut>
    </div>
  );
};
