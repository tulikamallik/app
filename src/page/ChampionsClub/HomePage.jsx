
import React from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import ExperiencesSection from "./components/ExperiencesSection/ExperiencesSection";
import StoriesSection from "./components/StoriesSection/StoriesSection";
import ReviewsSection from "./components/ReviewsSection/ReviewsSection";
import Footer from "./components/Footer";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <Navigation />
      <Hero />
      <ExperiencesSection />
      <StoriesSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}
