import { authConfig } from '../../../config/auth'
import { getServerSession } from 'next-auth/next'

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <div>
      <h1>Вы зашли как {session?.user?.name}</h1>
      {session?.user?.image && <img src={session.user.image} alt="" />}
    </div>
  );
}
