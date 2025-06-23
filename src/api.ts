import { TransactionsResponseSchema } from "./schemas";

export async function getSalesByDate(date: string) {
    const url = `${process.env.NEXT_PUBLIC_DOMAIN}/admin/sales/api?transactionDate=${date}`;
    const req = await fetch(url);

    if (!req.ok) {
        throw new Error("No se pudo obtener ventas del servidor");
    }
    try {
        const json = await req.json();
        const transactions = TransactionsResponseSchema.parse(json);
        return transactions;
    }
    catch (error) {
         console.error("Zod validation error", error);
         throw new Error("Error al validar los datos de ventas");
    }
}

