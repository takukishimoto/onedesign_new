import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Analytics from "@/components/Analytics";

// ▼ ページ遷移アニメーション用
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";

// ▼ ページトップへ戻す処理（URL変更時）
import ScrollToTop from "@/components/ScrollToTop";

// ▼ 各ページ
import Index from "./pages/Index";
import Work from "./pages/Work";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Price from "./pages/Price";
import Hojyokin from "./pages/Hojyokin";
import NotFound from "./pages/NotFound";

// ▼ React Query 初期化
const queryClient = new QueryClient();

/**
 * ==========================
 * ページ遷移を管理するコンポーネント
 * ==========================
 *
 * - useLocation() で URL の変更を検知
 * - AnimatePresence で「ページ切り替え時のアニメーション」を制御
 * - 各ページを <PageTransition> でラップすることで
 *   全ページ共通のアニメーションを実現
 */
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    /**
     * mode="wait"
     * → 前のページの exit アニメーションが終わってから
     *   次のページを表示する（ガクつき防止）
     */
    <AnimatePresence mode="wait">
      {/*
        location と key を指定するのが超重要
        → URL が変わったことを AnimatePresence に正しく伝える
      */}
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Index />
            </PageTransition>
          }
        />

        <Route
          path="/work"
          element={
            <PageTransition>
              <Work />
            </PageTransition>
          }
        />

        <Route
          path="/services"
          element={
            <PageTransition>
              <Services />
            </PageTransition>
          }
        />

        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />

        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />

        <Route
          path="/blog"
          element={
            <PageTransition>
              <Blog />
            </PageTransition>
          }
        />

        {/*
          動的ルートも問題なし
          ブログ詳細ページも同じアニメーションがかかる
        */}
        <Route
          path="/blog/:id"
          element={
            <PageTransition>
              <BlogPost />
            </PageTransition>
          }
        />

        <Route
          path="/price"
          element={
            <PageTransition>
              <Price />
            </PageTransition>
          }
        />

         <Route
          path="/hojyokin"
          element={
            <PageTransition>
              <Hojyokin />
            </PageTransition>
          }
        />


        {/*
          404 ページ
          最後に置く（これより上に custom route を追加する）
        */}
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

/**
 * ==========================
 * App 本体
 * ==========================
 *
 * 役割まとめ：
 * - QueryClientProvider：データ管理
 * - TooltipProvider：UIツールチップ
 * - Toaster / Sonner：通知
 * - BrowserRouter：ルーティング
 * - ScrollToTop：ページ遷移時にトップへ戻す
 * - AnimatedRoutes：アニメ付きルーティング
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Analytics />
        {/* ページ遷移時に必ずトップへ */}
        <ScrollToTop />

        {/* アニメーション対応ルーティング */}
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;