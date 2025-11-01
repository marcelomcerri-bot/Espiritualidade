import { ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";

interface ReferenceItemProps {
  citation: string;
  type: "Artigo" | "Livro" | "Vídeo" | "PDF";
  url?: string;
}

export default function ReferenceItem({ citation, type, url }: ReferenceItemProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const typeColors = {
    Artigo: "bg-primary/10 text-primary",
    Livro: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
    Vídeo: "bg-chart-2/10 text-chart-2",
    PDF: "bg-muted text-muted-foreground",
  };

  return (
    <div
      className="p-6 rounded-xl bg-card border border-card-border hover-elevate transition-all"
      data-testid={`reference-${type.toLowerCase()}`}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[type]}`}
          data-testid="badge-reference-type"
        >
          {type}
        </span>
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="p-2 rounded-lg hover-elevate text-muted-foreground hover:text-foreground transition-colors"
            title="Copiar referência"
            data-testid="button-copy-reference"
          >
            {copied ? (
              <Check className="w-4 h-4 text-primary" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover-elevate text-muted-foreground hover:text-foreground transition-colors"
              title="Abrir link"
              data-testid="link-reference-external"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      <p className="text-sm leading-relaxed text-foreground" data-testid="text-reference-citation">
        {citation}
      </p>
    </div>
  );
}
