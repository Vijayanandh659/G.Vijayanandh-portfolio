import React, { useEffect, useRef } from "react";

function ScrollAnimation({ children, animation = "fade-up" }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add animation
          element.classList.add("show");
        } else {
          // Remove animation when leaving screen
          element.classList.remove("show");
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`scroll-animation ${animation}`}
    >
      {children}
    </div>
  );
}

export default ScrollAnimation;