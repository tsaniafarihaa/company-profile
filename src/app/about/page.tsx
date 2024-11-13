import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
        
        {/* Company History Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">Our History</h2>
          <p className="text-lg mb-4">
            Founded in 2010, our company has been at the forefront of innovation in the tech industry. 
            We started as a small startup with a big vision: to revolutionize the way people interact with technology.
          </p>
          <p className="text-lg">
            Over the years, we&#39;ve grown from a team of 5 to over 200 employees, with offices in major tech hubs around the world. 
            Our commitment to excellence and user-centric design has led us to develop award-winning products used by millions.
          </p>
        </section>
        
        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white text-black p-6 rounded-lg shadow-lg">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={200} 
                  height={200} 
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.title}</p>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Culture Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">Our Culture</h2>
          <p className="text-lg mb-4">
            At our core, we believe in fostering a culture of innovation, collaboration, and continuous learning. 
            We encourage our team members to think outside the box, take risks, and push the boundaries of what&#39;s possible.
          </p>
          <p className="text-lg mb-4">
            Our values include:
          </p>
          <ul className="list-disc list-inside text-lg mb-4 space-y-2">
            <li>Passion for excellence</li>
            <li>User-centric approach</li>
            <li>Embracing diversity and inclusion</li>
            <li>Commitment to sustainability</li>
            <li>Continuous learning and growth</li>
          </ul>
          <p className="text-lg">
            We believe that by nurturing a positive and inclusive work environment, we can bring out the best in our team 
            and deliver exceptional products and services to our customers.
          </p>
        </section>
      </main>
    </div>
  )
}

const teamMembers = [
  {
    name: "Jane Doe",
    title: "CEO & Founder",
    description: "With over 15 years of experience in the tech industry, Jane leads our company with vision and passion.",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "John Smith",
    title: "CTO",
    description: "John is the technical mastermind behind our innovative products, with a keen eye for emerging technologies.",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Emily Brown",
    title: "Head of Design",
    description: "Emily brings creativity and user-centric design principles to every project, ensuring our products are both beautiful and functional.",
    image: "/placeholder.svg?height=200&width=200"
  }
]
