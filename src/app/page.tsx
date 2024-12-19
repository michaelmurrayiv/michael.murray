import React from "react";
import ProfileSection from "@/components/Profile";
import Projects from "@/components/Projects";
import ContactInfo from "@/components/ContactInfo";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <section className="space-y-8">
      <ProfileSection />
      {/* <SocialLinks /> */}
      <Projects />
      {/* <Education/> */}
      <Certifications/> 
      <ContactInfo />
    </section>
  );
}
