import * as React from "react"
import { cn } from "@/lib/utils"

interface SpotlightProps {
  targetRef: React.RefObject<HTMLElement>;
  isVisible: boolean;
  onClose?: () => void;
  padding?: number; // Optional padding around the highlighted element
  radius?: number; // Optional border radius for the hole
  children?: React.ReactNode; // To render popover or other elements inside
}

const Spotlight = ({
  targetRef,
  isVisible,
  onClose,
  padding = 10,
  radius = 8,
  children,
}: SpotlightProps) => {
  const [targetRect, setTargetRect] = React.useState<DOMRect | null>(null);

  React.useLayoutEffect(() => {
    const updateRect = () => {
      if (targetRef.current) {
        setTargetRect(targetRef.current.getBoundingClientRect());
      }
    };

    if (isVisible) {
      updateRect();
      window.addEventListener("resize", updateRect);
      window.addEventListener("scroll", updateRect, true); // Use capture phase for scroll
    }

    return () => {
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect, true);
    };
  }, [isVisible, targetRef]);

  if (!isVisible || !targetRect) {
    return null;
  }

  const holeStyle: React.CSSProperties = {
    position: "absolute",
    top: `${targetRect.top - padding}px`,
    left: `${targetRect.left - padding}px`,
    width: `${targetRect.width + padding * 2}px`,
    height: `${targetRect.height + padding * 2}px`,
    borderRadius: `${radius}px`,
    boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.6)",
    pointerEvents: "none", // Allows clicks to pass through the hole itself
  };

  return (
    <div
      className="fixed inset-0 z-50"
      onClick={onClose}
    >
      <div style={holeStyle} />
      <div className="absolute" style={{ top: targetRect.bottom + padding, left: targetRect.left }}>
        {children}
      </div>
    </div>
  );
};

Spotlight.displayName = "Spotlight";

export { Spotlight };
