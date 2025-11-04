import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Proposito from "@/pages/Proposito";
import Diario from "@/pages/Diario";
import Praticas from "@/pages/Praticas";
import Jornada from "@/pages/Jornada";
import MomentoDificil from "@/pages/MomentoDificil";
import MapaSentido from "@/pages/MapaSentido";
import MensagemAlma from "@/pages/MensagemAlma";
import Aprenda from "@/pages/Aprenda";
import Referencias from "@/pages/Referencias";
import Sobre from "@/pages/Sobre";
import TestGemini from "@/pages/test-gemini";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden w-full max-w-full">
      <Header />
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/proposito" component={Proposito} />
          <Route path="/diario" component={Diario} />
          <Route path="/praticas" component={Praticas} />
          <Route path="/jornada" component={Jornada} />
          <Route path="/momento-dificil" component={MomentoDificil} />
          <Route path="/mapa-sentido" component={MapaSentido} />
          <Route path="/mensagem-alma" component={MensagemAlma} />
          <Route path="/aprenda" component={Aprenda} />
          <Route path="/referencias" component={Referencias} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/test-gemini" component={TestGemini} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
