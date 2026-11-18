import React from "react";
import styles from "./emptyStateMessage.module.scss";
import { useNavigate } from "react-router-dom";

type EmptyStateMessageProps = {
  title?: string;
  message?: string;
  showResetButton?: boolean;
};

const EmptyStateMessage: React.FC<EmptyStateMessageProps> = ({
  title = "No properties found",
  message = "We couldn't find any listings matching your current search criteria. Try adjusting or clearing your filters to see more results.",
  showResetButton = true,
}) => {
  const navigate = useNavigate();

  const handleReset = () => {
    navigate("/list");
  };

  return (
    <div className={styles.emptyContainer}>
      <div className={styles.iconCircle}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
          <circle cx="17" cy="9" r="3" stroke="#fece51" strokeWidth="2" />
          <line x1="19.2" y1="11.2" x2="22" y2="14" stroke="#fece51" strokeWidth="2" />
        </svg>
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.message}>{message}</p>

      {showResetButton && (
        <button
          type="button"
          onClick={handleReset}
          className={styles.resetButton}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
          <span>View all properties</span>
        </button>
      )}
    </div>
  );
};

export default EmptyStateMessage;
