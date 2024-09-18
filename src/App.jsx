import React, { useState } from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Router from "./routes";
import ScrollReset from "./components/ScrollReset/ScrollReset";
import { SnackbarProvider } from "notistack";

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <SnackbarProvider
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        <ErrorBoundary>
          <Router />
          <ScrollReset />
        </ErrorBoundary>
      </SnackbarProvider>

    </React.Fragment>
  );
}

export default App;
