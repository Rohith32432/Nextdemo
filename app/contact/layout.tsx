
function layout({ children ,sample }
    
    : { children: React.ReactNode ,sample:React.ReactNode}) {
    return (
        <div>
           
            {children}
            {sample}
        </div>
    )
}

export default layout