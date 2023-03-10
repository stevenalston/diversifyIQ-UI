import { nanoid } from "nanoid"

const steps = [
  {
    id: nanoid(),
    image: 'http://via.placeholder.com/480x360',
    title: 'Passion',
    description: "Experiences vinegar same iPhone, 90's marxism adaptogen messenger bag. Next level glossier jianbing meditation lo-fi ramps blog deep v. Bushwick franzen celiac hella palo santo asymmetrical ugh af, shaman yr drinking vinegar keytar cliche poke.",
  },
  {
    id: nanoid(),
    image: 'http://via.placeholder.com/480x360',
    title: 'Growth Mindset',
    description: "Selfies retro plaid snackwave lomo tofu. Whatever hexagon single-origin coffee waistcoat plaid fingerstache affogato helvetica blue bottle mukbang cupping 3 wolf moon. Selvage direct trade twee unicorn forage venmo post-ironic lo-fi",
  },
  {
    id: nanoid(),
    image: 'http://via.placeholder.com/480x360',
    title: 'Culturally Aware Curriculum',
    description: "Authentic viral flannel salvia, occupy hot chicken stumptown. Taiyaki locavore yes plz, tote bag pour-over wayfarers next level etsy hella big mood ramps austin.",
  },
  {
    id: nanoid(),
    image: 'http://via.placeholder.com/480x360',
    title: 'Contribution',
    description: "Unicorn chia 90's actually pabst DSA kickstarter bushwick. Gorpcore kitsch yes plz post-ironic pop-up. Hella iceland asymmetrical DSA. Tonx locavore paleo squid mukbang selvage plaid biodiesel.",
  },
]

export const HowItWorks = () => {
  return (
    <article className="px-8 py-12 flex flex-col bg-teal-100 bg-gradient-to-r from-purple-100 to-teal-50">
      <div className="w-2/3 mx-auto">
        <h2 className="w-1/3 mx-auto pb-2 pt-8 text-2xl px-12 border-b-[0.5px] border-iqblack-800 text-center text-iqblack-900 font-medium">How It Works</h2>
        <p className="text-sm pt-3 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit dignissimos praesentium facere.</p>
        <section className="mt-12">
          {steps.map((step, idx) => (
            <div className="flex justify-between items-center mb-12">
              <figure className={`${idx % 2 !== 0 ? "order-2" : ""} flex items-center w-1/2`}>
                <div className="rounded-full p-5 text-4xl bg-iqgold-300 text-iqblack-800 mx-4 font-bold">{`0${idx + 1}`}</div>
                <img className="w-full" src={step.image} alt={`${step.title}`}></img>
              </figure>
              <section className={`${idx % 2 !== 0 ? "order-1" : ""} w-1/3`}>
                <h3 className="text-xl font-semibold font-display">{step.title}</h3>
                <p className="flex-1 w-full">
                  {step.description}
                </p>
              </section>
            </div>
          ))}
        </section>
      </div>
    </article>
  )
}