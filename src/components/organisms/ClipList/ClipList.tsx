import { Clip, ClipCard } from "../../molecules";

interface ClipListProps {
  clips: Clip[];
  hoveredClipId: string | null;
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
  onClick: (id: string) => void;
  onShare: (url: string) => void;
}

export const ClipList = ({
  clips,
  hoveredClipId,
  onMouseEnter,
  onMouseLeave,
  onClick,
  onShare,
}: ClipListProps) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {clips.map((clip) => (
        <ClipCard
          key={clip.id}
          clip={clip}
          hoveredClipId={hoveredClipId}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
          onShare={onShare}
        />
      ))}
    </ul>
  );
};
