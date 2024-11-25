import { useState, useCallback } from "react";
import { fetchClips } from "../services/api";
import { Category, Clip } from "../components/molecules";

export const useFetchData = ({
  favoriteTeam,
  followedTeams,
  followedPlayers,
}: {
  favoriteTeam: string | null;
  followedTeams: string[];
  followedPlayers: string[];
}) => {
  const [data, setData] = useState<{ clips: Clip[] }>({ clips: [] });
  const [teamSuggestions, setTeamSuggestions] = useState<
    { label: string; value: string }[]
  >([]);
  const [playerSuggestions, setPlayerSuggestions] = useState<
    { label: string; value: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    try {
      const params = {
        "userAttributes[favoriteTeam]": favoriteTeam || undefined,
        "userAttributes[followedTeams]": followedTeams.join(",") || undefined,
        "userAttributes[followedPlayers]":
          followedPlayers.join(",") || undefined,
      };

      const [result] = await Promise.all([fetchClips(params), delay(2000)]);

      const teamMap = new Map();
      const playerMap = new Map();

      result.clips.forEach((clip: Clip) => {
        clip.clipCategories.forEach((category: Category) => {
          if (category.type === "team") {
            teamMap.set(category.externalId, {
              label: category.displayTitle,
              value: category.externalId,
            });
          }
          if (category.type === "player") {
            playerMap.set(category.externalId, {
              label: category.displayTitle,
              value: category.externalId,
            });
          }
        });
      });

      setTeamSuggestions(Array.from(teamMap.values()));
      setPlayerSuggestions(Array.from(playerMap.values()));
      setData(result);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(String(err));
      }
    } finally {
      setLoading(false);
    }
  }, [favoriteTeam, followedTeams, followedPlayers]);

  return {
    data,
    teamSuggestions,
    playerSuggestions,
    error,
    loading,
    fetchData,
  };
};
