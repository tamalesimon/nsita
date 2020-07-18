import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import SpiderMonkey from '../../assests/spider-monkey.png';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H5MQBJb8bGNw48W1cZ8vDP5cfjER4qrJj3vV3wzn3VcxiNWxBcxIppcSARja8KFTpVJlO00Xiqi09lCZGox7ejs00BdTF8YEf';


    const onToken = token => {
        console.log(token);
        alert('Payment was succefull')
    }

    return (
        <StripeCheckout 
            label ='Complete Payement'
            name='nkima'
            image={SpiderMonkey}
            description= {`Your total is $${price}`}
            amount= {priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey} />
    )

}

export default StripeCheckoutButton;
