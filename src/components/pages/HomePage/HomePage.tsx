import { useState, useEffect } from "react";
import { useFetchData } from "../../../hooks/useFetchData";
import { SearchForm } from "../../molecules";
import { ClipList } from "../../organisms/ClipList/ClipList";
import { Toast } from "../../atoms";
import NBALogo from "../../atoms/NBALogo/NBALogo";
import BasketballLoader from "../../atoms/BasketballLoader/BasketBallLoader";

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
    <div className="bg-gray-900 text-white min-h-screen md:p-6 p-3 pt-5">
      <div className="container mx-auto">
        <div className="flex justify-center items-center mb-8">
          <NBALogo />
          <h1 className="text-4xl font-bold text-center">NBA Clips Viewer</h1>
        </div>
        <SearchForm
          teamSuggestions={teamSuggestions}
          playerSuggestions={playerSuggestions}
          favoriteTeam={favoriteTeam}
          followedTeams={followedTeams}
          followedPlayers={followedPlayers}
          onSubmit={fetchData}
          onFavoriteTeamChange={setFavoriteTeam}
          onFollowedTeamsChange={setFollowedTeams}
          onFollowedPlayersChange={setFollowedPlayers}
          isLoading={loading}
        />

        {error && <p className="text-red-500 text-center mb-6">{error}</p>}

        {loading ? (
          <BasketballLoader />
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
          <p className="text-center text-gray-500 mt-6">
            No clips available. Try updating your search.
          </p>
        )}
      </div>
    </div>
  );
};
