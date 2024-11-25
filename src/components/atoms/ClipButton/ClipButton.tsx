interface Props {
  icon: string;
  label: string;
  onClick?: () => void;
  isButton?: boolean;
}

export const ClipButton = ({
  icon,
  label,
  onClick,
  isButton = true,
}: Props) => {
  return isButton ? (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 text-white transition hover:text-blue-400"
    >
      <span className="material-icons">{icon}</span>
      <span>{label}</span>
    </button>
  ) : (
    <div
      onClick={onClick}
      className="flex flex-col items-center gap-1 text-red-500 "
    >
      <span className="material-icons">{icon}</span>
      <span>{label}</span>
    </div>
  );
};
