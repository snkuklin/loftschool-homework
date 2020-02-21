export interface SystemProfileState {
  isLoading: boolean;
  profile: ProfileState;
}

export interface ProfileState {
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  cardName: string;
}
