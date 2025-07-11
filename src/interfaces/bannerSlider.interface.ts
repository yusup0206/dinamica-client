export interface Slider {
  id: number;
  title: string;
  image: string;
}

export interface Sliders {
  sliders: Slider[];
}

export interface SliderProps {
  banners: Slider[] | undefined;
  isLoading: boolean;
}
