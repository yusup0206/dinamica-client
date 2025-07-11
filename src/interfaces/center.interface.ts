export interface Center {
  id: number;
  name: string;
  image: string;
  slug: string;
  mobile_image: string;
  type: string;
}

export interface Centers {
  centers: Center[];
}

export interface CenterProps {
  centers: Center[] | undefined;
  isLoading: boolean;
}

export interface CenterSingle {
  id: number;
  activity_text: string;
  address: string;
  iframe: string | null;
  image: string;
  membership_text: string;
  mobile_image: string;
  mobile_text: string;
  name: string;
  news_text: string;
  slug: string;
  team_text: string;
  text: string;
  type: string;
  work_time_text: string;
}
