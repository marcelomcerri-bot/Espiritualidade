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
      <a
        className="block group h-full"
        data-testid={`card-${title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <div className={`h-full rounded-3xl bg-gradient-to-br ${gradient} p-8 border border-card-border shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover-elevate`}>
          <div className="mb-6 inline-block p-4 rounded-2xl bg-background/50">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          
          <h3 className="font-serif text-2xl font-medium mb-3 text-foreground">
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            {description}
          </p>
          
          <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
            <span>Explorar</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </a>
    </Link>
  );
}
