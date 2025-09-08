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
import AboutPage from "./pages/about/AboutPage";
import BusinessMigrationPage from "./pages/business-migration/BusinessMigrationPage";
import CitizenshipByInvestmentPage from "./pages/citizenship-by-investment/CitizenshipByInvestmentPage";
import ResidencyByInvestmentPage from "./pages/residency-by-investment/ResidencyByInvestmentPage";
import { ContactPage } from "./pages/contact/ContactPage";
import AustriaPage from "./pages/study-abroad/AustriaPage";
import FinlandPage from "./pages/study-abroad/FinlandPage";
import HungaryPage from "./pages/study-abroad/HungaryPage";
import SwedenPage from "./pages/study-abroad/SwedenPage";
import NetherlandsPage from "./pages/study-abroad/NetherlandsPage";
import SpainPage from "./pages/study-abroad/SpainPage";
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
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/business-migration" element={<BusinessMigrationPage />} />
          <Route path="/citizenship-by-investment" element={<CitizenshipByInvestmentPage />} />
          <Route path="/residency-by-investment" element={<ResidencyByInvestmentPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/study-abroad/austria" element={<AustriaPage />} />
          <Route path="/study-abroad/finland" element={<FinlandPage />} />
          <Route path="/study-abroad/hungary" element={<HungaryPage />} />
          <Route path="/study-abroad/sweden" element={<SwedenPage />} />
          <Route path="/study-abroad/netherlands" element={<NetherlandsPage />} />
          <Route path="/study-abroad/spain" element={<SpainPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
