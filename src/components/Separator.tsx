

export interface SeparatorI{
    size:number,
}

export const Separator =({size}: SeparatorI)=>{

    return(
        <div className={`w-full`} style={{ height: `${size}px` }}>
        </div>
    )
}