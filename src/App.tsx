import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/MainLayout";
import { LuxuryLanding } from "./pages/Landing/landing";
import { CollectionPage } from "./pages/collection";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LuxuryLanding />} />
          <Route path="/collection" element={<CollectionPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
