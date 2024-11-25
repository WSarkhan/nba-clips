import { SelectInput } from "../../atoms";
import { MultiValue, SingleValue } from "react-select";

interface Suggestion {
  label: string;
  value: string;
}

interface SearchFormProps {
  teamSuggestions: Suggestion[];
  playerSuggestions: Suggestion[];
  favoriteTeam: string | null;
  followedTeams: string[];
  followedPlayers: string[];
  onFavoriteTeamChange: (value: string | null) => void;
  onFollowedTeamsChange: (values: string[]) => void;
  onFollowedPlayersChange: (values: string[]) => void;
}

export const SearchBar = ({
  teamSuggestions,
  playerSuggestions,
  favoriteTeam,
  followedTeams,
  followedPlayers,
  onFavoriteTeamChange,
  onFollowedTeamsChange,
  onFollowedPlayersChange,
}: SearchFormProps) => {
  return (
    <div className="max-w-lg p-6 mx-auto mb-8 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-semibold">Search Clips</h2>
      <div className="flex flex-col gap-4">
        <SelectInput
          options={teamSuggestions}
          value={
            teamSuggestions.find((team) => team.value === favoriteTeam) || null
          }
          onChange={(option) =>
            onFavoriteTeamChange(
              (option as SingleValue<Suggestion>)?.value || null
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
              (options as MultiValue<Suggestion>).map((opt) => opt.value)
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
              (options as MultiValue<Suggestion>).map((opt) => opt.value)
            )
          }
          placeholder="Followed Players"
          isMulti
        />
      </div>
    </div>
  );
};
