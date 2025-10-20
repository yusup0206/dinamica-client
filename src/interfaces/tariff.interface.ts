import type { Center } from "./center.interface";

export interface Tariff {
  from_date: string;
  to_date: string;
  center_id: number;
  client_id: number;
  tariff_id: number;
  discounted_price: string;
  with_trainer: string;
  automatic_extend: number;
  available_strikes: number;
  tariff: {
    id: number;
    center_id: number;
    name: string;
    text: string;
    with_trainer: string;
    price: string;
    month: number;
    week: null;
  };
  center: Center;
}

export interface Tariffs {
  data: Tariff[];
}

export interface TariffSlider {
  id: number;
  center_id: number;
  name: string;
  text: string;
  type: string;
  activity_type: string;
  price: string;
  days_in_month: number;
  frothable_days: number;
  image: string;
}

export interface TariffSliders {
  tariffs: TariffSlider[];
  status: number;
}

export interface MembershipSliderProps {
  tariffs: TariffSlider[] | undefined;
  isLoading: boolean;
}
