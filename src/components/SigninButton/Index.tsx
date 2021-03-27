import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";
import { signIn, signOut, useSession } from "next-auth/client";

export const SigninButton = () => {
  const [session] = useSession();
  // console.log(session);

  return !session ? (
    <button
      type="button"
      className={styles.signinButton}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#c7f4ff" />
      Sign in with GitHub
    </button>
  ) : (
    <button
      type="button"
      className={styles.signinButton}
      onClick={() => signOut()}
    >
      <FaGithub color="#02f0ff" />
      {session.user.name}
      <FiX className="closeIcon" />
    </button>
  );
};
