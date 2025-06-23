import { formatCurrency } from "@/src/utils"

type AmountProps= {
     label:string
     amount:number
     discount?:boolean
}

export const Amount = ({label, amount,discount}:AmountProps) => {
  return (
  
      <div className={`${discount && 'bg-green-300 text-green-900'}}flex justify-between p-1`}>
        <dt className="font-bold"> {label} </dt>
        <dd className="text-gay-900"> {discount && '-'} {formatCurrency(amount)} </dd> 
     </div>

  )
}
