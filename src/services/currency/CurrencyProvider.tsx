import { FC, PropsWithChildren, createContext, useContext, useState } from 'react';

export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP'
}

interface CurrencyContext {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

const CurrencyContext = createContext<CurrencyContext | null>(null);

export const CurrencyProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>(Currency.GBP);
  return <CurrencyContext.Provider value={{ currency, setCurrency }}>{children}</CurrencyContext.Provider>;
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error('useCurrency must be used within a CurrencyProvider');
  return context;
};
