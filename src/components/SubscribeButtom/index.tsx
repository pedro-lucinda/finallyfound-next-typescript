import React from "react";
import styles from "./styles.module.scss";
interface SubscribeButtonProps {
  priceId: string;
}
export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  return <button className={styles.subscribeButton}>Subscribe Now</button>;
};
