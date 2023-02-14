import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Pod from './pages/Pod';
import './App.css';

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
