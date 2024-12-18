import React from "react";
import ProfileSection from "@/components/Profile";
import SocialLinks from "@/components/SocialLinks";
import Projects from "@/components/Projects";
import ContactInfo from "@/components/ContactInfo";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <section className="space-y-6">
      <ProfileSection />
      <SocialLinks />
      <Projects />
      <Education/>
      <Certifications/> 
      <ContactInfo />
    </section>
  );
}
