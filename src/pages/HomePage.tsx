import Centers from "../components/centers/Centers";
import Posts from "../components/posts/Posts";
import BannerSlider from "../components/sliders/BannerSlider";
import { useGetBanners } from "../hooks/useBannerApi";
import { useGetCenters } from "../hooks/useCenterApi";
import { useGetPosts } from "../hooks/usePostApi";

const HomePage = () => {
  // queries
  const { data: banners, isLoading: bannersLoading } = useGetBanners();
  const { data: centers, isLoading: centersLoading } = useGetCenters();
  const { data: posts, isLoading: postsLoading } = useGetPosts({
    page: "1",
    limit: "3",
  });
  console.log(posts);

  return (
    <>
      <BannerSlider
        banners={banners?.data?.sliders}
        isLoading={bannersLoading}
      />
      <Centers centers={centers?.data?.centers} isLoading={centersLoading} />
      <Posts posts={posts?.data?.data?.data} isLoading={postsLoading} />
    </>
  );
};

export default HomePage;
