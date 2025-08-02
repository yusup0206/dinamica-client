import { useParams } from "react-router-dom";

import { useGetCenter, useGetCenterSocialMedia } from "../hooks/useCenterApi";
import { useGetCenterBanner } from "../hooks/useBannerApi";
import { useGetCenterPosts } from "../hooks/usePostApi";

// components
import BannerSlider from "../components/sliders/BannerSlider";
import CenterInfo from "../components/centers/CenterInfo";
import CenterSocialMedia from "../components/centers/CenterSocialMedia";
import MembershipSlider from "../components/sliders/MembershipSlider";
import CenterPosts from "../components/posts/CenterPosts";

const CenterPage = () => {
  const { slug } = useParams();

  const { data: center, isLoading: centerLoading } = useGetCenter(slug);
  const { data: centerBanners, isLoading: bannersLoading } =
    useGetCenterBanner(slug);
  const { data: centerPosts, isLoading: postsLoading } =
    useGetCenterPosts(slug);
  const { data: centerSocialMedias, isLoading: centerSocialMediaLoading } =
    useGetCenterSocialMedia(slug);

  console.log(center);

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
      <MembershipSlider />

      <CenterPosts posts={centerPosts?.data?.posts} isLoading={postsLoading} />
    </>
  );
};

export default CenterPage;
