import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedSection from "../components/FeaturedSection";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Home() {
  const navigate = useNavigate();

  // Signout
  const handleSignOut = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("auth");
      navigate("/");
    });
  };

  // Articles data
  const featuredArticles = [
    {
      title: "Tech startup growth background with digital screens and analytics.",
      description:
        "Exploring how tech startups leverage data, analytics, and digital innovation to accelerate growth in a competitive landscape.",
      author: "Sami",
      image:
        "https://t3.ftcdn.net/jpg/14/01/52/68/360_F_1401526894_SDNthMhapML2qVBEyXJ0BwESjnrFLoie.jpg",
      rating: 5,
    },
    {
      title: "CODE Magazine - NovemberDecember 2024",
      description:
        "The document discusses the integration of artificial intelligence (AI) in business and software development",
      author: "James",
      image:
        "https://imgv2-2-f.scribdassets.com/img/document/827394705/298x396/15684321e7/1739401168?v=1",
      rating: 4,
    },
    {
      title: "Building AI pipelines",
      description:
        "It highlights the evolution of technology over the past five years, particularly in relation to AI.",
      author: "Albert",
      image:
        "https://imgv2-2-f.scribdassets.com/img/document/816557817/original/6ba9ac6674/1?v=1",
      rating: 3,
    },
  ];

  // Tutorials data
  const featuredTutorials = [
    {
      title: "HTML",
      description: "It is used in front end development",
      image:
        "https://t3.ftcdn.net/jpg/05/78/11/34/360_F_578113446_j72wZX7u698eoV50XXmkLMH7gGuNhpVB.jpg",
      rating: 4,
    },
    {
      title: "CSS",
      description: "Designing the website",
      image:
        "https://img.freepik.com/premium-vector/css-3-minimal-flat-logo-design_582637-693.jpg",
      rating: 3,
    },
    {
      title: "JavaCript",
      description: "It is used in the full stack",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs4tOEjwgo-HNDRf2v01BFOw1hV7JEHyIm_Q&s",
      rating: 4.9,
    },
  ];

  return (
    <div className="page-root">
      <Header />
      <Hero />

      <main>
        <FeaturedSection title="Featured Articles" items={featuredArticles} />
        <FeaturedSection title="Featured Tutorials" items={featuredTutorials} />
      </main>

      <Footer />

      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
