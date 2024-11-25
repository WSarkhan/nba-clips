import { ClipCardProps } from "../../../types";
import { ClipButton } from "../../atoms";

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
      className="relative overflow-hidden bg-gray-800 rounded-lg shadow-lg group"
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
            className="object-cover w-full h-full transition-opacity duration-300"
          />
        ) : (
          <img
            src={clip.thumbnailUrl}
            alt={clip.description}
            className="object-cover w-full h-full transition-opacity duration-300"
          />
        )}
      </div>
      <p className="absolute text-xl font-bold top-4 left-4">
        {clip.description}
      </p>
      {hoveredClipId !== clip.id && (
        <p className="absolute text-gray-300 bottom-4 left-4">
          {clip.duration}s
        </p>
      )}
      <div className="absolute right-0 flex flex-col items-center gap-4 p-1 bottom-20">
        <ClipButton
          icon="favorite"
          label={clip.likeCountDisplay}
          isButton={false}
        />
        <ClipButton
          icon="share"
          label={clip.shareCountDisplay}
          onClick={() => onShare(clip.deepLink)}
        />
      </div>
    </li>
  );
};
