import { fetchUserTokensById } from "@/utils/action"
import { auth, UserProfile } from "@clerk/nextjs"


const ProfilePage = async () => {
  const {userId} = auth()
  const currentTokens = await fetchUserTokensById(userId)
  return (
    <div>
      <h2 className="mb-8 ml-8 text-xl font-extrabold">
        Token Amount : {currentTokens}
      </h2>
    <UserProfile />
    </div>
  )
}

export default ProfilePage