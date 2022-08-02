import React from "react";
import { signIn } from "next-auth/react";
function signin() {
  return (
    <div>
      <button onClick={signIn}>Signin</button>
    </div>
  );
}

export default signin;
