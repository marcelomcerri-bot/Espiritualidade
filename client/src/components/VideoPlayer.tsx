import { useState } from "react";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  videoId: string;
  title: string;
  description?: string;
  reference: string;
}

export default function VideoPlayer({
  videoId,
  title,
  description,
  reference,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="space-y-3" data-testid={`video-${videoId}`}>
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted group">
        {!isPlaying ? (
          <div
            className="absolute inset-0 cursor-pointer flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20"
            onClick={() => setIsPlaying(true)}
          >
            <div className="bg-background/90 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform shadow-xl">
              <Play className="w-12 h-12 text-primary fill-primary" />
            </div>
          </div>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        )}
      </div>
      
      <div>
        <h4 className="font-medium text-foreground mb-1" data-testid="text-video-title">
          {title}
        </h4>
        {description && (
          <p className="text-sm text-muted-foreground mb-2" data-testid="text-video-description">
            {description}
          </p>
        )}
        <p className="text-xs text-muted-foreground italic" data-testid="text-video-reference">
          Fonte: {reference}
        </p>
      </div>
    </div>
  );
}
