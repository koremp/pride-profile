import { Auth } from '@supabase/ui'

export default function IndexPage() {
  const { user } = Auth.useUser()

  return (
    <div className="w-full h-full bg-gray-300">
      <div>
        navigators
        {!user ? (
          <p>create pride proflle with login</p>
        ) : (
          <p>move page to select profile's category</p>
        )}
      </div>
    </div>
  )
}