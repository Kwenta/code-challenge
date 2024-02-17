import { DEFAULT_CURRENCY, DEFAULT_LOCALE } from "../constants";

export const currencyFormat = (currency: number): string => {
    if (!currency) return '--';
    return currency.toLocaleString(DEFAULT_LOCALE,
        {
            currency: DEFAULT_CURRENCY, style: "currency"
        })
}