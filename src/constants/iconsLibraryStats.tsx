import IconKills from "assets/icons/icon-kills.png";
import IconDeaths from "assets/icons/icon-deaths.png";
import IconHeadshots from "assets/icons/icon-deaths.png";
import IconTimePlayed from "assets/icons/icon-time-played.png";
import IconWins from "assets/icons/icon-wins.png";

export const iconsLibraryStats = [
  { code: "total_kills", picture: IconKills, bg: "#FFB84C" },
  { code: "total_kills_headshot", picture: IconKills, bg: "#DBDFAA" },
  { code: "total_deaths", picture: IconDeaths, bg: "#B0DAFF" },
  { code: "total_time_played", picture: IconTimePlayed, bg: "#A4D0A4" },
  { code: "total_wins", picture: IconWins, bg: "#00C4FF" },
  { code: "total_mvps", picture: IconHeadshots, bg: "#FEFF86" },
  { code: "total_matches_won", picture: IconKills, bg: "#00DFA2" },
  { code: "total_matches_played", picture: IconKills, bg: "#ECC9EE" },
  { code: "last_match_kills", picture: IconKills, bg: "#FF6969" },
  { code: "last_match_deaths", picture: IconKills, bg: "#FEFF86" },
  { code: "last_match_mvps", picture: IconKills, bg: "#87CBB9" },
  { code: "last_match_damage", picture: IconKills, bg: "#F266AB" },
];
