import { Quote } from "lucide-react";

interface QuoteCardProps {
  text: string;
  author?: string;
  className?: string;
}

export default function QuoteCard({ text, author, className = "" }: QuoteCardProps) {
  return (
    <div
      className={`relative p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-2 border-primary/20 shadow-xl overflow-hidden group ${className}`}
      data-testid="card-quote"
    >
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-700" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-all duration-700" />
      
      <div className="relative">
        <Quote className="w-16 h-16 text-primary/40 mb-6 group-hover:text-primary/60 transition-colors duration-500" />
        <p className="font-serif text-2xl lg:text-3xl italic leading-relaxed text-foreground mb-6 group-hover:text-primary transition-colors duration-500">
          "{text}"
        </p>
        {author && (
          <p className="text-base font-bold text-primary" data-testid="text-quote-author">
            — {author}
          </p>
        )}
      </div>
    </div>
  );
}
