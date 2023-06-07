import Logo from "assets/logo-player-stats.svg";
import SteamIcon from "assets/icons/steam-icon.svg";

const Header = () => (
  <header className="w-screen flex items-center p-2">
    <a className="flex items-center mr-12" href="/">
      <img className="h-12 w-12 mr-1.5" src={Logo} alt="logo" />
      <h1 className=" font-smooch text-5xl">
        <span className="text-accent">Player</span>Stats
      </h1>
    </a>
    <a className="flex items-center bg-accent color-white text-3xl font-smooch p-2.5 rounded-xl">
      <img className="h-8 w-8 fill-white" src={SteamIcon} alt="Steam icon" />
      <span className="ml-2 text-white">Sign in</span>
    </a>
    <a
      className="text-3xl font-smooch hover:color-accent color-primary"
      href="/search"
    >
      Search
    </a>
  </header>
);

export default Header;
