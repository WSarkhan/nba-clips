export interface Category {
  type: string;
  displayTitle: string;
  externalId: string;
}

export interface Clip {
  id: string;
  description: string;
  thumbnailUrl: string;
  url: string;
  duration: number;
  likeCountDisplay: string;
  shareCountDisplay: string;
  clipCategories: Category[];
  deepLink: string;
}

export interface ClipCardProps {
  clip: Clip;
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
  onClick: (id: string) => void;
  hoveredClipId: string | null;
  onShare: (url: string) => void;
}

export const ClipCard = ({
  clip,
  onMouseEnter,
  onMouseLeave,
  onClick,
  hoveredClipId,
  onShare,
}: ClipCardProps) => {
  return (
    <li
      className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
      onMouseEnter={() => onMouseEnter(clip.id)}
      onMouseLeave={onMouseLeave}
      onClick={() => onClick(clip.id)}
    >
      <div className="h-[660px]">
        {hoveredClipId === clip.id ? (
          <video
            src={clip.url}
            muted
            autoPlay
            playsInline
            loop
            controls
            controlsList="nodownload"
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        ) : (
          <img
            src={clip.thumbnailUrl}
            alt={clip.description}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        )}
      </div>
      <div className="absolute top-4 left-4 text-xl font-bold">
        {clip.description}
      </div>
      {hoveredClipId !== clip.id && (
        <div className="absolute bottom-4 left-4 text-gray-300">
          {clip.duration}s
        </div>
      )}
      <div className="absolute bottom-20 right-0 flex flex-col items-center gap-4 p-1">
        <div className="flex-col flex items-center gap-1">
          <span className="material-icons text-red-800">favorite</span>
          <span>{clip.likeCountDisplay}</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onShare(clip.deepLink);
          }}
          className="flex-col flex items-center gap-1 text-white hover:text-blue-400 transition"
        >
          <span className="material-icons">share</span>
          <span>{clip.shareCountDisplay}</span>
        </button>
      </div>
    </li>
  );
};
