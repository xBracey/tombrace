import { Route } from "wouter";
import { Page } from "./components/Page";
import { Home } from "./pages";

function App() {
  return (
    <Page>
      <Route path="/">
        <Home />
      </Route>
    </Page>
  );
}

export default App;
