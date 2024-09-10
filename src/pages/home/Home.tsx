import '../../styles/utility.css'
import Header from '../header/Header'
import Hero from '../hero/Hero'
import Solution from '../solution/Solution'
import Testimonial from '../testimonial/Testimonial'
import Pricing from '../pricing/Pricing'
import Contact from '../contact/Contact'

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Solution/>
            <Testimonial />
            <Pricing />
            <Contact />
        </>
    )
}
 