import { Clip } from "../clip";

export interface ClipCardProps {
  clip: Clip;
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
  onClick: (id: string) => void;
  hoveredClipId: string | null;
  onShare: (url: string) => void;
}
