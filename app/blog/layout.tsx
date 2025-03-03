import React from 'react'

function layout(
    {children}:{children:React.ReactNode}
) {
  return (
    <div className='min-h-screen bg-slate-950 p-5 m-2  flex gap-2 '>
        {children}
    </div>
  )
}

export default layout