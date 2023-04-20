import "./App.css";

import { QueryClient, QueryClientProvider } from "react-query";

import Pod from "./pages/Pod";
import React from "react";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Pod />
      </div>
    </QueryClientProvider>
  );
}

export default App;
