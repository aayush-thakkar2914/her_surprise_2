import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reasons from "./pages/Reasons";
import Timeline from "./pages/Timeline";
import Letter from "./pages/Letter";
import Gift from "./pages/Gift";
import Moments from "./pages/Moments";
import PhotosGallery from "./pages/PhotosGallery";
import VirtualDatesGallery from "./pages/VirtualDatesGallery";
import BirthdayGallery from "./pages/BirthdayGallery";
import Cuteness from "./pages/Cuteness";
import Dreams from "./pages/Dreams";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import FloatingHearts from "./components/FloatingHearts";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <FloatingHearts />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reasons" element={<Reasons />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/moments" element={<Moments />} />
          <Route path="/photos-gallery" element={<PhotosGallery />} />
          <Route path="/virtual-dates-gallery" element={<VirtualDatesGallery />} />
          <Route path="/birthday-gallery" element={<BirthdayGallery />} />
          <Route path="/cuteness" element={<Cuteness />} />
          <Route path="/dreams" element={<Dreams />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
