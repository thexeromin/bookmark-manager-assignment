import { currentUser } from "@clerk/nextjs/server";
import ManageBookmark from "@/components/organisms/manage-bookmark";

export default async function Page() {
  const user = await currentUser();
  if (!user) return <div>Not signed in</div>;

  return <ManageBookmark userID={user.id} />;
}
