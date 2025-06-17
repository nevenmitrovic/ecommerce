import './about-us-container.style.css'
import ecommerceModel from '@/assets/images/ecommerce-model.png'

const AboutUsContainer = () => {
	return (
		<div className='about-container'>
			<div className='about-text'>
				<h3>ABOUT THE BRAND</h3>

				<p>
					The brand dates back to 2020, when Artem Gribachev (without a design education) created a
					down jacket that was eventually adopted by all the capital's fashionistas and influencers.
					Many of them still have outerwear from the F | ABLE brand in their wardrobes.
				</p>

				<p>
					In 2024, the brand took a new direction — rebranding and a new identity. Research culture,
					experiments, functionality and accessibility — this is what defines the brand now.
				</p>

				<p>
					Each of our collections is the result of careful experiments with fabrics, textures and
					cuts. We collaborate with leading fashion artists, creating a community of free-thinking
					and creatively ambitious people.
				</p>

				<p>
					Our range includes premium products developed with a multidisciplinary approach to design.
					In our own laboratory, we control every stage of production, achieving impeccable quality
					and the perfect embodiment of our ideas.
				</p>

				<p>
					This year, the brand released its first women's capsule. For F | ABLE is a challenge and a
					bold step — previously only unisex items were produced.
				</p>

				<p>
					The line actively worked with the technique of draping and tucks to achieve complex
					silhouettes, while maintaining the plasticity of fabrics. Some of the most unusual items
					for the brand are a leather dress, a leather bodysuit and tight-fitting women's sit-ups.
				</p>

				<p>Visit our DROP 002 section to get to know the new items closer.</p>

				<p className='signature'>With love, the F | ABLE team</p>
			</div>
			<img src={ecommerceModel} alt='chat gpt human model for the online shop' />
		</div>
	)
}

export default AboutUsContainer
