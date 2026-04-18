import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import WhatIs from '@/components/sections/WhatIs'
import Learnings from '@/components/sections/Learnings'
import Principle from '@/components/sections/Principle'
import Process from '@/components/sections/Process'
import Agents from '@/components/sections/Agents'
import Metrics from '@/components/sections/Metrics'
import LeadForm from '@/components/sections/LeadForm'
import Manifesto from '@/components/sections/Manifesto'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <WhatIs />
      <Learnings />
      <Principle />
      <Process />
      <Agents />
      <Metrics />
      <LeadForm />
      <Manifesto />
    </main>
  )
}
