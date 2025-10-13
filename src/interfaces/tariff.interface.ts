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
  center: {
    id: number;
    name: string;
    image: string;
    slug: string;
    mobile_image: string;
    type: string;
  };
}

export interface Tariffs {
  data: Tariff[];
}
