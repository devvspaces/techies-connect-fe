import Head from "next/head";
import HeroComponent from "@/components/pages/index/hero";
import OurStory from "@/components/pages/index/story";
import FeaturesComponents from "@/components/pages/index/features";
import BasicStatistics from "@/components/pages/index/stats";

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>TechiePool - Find any techie around you</title>
      </Head>

      <HeroComponent />
      <OurStory />
      <BasicStatistics />
      <FeaturesComponents />
    </>
  );
}
