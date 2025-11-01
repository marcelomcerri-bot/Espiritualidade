import { LucideIcon } from "lucide-react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  gradient?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  gradient = "from-primary/10 to-accent/10",
}: FeatureCardProps) {
  return (
    <Link href={href}>
      <div
        className="block group h-full cursor-pointer"
        data-testid={`card-${title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <div className={`relative h-full rounded-3xl bg-gradient-to-br ${gradient} p-8 border border-card-border/30 shadow-lg hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative mb-6 inline-flex p-5 rounded-2xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm border border-primary/20 shadow-md group-hover:scale-105 transition-all duration-300">
            <Icon className="w-9 h-9 text-primary group-hover:text-accent transition-colors duration-300" />
          </div>
          
          <h3 className="relative font-serif text-2xl font-bold mb-4 text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          <p className="relative text-muted-foreground leading-relaxed mb-6 text-base">
            {description}
          </p>
          
          <div className="relative flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all duration-300">
            <span className="text-sm tracking-wide">EXPLORAR</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
}
