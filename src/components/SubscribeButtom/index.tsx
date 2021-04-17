import { signIn, useSession } from "next-auth/client";
import React from "react";
import { api } from "../../services/api";
import { getStripeJS } from "../../services/stripe-js";
import styles from "./styles.module.scss";
interface SubscribeButtonProps {
  priceId: string;
}
export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  const [session] = useSession();

  async function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }

    try {
      const response = await api.post("/subscribe");

      const { sessionId } = response.data;

      const stripe = await getStripeJS();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <button onClick={handleSubscribe} className={styles.subscribeButton}>
      Subscribe Now
    </button>
  );
};
