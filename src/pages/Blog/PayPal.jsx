import React, { useRef, useEffect } from "react";

export default function Paypal({ amount, onSuccess }) {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Donation", 
                amount: {
                  currency_code: "USD",
                  value: parseFloat(amount), 
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order); 
          if (onSuccess) {
            onSuccess(order.id); 
          }
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, [amount, onSuccess]);
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
