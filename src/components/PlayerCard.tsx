import { IPlayerData } from "interfaces/IPlayerData";

const PlayerCard = ({ name, steamUrl, picture, level }: IPlayerData) => (
  <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 rounded-xldds">
    <a href={steamUrl}>
      <h1>{name}</h1>
    </a>
    <a href={steamUrl}>Link</a>

    <img src={picture} alt="avatar" />

    <p>Steam Level: {level}</p>
  </div>
);

export default PlayerCard;
