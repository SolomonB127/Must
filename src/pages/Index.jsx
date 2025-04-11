import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import SubIntro from '../components/SubIntro'
import CEO from '../components/CEO'
import Activities from '../components/Activities'

const Index = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <Intro />
            <SubIntro />
            <CEO />
            <Activities />
        </main>
    )
}

export default Index