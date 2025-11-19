import React, { Suspense } from 'react'

const zentrolayout = ({children}) => {
  return (
    <Suspense fallback={<div className='w-full h-screen flex items-center justify-center'>
<span className='animate-breathe text-center text-balance'>      Loading...
</span>
      </div>}>        {children}
      </Suspense>
  )
}

export default zentrolayout