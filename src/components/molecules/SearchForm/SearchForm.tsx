import { SelectInput } from "../../atoms";
import { MultiValue, SingleValue } from "react-select";

interface SearchFormProps {
  teamSuggestions: { label: string; value: string }[];
  playerSuggestions: { label: string; value: string }[];
  favoriteTeam: string | null;
  followedTeams: string[];
  followedPlayers: string[];
  onSubmit: () => void;
  onFavoriteTeamChange: (value: string | null) => void;
  onFollowedTeamsChange: (values: string[]) => void;
  onFollowedPlayersChange: (values: string[]) => void;
  isLoading: boolean;
}

export const SearchForm = ({
  teamSuggestions,
  playerSuggestions,
  favoriteTeam,
  followedTeams,
  followedPlayers,
  onSubmit,
  onFavoriteTeamChange,
  onFollowedTeamsChange,
  onFollowedPlayersChange,
}: SearchFormProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-4">Search Clips</h2>
      <div className="flex flex-col gap-4">
        <SelectInput
          options={teamSuggestions}
          value={
            teamSuggestions.find((team) => team.value === favoriteTeam) || null
          }
          onChange={(option) =>
            onFavoriteTeamChange(
              (option as SingleValue<{ label: string; value: string }>)
                ?.value || null
            )
          }
          placeholder="Favorite Team"
          isClearable
        />
        <SelectInput
          options={teamSuggestions}
          value={teamSuggestions.filter((team) =>
            followedTeams.includes(team.value)
          )}
          onChange={(options) =>
            onFollowedTeamsChange(
              (options as MultiValue<{ label: string; value: string }>).map(
                (opt) => opt.value
              )
            )
          }
          placeholder="Followed Teams"
          isMulti
        />
        <SelectInput
          options={playerSuggestions}
          value={playerSuggestions.filter((player) =>
            followedPlayers.includes(player.value)
          )}
          onChange={(options) =>
            onFollowedPlayersChange(
              (options as MultiValue<{ label: string; value: string }>).map(
                (opt) => opt.value
              )
            )
          }
          placeholder="Followed Players"
          isMulti
        />
      </div>
    </form>
  );
};
