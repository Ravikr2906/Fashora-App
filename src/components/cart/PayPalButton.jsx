import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
// import React from 'react'



const PayPalButton = ({amount, onSuccess, onError}) => {
  return (
   <PayPalScriptProvider
    options={{"client-id": "AU78SJLds7bPbuFRIKUfp5ILjjxXaX-m6BcyL-DGq29-bWBt4Zf_9DzYgVO7offCUGVovR2BvMrr8Fi7"}}>

<PayPalButtons 
style={{layout: "vertical"}}
createOrder={(data, actions) => {
  return actions.order.create({
    purchase_units:  [{amount: {value: amount}}]
  })
}}
onApprove ={(data,actions) => {
return actions.order.capture().then(onSuccess)
}}
onError={onError}/>

   </PayPalScriptProvider>
  )
}

export default PayPalButton