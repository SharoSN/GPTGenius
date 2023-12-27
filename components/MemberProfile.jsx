import { fetchOrGenerateTokesn } from '@/utils/action'
import { UserButton, currentUser, auth } from '@clerk/nextjs'

import React from 'react'

const MemberProfile = async () => {

  const user = await currentUser()
  const { userId } = auth()
  await fetchOrGenerateTokesn(userId)


  return (
    <div className='px-4 flex items-center gap-2'>
      <UserButton afterSignOutUrl='/' />
      <p>{user.emailAddresses[0].emailAddress}</p>
    </div>
  )
}

export default MemberProfile