type Order = {
  id: string;
  takeAway: boolean;
  customerName: string;
  user?: User;
  table?: Table;
  restaurant: Restaurant;
};
