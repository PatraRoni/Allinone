// Hero.jsx
import React, { useState } from 'react'
import NavBar from '../component1/Navbar'
import ServicesGrid from '../component1/ServicesGrid'
import MobileFooter from '../component1/MobileFooter'

const Hero = () => {
  // initialize active (use a sensible default key used by your MobileFooter)
  // If your MobileFooter uses different keys, replace 'home' with the proper default.
  const [active, setActive] = useState(true)

  return (
    <div>
      <NavBar />
      <ServicesGrid />

      {/* ensure page content has bottom padding so footer doesn't overlap */}
      <div className="min-h-screen pb-16">
        {/* ...page content... */}
        {/* pass state + setter to the footer */}
        <MobileFooter active={active} onChange={setActive} />
      </div>
    </div>
  )
}

export default Hero
