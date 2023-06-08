import { Link } from "react-router-dom";

import SearchBar from "components/SearchBar/SearchBar";

import Logo from "assets/logo-player-stats.svg";

import { SteamIcon } from "components/Icons";

const Header = () => (
  <header className="flex w-screen justify-center bg-white shadow">
    <nav className="flex w-full max-w-screen-xl items-center justify-between py-3">
      <Link className="mr-12 flex items-center" to="/">
        <img className="mr-1.5 h-12 w-12" src={Logo} alt="logo" />
        <h1 className="font-smooch text-5xl">
          <span className="text-accent">Player</span>Stats
        </h1>
      </Link>
      <div className="flex items-center">
        <SearchBar />

        <Link
          className="flex items-center rounded-xl bg-accent p-2 transition-colors hover:bg-primary"
          to="/signin"
        >
          <SteamIcon />
          <span className="ml-2 font-smooch text-2xl text-white">Sign in</span>
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
