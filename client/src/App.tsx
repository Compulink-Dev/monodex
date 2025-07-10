// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Layout } from "@/components/Layout";
import { HomePage } from "./pages/Home";
import { ProjectsPage } from "./pages/Project";
import { DesignsPage } from "./pages/Design";
import { ContactPage } from "./pages/Contact";
import { NotFoundPage } from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* Parent layout route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="designs" element={<DesignsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
