import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPlatform from "./pages/AboutPlatform";
import AgentOpportunity from "./pages/AgentOpportunity";
import ApplyNow from "./pages/ApplyNow";
import BookCall from "./pages/BookCall";
import FreeWebinar from "./pages/FreeWebinar";
import Index from "./pages/Index";
import InsuranceSolutions from "./pages/InsuranceSolutions";
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
          <Route path="/ApplyNow" element={<ApplyNow />} />
          <Route path="/BookCall" element={<BookCall />} />
          <Route path="/AgentOpportunity" element={<AgentOpportunity />} />
          <Route path="/AboutPlatform" element={<AboutPlatform />} />
          <Route path="/InsuranceSolutions" element={<InsuranceSolutions />} />
          <Route path="/FreeWebinar" element={<FreeWebinar />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
