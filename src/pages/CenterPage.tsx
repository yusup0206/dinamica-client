import { useParams } from "react-router-dom";
import BannerSlider from "../components/sliders/BannerSlider";
import { useGetCenter } from "../hooks/useCenterApi";
import { useGetCenterBanner } from "../hooks/useBannerApi";

const CenterPage = () => {
  const { slug } = useParams();

  const { data: center, isLoading: centerLoading } = useGetCenter(slug);
  const { data: centerBanners, isLoading: bannerLoading } =
    useGetCenterBanner(slug);
  console.log(center);
  console.log(centerLoading);

  return (
    <>
      <BannerSlider
        banners={centerBanners?.data?.sliders}
        isLoading={bannerLoading}
      />
    </>
  );
};

export default CenterPage;
