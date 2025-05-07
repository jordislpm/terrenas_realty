import React, { useEffect, useState } from 'react'
import styles from "./OverlayComponent.module.scss"

interface OverlayComponentProps {
  isOpen: boolean
  onClickOverlay: () => void
}

function OverlayComponent({ isOpen, onClickOverlay }: OverlayComponentProps) {
  const [overlayOpen, setOverlayOpen] = useState<boolean>(false)
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768) // or your breakpoint
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  useEffect(() => {
    setOverlayOpen(isOpen)
  }, [isOpen])

  const toggleOverlay = () => {
    setOverlayOpen(false)
    onClickOverlay()
  }

  // Don't render anything on large screens
  if (!isSmallScreen) return null

  return (
    <div
      className={`${styles.overlay} ${overlayOpen ? styles.overlayActive : ""}`}
      onClick={toggleOverlay}
    ></div>
  )
}

export default OverlayComponent