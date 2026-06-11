export function formatToman(amount: number): string {
  return amount.toLocaleString('fa-IR') + ' تومان'
}

export function formatTomanCompact(amount: number): string {
  if (amount >= 1_000_000_000)
    return `${(amount / 1_000_000_000).toLocaleString('fa-IR')} میلیارد تومان`
  if (amount >= 1_000_000)
    return `${(amount / 1_000_000).toLocaleString('fa-IR')} میلیون تومان`
  return formatToman(amount)
}
