import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Cost from '@/components/sections/Cost'
import Proposal from '@/components/sections/Proposal'
import Process from '@/components/sections/Process'
import Agents from '@/components/sections/Agents'
import Team from '@/components/sections/Team'
import Qualifier from '@/components/sections/Qualifier'
import LeadForm from '@/components/sections/LeadForm'
import Manifesto from '@/components/sections/Manifesto'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Cost />
      <Proposal />
      <Process />
      <Agents />
      <Team />
      <Qualifier />
      <LeadForm />
      <Manifesto />
    </main>
  )
}
