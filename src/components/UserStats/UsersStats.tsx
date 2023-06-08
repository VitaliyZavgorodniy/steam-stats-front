import { IPlayerStats } from "interfaces/IPlayerStats";

import { iconsLibraryStats } from "constants/iconsLibraryStats";

interface PlayerStatsProps {
  stats: IPlayerStats[];
}

const UserStats = ({ stats }: PlayerStatsProps) => {
  const renderStats = () =>
    stats.map((stat) => {
      const statInfo = iconsLibraryStats.find(({ code }) => code === stat.code);

      return (
        <li className="ml-3 mt-8 flex w-36 flex-col items-center">
          <div
            className="mb-2 flex items-center justify-center rounded-full"
            style={{ background: statInfo?.bg }}
          >
            {statInfo ? (
              <img className="m-3 w-12" src={statInfo.picture} />
            ) : null}
          </div>

          <h4 className="font-ubuntu text-primary">{stat.title}</h4>
          <p className="font-smooch text-3xl text-accent">{stat.value}</p>
        </li>
      );
    });

  return (
    <div className="mt-5 rounded-md bg-white p-2 text-accent shadow">
      <ul className="-ml-3 -mt-8 flex flex-wrap items-center justify-start p-2">
        {renderStats()}
      </ul>
    </div>
  );
};

export default UserStats;
