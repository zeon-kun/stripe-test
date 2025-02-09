"use client";

import { Elements } from "@stripe/react-stripe-js";
import getStripe from "./_utils/get-stripejs";
import convertToSubcurrency from "./_utils/convertToSubcurrency";
import CheckoutPage from "@/components/CheckoutPage";

const stripePromise = await getStripe();
export default function Home() {
  //Static,
  //TODO: change to dynamic
  const amount = 49.99;

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Jeong</h1> 
        <h2 className="text-2xl">has requested</h2>
        <span className="font-bold"> ${amount}</span>
      </div>

      <Elements 
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "sgd",
        }}
      >
        <CheckoutPage amount={amount}/>
      </Elements>
    </main>
  );
}
