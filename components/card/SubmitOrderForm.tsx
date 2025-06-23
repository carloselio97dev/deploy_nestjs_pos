import { submitOrderAction } from "@/actions/submit-order-actions"
import { useStore } from "@/src/store"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify";


export const SubmitOrderForm = () => {

  const total=useStore((state)=>state.total);
  const coupon=useStore((state)=>state.coupon.name);
  const contents=useStore((state)=>state.contents);
  const clearOrder=useStore(state=>state.clearOrder);

  const order= {
      total,
      coupon,
      contents
  }


  const subtmitOrderWithData= submitOrderAction.bind(null,order)
  const [state, dispatch] = useActionState(subtmitOrderWithData,{
        errors:[],
        success:''
    })

  useEffect(()=>{
    if(state.errors){
        state.errors.forEach((error) => {
            toast.error(error);
        })
    }

    if(state.success){
       toast.success(state.success);
       clearOrder();
    }

  },[state])

  

  return (
    <form action={dispatch}>
        <input type="submit"
        className="mt-5 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-md cursor-pointer"
        value="Confirmar Compra"    
        >
        </input>
    </form>
  )
}
