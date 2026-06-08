import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import MexicoBasics from "./pages/MexicoBasics";
import Landing from "./pages/Landing";
import Access from "./pages/Access";
import HouseBasics from "./pages/HouseBasics";
import Internet from "./pages/Internet";
import GettingAround from "./pages/GettingAround";
import Working from "./pages/Working";
import Food from "./pages/Food";
import Cash from "./pages/Cash";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/Amsterdam96">
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mexico-basics" element={<MexicoBasics />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/access" element={<Access />} />
          <Route path="/house-basics" element={<HouseBasics />} />
          <Route path="/internet" element={<Internet />} />
          <Route path="/getting-around" element={<GettingAround />} />
          <Route path="/working" element={<Working />} />
          <Route path="/food" element={<Food />} />
          <Route path="/cash" element={<Cash />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
