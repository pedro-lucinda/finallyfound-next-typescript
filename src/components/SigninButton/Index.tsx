import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export const SigninButton = () => {
  const session = true;

  return !session ? (
    <button type="button" className={styles.signinButton}>
      <FaGithub color="#c7f4ff" />
      Sign in with GitHub
    </button>
  ) : (
    <button type="button" className={styles.signinButton}>
      <FaGithub color="#02f0ff" />
      <h4>Pedro Lucinda</h4>
      <FiX className="closeIcon"  />
    </button>
  );
};
