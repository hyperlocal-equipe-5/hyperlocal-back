type Order = {
  id: string;
  takeAway: boolean;
  orderNumber?: number;
  customerName?: string;
  user?: User;
  table?: Table;
  restaurant: Restaurant;
};
