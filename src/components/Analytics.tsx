import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const GA_MEASUREMENT_ID = "G-2WDYTLBK6X";

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // gtag がまだ読み込まれていない場合は何もしない
    if (!window.gtag) return;

    const page_path = location.pathname + location.search;

    // SPA のページ遷移ごとに page_view を送る
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path,
    });
  }, [location.pathname, location.search]);

  return null;
}