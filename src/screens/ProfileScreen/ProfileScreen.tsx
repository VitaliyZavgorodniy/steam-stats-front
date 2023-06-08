import { useParams } from "react-router-dom";

import ProfileInfo from "components/ProfileInfo";

import { useGetProfileByIdQuery } from "redux/stats/profileApi";

// import { IPlayerData } from "interfaces/IPlayerData";

const ProfileScreen = () => {
  const { id } = useParams();
  const { data: profile } = useGetProfileByIdQuery(id ?? "", { skip: !id });

  return <div>{profile && <ProfileInfo {...profile} />}</div>;
};

export default ProfileScreen;
