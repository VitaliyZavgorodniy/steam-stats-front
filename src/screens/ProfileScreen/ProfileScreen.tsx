import { useParams } from "react-router-dom";

import Section from "components/Section";
import ProfileInfo from "components/ProfileInfo";
import UserStats from "components/UserStats";

import {
  useGetProfileByIdQuery,
  useGetStatsByIdQuery,
} from "redux/stats/profileApi";

const ProfileScreen = () => {
  const { id } = useParams();
  const { data: profile } = useGetProfileByIdQuery(id ?? "", { skip: !id });
  const { data: stats } = useGetStatsByIdQuery(id ?? "", { skip: !id });

  return (
    <Section>
      {profile ? <ProfileInfo {...profile} /> : null}
      {stats ? <UserStats stats={stats} /> : null}
    </Section>
  );
};

export default ProfileScreen;
