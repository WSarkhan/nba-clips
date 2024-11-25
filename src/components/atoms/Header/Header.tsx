interface Props {
  headerText: string;
}

export const Header = ({ headerText }: Props) => {
  return (
    <div className="flex items-center justify-center mb-8">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/0/03/National_Basketball_Association_logo.svg"
        alt="NBA Logo"
        className="w-24 h-24"
      />
      <h1 className="text-4xl font-bold text-center">{headerText}</h1>
    </div>
  );
};
