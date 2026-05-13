import "./styles/globals.scss";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
