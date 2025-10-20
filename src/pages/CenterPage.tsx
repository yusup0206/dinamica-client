import { useParams } from "react-router-dom";

import { useGetCenter, useGetCenterSocialMedia } from "../hooks/useCenterApi";
import {
  useGetCenterBanner,
  useGetCenterTariffs,
  useGetCenterTeammates,
} from "../hooks/useBannerApi";
import { useGetCenterPosts } from "../hooks/usePostApi";

// components
import BannerSlider from "../components/sliders/BannerSlider";
import CenterInfo from "../components/centers/CenterInfo";
import CenterSocialMedia from "../components/centers/CenterSocialMedia";
import MembershipSlider from "../components/sliders/MembershipSlider";
import CenterPosts from "../components/posts/CenterPosts";
import TeammatesSlider from "../components/sliders/TeammatesSlider";

const CenterPage = () => {
  const { slug } = useParams();

  const { data: center, isLoading: centerLoading } = useGetCenter(slug);
  const { data: centerBanners, isLoading: bannersLoading } =
    useGetCenterBanner(slug);
  const { data: centerPosts, isLoading: postsLoading } =
    useGetCenterPosts(slug);
  const { data: centerSocialMedias, isLoading: centerSocialMediaLoading } =
    useGetCenterSocialMedia(slug);
  const { data: centerTariffs, isLoading: centerTariffLoading } =
    useGetCenterTariffs(slug);

  const { data: centerTeammates, isLoading: centerTeammatesLoading } =
    useGetCenterTeammates(slug);

  console.log(centerTeammates);

  return (
    <>
      <BannerSlider
        banners={centerBanners?.data?.sliders}
        isLoading={bannersLoading}
      />
      <CenterInfo center={center?.data?.center} isLoading={centerLoading} />
      <CenterSocialMedia
        socialMedias={centerSocialMedias?.data?.socialMedias}
        isLoading={centerSocialMediaLoading}
      />
      <MembershipSlider
        tariffs={centerTariffs?.data.tariffs}
        isLoading={centerTariffLoading}
      />
      <TeammatesSlider
        teammates={centerTeammates?.data.teammates}
        isLoading={centerTeammatesLoading}
      />
      <CenterPosts
        posts={centerPosts?.data?.data?.data}
        isLoading={postsLoading}
      />
    </>
  );
};

export default CenterPage;
