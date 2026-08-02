import { useEffect, useState } from "react";
import { ThemeProvider } from "./lib/theme";
import { RouterProvider, useRouter } from "./lib/router";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { FloatingActions } from "./components/layout/FloatingActions";
import { CookieConsent } from "./components/layout/CookieConsent";
import { PageLoader } from "./components/layout/PageLoader";
import { MobileBookingBar } from "./components/layout/MobileBookingBar";
import { CustomCursor } from "./components/layout/CustomCursor";
import HomePage from "./pages/HomePage";
import Booking from "./pages/Booking";
import Premium from "./pages/Premium";
import ServicesPage from "./pages/ServicesPage";
import UniversitiesPage from "./pages/UniversitiesPage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LegalPage from "./pages/LegalPage";
import { Faq } from "./components/sections/Faq";
import { SuccessStories } from "./components/sections/SuccessStories";

function Routes() {
  const { page } = useRouter();
  if (page === "/booking") return <Booking />;
  if (page === "/premium") return <Premium />;
  if (page === "/services") return <ServicesPage />;
  if (page === "/universities") return <UniversitiesPage />;
  if (page === "/blog") return <BlogPage />;
  if (page === "/about") return <AboutPage />;
  if (page === "/contact") return <ContactPage />;
  if (page === "/privacy") return <LegalPage page="privacy" />;
  if (page === "/terms") return <LegalPage page="terms" />;
  if (page === "/imprint") return <LegalPage page="imprint" />;
  if (page === "/faq") return <Faq />;
  if (page === "/successstories") return <SuccessStories />;
  return <HomePage />;
}

function Inner() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <CustomCursor />
      {loading && <PageLoader />}
      <Navbar />
      <Routes />
      <Footer />
      <FloatingActions />
      <CookieConsent />
      <MobileBookingBar />
      <div className="h-16 lg:hidden" aria-hidden />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <Inner />
      </RouterProvider>
    </ThemeProvider>
  );
}
