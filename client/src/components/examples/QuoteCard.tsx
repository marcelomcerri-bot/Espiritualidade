import QuoteCard from '../QuoteCard'

export default function QuoteCardExample() {
  return (
    <div className="p-8 max-w-2xl">
      <QuoteCard
        text="Quem tem um porquê para viver pode suportar quase qualquer como."
        author="Viktor Frankl"
      />
    </div>
  )
}
