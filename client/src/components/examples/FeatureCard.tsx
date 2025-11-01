import FeatureCard from '../FeatureCard'
import { Compass } from 'lucide-react'

export default function FeatureCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <FeatureCard
        icon={Compass}
        title="Descobrir Meu Propósito"
        description="Questionário interativo baseado em Logoterapia para identificar seus valores essenciais e propósito de vida."
        href="/proposito"
      />
    </div>
  )
}
