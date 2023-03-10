import { Benefits } from "./Benefits/Benefits"
import { HeroComponent } from "./Hero/HeroComponent"
import { HowItWorks } from "./HowItWorks/HowItWorks"

export const Home = () => {
  return (
    <>
      <HeroComponent />
      <Benefits />
      <HowItWorks />
    </>

  )
}