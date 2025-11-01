import VideoPlayer from '../VideoPlayer'

export default function VideoPlayerExample() {
  return (
    <div className="p-8 max-w-2xl">
      <VideoPlayer
        videoId="inpok4MKVLM"
        title="Meditação Guiada para Paz Interior"
        description="Prática de meditação mindfulness para cultivar presença e serenidade."
        reference="Canal Mindful Peace. Disponível em: https://www.youtube.com/watch?v=inpok4MKVLM"
      />
    </div>
  )
}
