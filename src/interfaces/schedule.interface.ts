export interface Schedule {
  data: {
    attendances: Attendance[];
    clientTariff: ClientTariff;
  };
  status: number;
  message: string;
}

export interface Attendance {
  id: number;
  client_tariff_id: number;
  client_id: number;
  center_id: number;
  tariff_id: number;
  trainer_id: null;
  came_at: string;
  gone_at: string;
  total_hours: string;
  with_trainer: string;
  frothed: number;
  date: string;
}

export interface ClientTariff {
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
