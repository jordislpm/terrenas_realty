import React from "react";
import styles from "./emptyStateMessage.module.scss";
// import { AlertCircle } from "lucide-react";

type EmptyStateMessageProps = {
  message?: string;
};

const EmptyStateMessage: React.FC<EmptyStateMessageProps> = ({
  message = "No results found. Try adjusting your filters.",
}) => {
  return (
    <div className={styles.emptyMessage}>
      {/* <AlertCircle size={32} /> */}
      <p>{message}</p>
    </div>
  );
};

export default EmptyStateMessage;