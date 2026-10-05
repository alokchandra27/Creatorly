import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  // useLocation hooks into React Router to watch for whenever the path updates
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly snaps the page window view back to the top-left origin coordinates
    window.scrollTo(0, 0);
  }, [pathname]); // Fires every single time a user changes pages

  return null; // This component doesn't need to render any UI HTML element
}
