import Centers from "../components/centers/Centers";
import Posts from "../components/posts/Posts";
import BannerSlider from "../components/sliders/BannerSlider";
import { useGetBanners } from "../hooks/useBannerApi";
import { useGetCenters } from "../hooks/useCenterApi";
import { useGetPosts } from "../hooks/usePostApi";

const HomePage = () => {
  const { data: banners, isLoading: bannersLoading } = useGetBanners();
  const { data: centers, isLoading: centersLoading } = useGetCenters();
  const { data: posts, isLoading: postsLoading } = useGetPosts();

  return (
    <>
      <BannerSlider
        banners={banners?.data?.sliders}
        isLoading={bannersLoading}
      />
      <Centers centers={centers?.data?.centers} isLoading={centersLoading} />
      <Posts posts={posts?.data?.posts} isLoading={postsLoading} />
    </>
  );
};

export default HomePage;
