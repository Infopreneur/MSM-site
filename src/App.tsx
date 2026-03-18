import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AgentOpportunity from "./pages/AgentOpportunity";
import AboutPlatform from "./pages/AboutPlatform";
import InsuranceSolutions from "./pages/InsuranceSolutions";
import ApplyNow from "./pages/ApplyNow";
import BookCall from "./pages/BookCall";
import FreeWebinar from "./pages/FreeWebinar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/agent-opportunity" element={<AgentOpportunity />} />
          <Route path="/about-platform" element={<AboutPlatform />} />
          <Route path="/insurance-solutions" element={<InsuranceSolutions />} />
          <Route path="/apply-now" element={<ApplyNow />} />
          <Route path="/book-a-call" element={<BookCall />} />
          <Route path="/free-webinar" element={<FreeWebinar />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
