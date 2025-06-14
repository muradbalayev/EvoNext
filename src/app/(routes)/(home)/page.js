import Hero from "@/components/home/Hero";
import HomeCourses from "@/components/home/HomeCourses";
import { FeatureSteps } from "@/components/ui/feature-section";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export default function Home() {

  const features = [
    { 
      step: 'Step 1', 
      title: 'Learn the Basics',
      content: 'Start your Web3 journey by learning the basics of blockchain.', 
      image: 'https://histudy.pixcelsthemes.com/livepreview/histudy/assets/images/course/course-01.jpg' 
    },
    { 
      step: 'Step 2',
      title: 'Deep Dive',
      content: 'Dive deep into blockchain fundamentals and smart contract development.',
      image: 'https://histudy.pixcelsthemes.com/livepreview/histudy/assets/images/course/course-online-02.jpg'
    },
    { 
      step: 'Step 3',
      title: 'Build Projects',
      content: 'Graduate with hands-on Web3 experience through building decentralized applications.',
      image: 'https://histudy.pixcelsthemes.com/livepreview/histudy/assets/images/course/course-online-03.jpg'
    },
  ]
  

  return (
   <main>
    <Hero/>
    <FeatureSteps 
      features={features}
      title="Your Journey Starts Here"
      autoPlayInterval={4000}
      imageHeight="h-[500px]"/>
    <HomeCourses/>
    <StaggerTestimonials/>
   </main>
  );
}
