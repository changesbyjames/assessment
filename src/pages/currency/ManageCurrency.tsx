import { Currency, useCurrency } from '@/services/currency/CurrencyProvider';

export const ManageCurrency = () => {
  const { currency, setCurrency } = useCurrency();

  return (
    <div>
      <h1>Manage Currency</h1>
      <p>Current currency: {currency}</p>
      <button onClick={() => setCurrency(Currency.USD)}>Set to USD</button>
      <button onClick={() => setCurrency(Currency.EUR)}>Set to EUR</button>
      <button onClick={() => setCurrency(Currency.GBP)}>Set to GBP</button>
    </div>
  );
};
