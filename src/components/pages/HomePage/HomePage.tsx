import { useState, useEffect } from "react";
import { useFetchData } from "../../../hooks/useFetchData";
import { SearchBar } from "../../molecules";
import { ClipList } from "../../organisms/ClipList/ClipList";
import { BouncingLoader, Header, Toast } from "../../atoms";

export const HomePage = () => {
  const [favoriteTeam, setFavoriteTeam] = useState<string | null>(null);
  const [followedTeams, setFollowedTeams] = useState<string[]>([]);
  const [followedPlayers, setFollowedPlayers] = useState<string[]>([]);
  const [hoveredClipId, setHoveredClipId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const {
    data,
    teamSuggestions,
    playerSuggestions,
    error,
    loading,
    fetchData,
  } = useFetchData({
    favoriteTeam,
    followedTeams,
    followedPlayers,
  });

  const handleMouseEnter = (id: string) => setHoveredClipId(id);
  const handleMouseLeave = () => setHoveredClipId(null);
  const handleClipClick = (id: string) => {
    if (hoveredClipId === id) {
      setHoveredClipId(null);
    } else {
      setHoveredClipId(id);
    }
  };

  const handleShare = (url: string) => {
    navigator.clipboard.writeText(url);
    setToastMessage("Link copied to clipboard!");
    setTimeout(() => setToastMessage(null), 2000);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="min-h-screen p-3 pt-5 text-white bg-gray-900 md:p-6">
      <div className="container mx-auto">
        <Header headerText="NBA Clips Viewer" />
        <SearchBar
          teamSuggestions={teamSuggestions}
          playerSuggestions={playerSuggestions}
          favoriteTeam={favoriteTeam}
          followedTeams={followedTeams}
          followedPlayers={followedPlayers}
          onFavoriteTeamChange={setFavoriteTeam}
          onFollowedTeamsChange={setFollowedTeams}
          onFollowedPlayersChange={setFollowedPlayers}
        />
        {error && <p className="mb-6 text-center text-red-500">{error}</p>}
        {loading ? (
          <BouncingLoader />
        ) : (
          <ClipList
            clips={data.clips || []}
            hoveredClipId={hoveredClipId}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClipClick}
            onShare={handleShare}
          />
        )}
        {toastMessage && <Toast message={toastMessage} />}
        {!loading && !error && (!data.clips || data.clips.length === 0) && (
          <p className="mt-6 text-center text-gray-500">
            No clips available. Try updating your search.
          </p>
        )}
      </div>
    </div>
  );
};
