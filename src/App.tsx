import AppLayout from "./layout/AppLayout";
import AppProviders from "./providers/AppProviders";

function App() {
  return (
    <AppProviders>
      <AppLayout />
    </AppProviders>
  );
}

export default App;
