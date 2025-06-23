import { TransactionsResponseSchema } from "./schemas";


export async function getSalesByDate(date: string) {
  const base = process.env.NEXT_PUBLIC_API_URL!
  const res = await fetch(`${base}/transactions?transactionDate=${date}`, {
    credentials: 'include',
  })
  if (!res.ok) throw new Error('No se pudo obtener ventas')
  return TransactionsResponseSchema.parse(await res.json())
}
