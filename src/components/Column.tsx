import { RowI } from "./Row";


export const Column =({children,classname}:RowI)=>{

    return(
        <div style={{display:'flex',flexDirection:'column'}}  className={classname}>
            {children}
        </div>
    )
}