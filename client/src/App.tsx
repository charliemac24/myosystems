import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RouteRedirect } from "@/components/route-redirect";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import ProductsPage from "@/pages/products";
import AttendanceMonitoringSmsAlertsPage from "@/pages/product-attendance-monitoring-sms-alerts";
import MarginGuardQuoteEnginePage from "@/pages/product-margin-guard-quote-engine";
import BlogPage from "@/pages/blog";
import BlogArticlePage from "@/pages/blog-article";
import { SchoolsAttendanceCategoryPage, FabricationQuotingCategoryPage } from "@/pages/blog-category";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/product">
        <RouteRedirect to="/products" />
      </Route>
      <Route path="/products" component={ProductsPage} />
      <Route path="/products/attendance-monitoring-sms">
        <RouteRedirect to="/products/attendance-monitoring-sms-alerts" />
      </Route>
      <Route path="/products/attendance-monitoring-sms-alerts" component={AttendanceMonitoringSmsAlertsPage} />
      <Route path="/products/margin-guard-quote-engine" component={MarginGuardQuoteEnginePage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/category/schools-attendance-sms" component={SchoolsAttendanceCategoryPage} />
      <Route path="/blog/category/fabrication-quoting-margin-control" component={FabricationQuotingCategoryPage} />
      <Route path="/blog/:slug" component={BlogArticlePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
