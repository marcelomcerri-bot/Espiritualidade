import { Quote } from "lucide-react";

interface QuoteCardProps {
  text: string;
  author?: string;
  className?: string;
}

export default function QuoteCard({ text, author, className = "" }: QuoteCardProps) {
  return (
    <div
      className={`relative p-8 rounded-3xl bg-gradient-to-br from-accent/10 to-primary/10 border border-card-border ${className}`}
      data-testid="card-quote"
    >
      <Quote className="w-12 h-12 text-primary/30 mb-4" />
      <p className="font-serif text-xl lg:text-2xl italic leading-relaxed text-foreground mb-4">
        "{text}"
      </p>
      {author && (
        <p className="text-sm font-medium text-muted-foreground" data-testid="text-quote-author">
          — {author}
        </p>
      )}
    </div>
  );
}
