import * as React from "react"
import { loadStripe } from "@stripe/stripe-js"
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { FormErrorMessage } from "./form-error-message"

// You should use a real publishable key from your Stripe dashboard
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx") // Test key

const CheckoutForm = ({ onSubmit }: { onSubmit: (token: string) => void }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = React.useState<string | null>(null)
  const [processing, setProcessing] = React.useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setProcessing(true)

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return
    }

    const cardElement = elements.getElement(CardElement)
    if (!cardElement) {
        return
    }

    const { error, token } = await stripe.createToken(cardElement)

    if (error) {
      setError(error.message || "An unexpected error occurred.")
      setProcessing(false)
    } else if (token) {
      setError(null)
      onSubmit(token.id)
      // The token can now be sent to your server
      setProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="p-3 border rounded-md">
        <CardElement options={{
            style: {
                base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                },
                invalid: {
                    color: '#9e2146',
                },
            },
        }} />
      </div>
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
      <Button type="submit" disabled={!stripe || processing} className="w-full">
        {processing ? "Processing..." : "Pay Now"}
      </Button>
    </form>
  )
}

const PaymentForm = ({ onConfirm }: { onConfirm: (token: string) => void; }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm onSubmit={onConfirm} />
    </Elements>
  )
}

export { PaymentForm }
