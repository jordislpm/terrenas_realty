import React, { useEffect, useState , useRef } from 'react'
import styles from "./UploadWidget.module.scss"


interface UploadWidgetConfig {
  cloudName: string;
  uploadPreset: string;
  multiple?: boolean;
  maxImageFileSize?: number;
  folder?: string;
}

interface UploadWidgetProps {
  uwConfig: UploadWidgetConfig; // You can replace `object` with a stricter type if you want
  setPublicId?: (id: string) => void;
  setState: React.Dispatch<React.SetStateAction<string[]>>;
}

declare global {
  interface Window {
    cloudinary: {
      createUploadWidget: (
        config: object,
        callback: (
          error: any,
          result: {
            event: string;
            info: { secure_url: string };
          }
        ) => void
      ) => {
        open: () => void;
      };
    };
  }
}

const UploadWidget: React.FC<UploadWidgetProps> = ({ uwConfig, setPublicId, setState }) => {
  const uploadWidgetRef = useRef<ReturnType<typeof window.cloudinary.createUploadWidget> | null>(null);
  const uploadButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const initializeUploadWidget = () => {
      if (window.cloudinary && uploadButtonRef.current) {
        // Create upload widget
        uploadWidgetRef.current = window.cloudinary.createUploadWidget(
          uwConfig,
          (error, result) => {
            if (!error && result && result.event === 'success') {
              console.log('Upload successful:', result.info);
             setState(prev=>[...prev,result.info.secure_url] );
            }
          }
        );

        const handleUploadClick = () => {
          uploadWidgetRef.current?.open();
        };

        const buttonElement = uploadButtonRef.current;
        buttonElement.addEventListener('click', handleUploadClick);

        // Cleanup
        return () => {
          buttonElement.removeEventListener('click', handleUploadClick);
        };
      }
    };

    initializeUploadWidget();
  }, [uwConfig, setPublicId]);

  return (
    <button
      ref={uploadButtonRef}
      id="upload_widget"
      className={styles.uploadButton}
    >
      Upload
    </button>
  );
};

export default UploadWidget;