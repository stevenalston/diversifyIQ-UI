import { nanoid } from 'nanoid';

const benefits = [
  {
    id: nanoid(),
    title: 'Build Community',
    description: 'Consectetur adipisicing elit. Laborum vero quod sit officiis iste, accusamus ex quas fugit!',
    benefitImage: 'https://placeholder.com/125/125/tech',
    bg: 'bg-peach-200 bg-gradient-to-t from-peach-200 to-peach-300',
  },
  {
    id: nanoid(),
    title: 'Mastery-based Training ',
    description: 'Aperiam architecto eius nesciunt in laboriosam sapiente quibusdam tempora explicabo earum voluptatum.',
    benefitImage: 'https://placeholder.com/125/125/tech',
    bg: 'bg-peach-200 bg-gradient-to-t from-tan-200 to-peach-tan',
  },
  {
    id: nanoid(),
    title: 'Learn How to Learn',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum vero quod sit officiis iste.',
    benefitImage: 'https://placeholder.com/125/125/tech',
    bg: 'bg-peach-200 bg-gradient-to-t from-palemint-200 to-palemint-300',
  },
  {
    id: nanoid(),
    title: 'Growth Mindset',
    description: 'Adipisicing elit. Laborum vero quod sit officiis iste. Fugit ex quas accusamus earum tempora sit sapiente.',
    benefitImage: 'https://placeholder.com/125/125/tech',
    bg: 'bg-peach-200 bg-gradient-to-t from-mint-200 to-mint-300',
  },
]

export const Benefits = () => {
  return (
    <article className='flex justify-between bg-gradient-to-r from-peach-200 via-tan-300 to-mint-300'>
      {benefits.map(benefit => (
        <section className="w-1/4 m-6 mt-12 px-12 py-20 shadow-2xl">
          <h3 className='text-iqteal-800 text-lg tracking-wide font-semibold mb-2'>{benefit.title}</h3>
          <p>{benefit.description}</p>
        </section>
      ))}
    </article>
  )
}