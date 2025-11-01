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
        <div className={`h-full rounded-2xl bg-gradient-to-br ${gradient} p-8 border-2 border-card-border/50 shadow-md hover:shadow-xl hover:border-primary/30 hover:-translate-y-2 transition-all duration-300`}>
          <div className="mb-6 inline-flex p-4 rounded-xl bg-background/60 border border-card-border/30">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          
          <h3 className="font-serif text-2xl font-semibold mb-3 text-foreground leading-tight">
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
            {description}
          </p>
          
          <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
            <span>Explorar</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
