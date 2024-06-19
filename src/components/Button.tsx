import { ReactNode } from "react";
import { Row } from "./Row";

export const ColorsButton = {
    primary: 'w-full bg-[#992A7F] rounded-full h-full text-[#FFFEF6]',
    secondary: 'w-full bg-[#FFFEF6] rounded-full h-full text-[#992A7F] hover:bg-[#CBACC3]  hover:text-[#393939]'
} as const;

export type ColorsButtonType = keyof typeof ColorsButton;

export interface ButtonI {
    label?: string;
    buttonColor: ColorsButtonType;
    onClick: () => void;
    icon?: ReactNode
}


export const Button = ({ label, buttonColor, onClick,icon }: ButtonI) => {
    return (
        <button className={ColorsButton[buttonColor]} onClick={onClick}>
            <Row classname="items-center justify-center min-w-[100px] gap-2 px-3">{icon && icon}   
            {label}</Row>
        </button>
    );
};
