import { IPlayerData } from "interfaces/IPlayerData";

const ProfileInfo = ({ name, steamUrl, picture, level }: IPlayerData) => (
  <div className="group w-60 rounded-md bg-white shadow transition-colors hover:bg-accent">
    <a
      className="flex flex-col items-center px-6 py-4 pb-2.5 font-ubuntu"
      href={steamUrl}
    >
      <img className="rounded-md" src={picture} />
      <h2 className="text-lg text-accent group-hover:text-white">{name}</h2>
      <p className="text-base group-hover:text-white">Steam Level: {level}</p>
    </a>
  </div>
);

export default ProfileInfo;
