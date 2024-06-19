import React, { useState } from "react";
import { Column } from "../../../components/Column";
import { Row } from "../../../components/Row";
import { Separator } from "../../../components/Separator";
import { Footer } from "../../../components/footer";
import { Navbar } from "../../../components/navbar";
import { LocalForm } from "./components/local-form";
import { usePaymentInputs, PaymentInputsWrapper } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

export const Buycamp = () => {
    const [paymentMethod, setPaymentMethod] = useState("");
    const [cardDetails, setCardDetails] = useState({
        cvc: '',
        expiry: '',
        name: '',
        number: ''
    });

    const {
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps,
        wrapperProps,
        meta,
    } = usePaymentInputs();

    const handleInputChange = (e) => {
        setCardDetails({
            ...cardDetails,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <Navbar />
            <Separator size={40} />
            <Row classname="px-[16px] justify-evenly min-h-[770px]">
                <Column classname="w-[30%]">
                    
                    <div className="px-[16px] py-[30px] h-full rounded-xl bg-[#E0E8EB]">
                    <h1 className="font-extrabold text-[30px] text-[#992A7F]">Endereço</h1>
                        <LocalForm />
                    </div>
                </Column>

                <div className="w-[60%]">
                    
                    <Column>
                    <div className=" bg-[#E0E8EB] rounded-xl p-[10px]">
                        <h1 className="font-extrabold text-[30px] text-[#992A7F]">Forma de pagamento</h1>
                        <Column>
                        <label htmlFor="credito">
                            <input
                                type="radio"
                                id="credito"
                                name="pagamento"
                                value="credito"
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="focus:outline-none"
                            />
                            Cartão de Crédito
                        </label>

                        <label htmlFor="pix">
                            <input
                                type="radio"
                                id="pix"
                                name="pagamento"
                                value="pix"
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="focus:outline-none"
                            />
                            PIX
                        </label>

                        <label htmlFor="debito">
                            <input
                                type="radio"
                                id="debito"
                                name="pagamento"
                                value="debito"
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="focus:outline-none"
                            />
                            Cartão de Débito
                        </label>
</Column>
                        {paymentMethod === "credito" && (
                            <div className="mt-4">
                                <PaymentInputsWrapper {...wrapperProps}>
                                    <svg {...getCardImageProps({ images })} />
                                    <input {...getCardNumberProps({ onChange: handleInputChange })} name="number" value={cardDetails.number} className="focus:outline-none border p-2 mb-2 w-full" />
                                    <input {...getExpiryDateProps({ onChange: handleInputChange })} name="expiry" value={cardDetails.expiry} className="focus:outline-none border p-2 mb-2 w-full" />
                                    <input {...getCVCProps({ onChange: handleInputChange })} name="cvc" value={cardDetails.cvc} className="focus:outline-none border p-2 mb-2 w-full" />
                                </PaymentInputsWrapper>
                                {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
                            </div>
                        )}

{paymentMethod === "debito" && (
                            <div className="mt-4">
                                <PaymentInputsWrapper {...wrapperProps}>
                                    <svg {...getCardImageProps({ images })} />
                                    <input {...getCardNumberProps({ onChange: handleInputChange })} name="number" value={cardDetails.number} className="focus:outline-none border p-2 mb-2 w-full" />
                                    <input {...getExpiryDateProps({ onChange: handleInputChange })} name="expiry" value={cardDetails.expiry} className="focus:outline-none border p-2 mb-2 w-full" />
                                    <input {...getCVCProps({ onChange: handleInputChange })} name="cvc" value={cardDetails.cvc} className="focus:outline-none border p-2 mb-2 w-full" />
                                </PaymentInputsWrapper>
                                {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
                            </div>
                        )}
</div>
<hr className="h-[20px] bg-[#992A7F] my-[10px] rounded-full"/>

<h1  className="font-extrabold text-[50px] text-[#992A7F]">Total:</h1>
<p className=" text-[30px] ">R$ 0,00</p>
                    </Column>
                </div>
            </Row>
            <Footer />
        </>
    );
}
