import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AustraliaPage from "./pages/australia/AustraliaPage";
import CanadaPage from "./pages/canada/CanadaPage";
import NewZealandPage from "./pages/newzealand/NewZealandPage";
import EuropePage from "./pages/europe/EuropePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/australia" element={<AustraliaPage />} />
          <Route path="/canada" element={<CanadaPage />} />
          <Route path="/newzealand" element={<NewZealandPage />} />
          <Route path="/europe" element={<EuropePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
