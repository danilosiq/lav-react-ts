import { ReactNode } from "react";

export interface RowI{
    children?: ReactNode
    classname?: string
}

export const Row =({children,classname}:RowI)=>{

    return(
        <div style={{display:'flex',flexDirection:'row'}} className={classname}>
            {children}
        </div>
    )
}