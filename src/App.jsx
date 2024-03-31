import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import NotFound from "./pages/shared/NotFound";
import Loader from "./pages/shared/Loader";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./pages/shared/Navbar";
import Footer from "./pages/shared/Footer";
import BlogDetail from "./pages/Blog/BlogDetail";
import Achievement from "./pages/About/Achievement";
import Userboard from "./pages/Contact/Userboard";
import BlogCard from "./pages/Blog/BlogCard";
import { allMusicDetailsData } from "../src/pages/Blog/MusicJson";
import Paypal from "./pages/Blog/PayPal";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Project = React.lazy(() => import("./pages/Project/Project"));

function App() {
  const location = useLocation();
  const isFalse = location.pathname.includes("404");
  return (
    <>
      <ScrollToTop />
      {isFalse || <Navbar />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          //
          <Route path="/" element={<Achievement />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/music" element={<BlogCard />} />
          <Route
            path="/blog/:id"
            element={<BlogDetail blogData={allMusicDetailsData} />}
          />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />}></Route>
        </Routes>
      </Suspense>
      {isFalse || <Footer />}
    </>
  );
}

export default App;
