export interface Payment {
  date: string;
  description: string;
  price: string;
  type: string;
}

export interface PaymentMap {
  [id: string]: Payment;
}

export interface ClientUser {
  name: string;
  surname: string;
  fathername: string | null;
  avatar: string;
  balance: string;
}

export interface PaginatedPaymentsData {
  current_page: number;
  data: PaymentMap;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: { url: string | null; label: string; active: boolean }[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface PaymentsApiInnerData {
  data: PaginatedPaymentsData;
  user: ClientUser;
  status: number;
  message: string;
}

export interface PaymentProps {
  payments: Payment[] | undefined;
  isLoading: boolean;
  user: ClientUser | undefined;
}

export interface PaymentFilters {
  page?: string | number;
  limit?: string | number;
}
