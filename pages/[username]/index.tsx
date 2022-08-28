import { getUserWithUsername, postToJSON } from "../../lib/firebase";
import UserProfile from "../../components/UserProfile";
import PostFeed from "../../components/PostFeed";

export async function getServerSideProps({ query }: any) {
  const { username } = query;

  const userDoc = await getUserWithUsername(username);

  // JSON serializable data
  let user = null;
  let posts = null;

  if (userDoc) {
    user = userDoc.data();
    const postsQuery = userDoc.ref
      .collection("posts")
      .where("published", "==", true)
      .orderBy("createdAt", "desc")
      .limit(5);
    posts = (await postsQuery.get()).docs.map(postToJSON);
  }

  return {
    props: { user, posts }, // will be passed to the page component as props
  };
}
type UserProfilePageProps = {
  user: any;
  posts: any;
};
export default function UserProfilePage({ user, posts }: UserProfilePageProps) {
  return (
    <main>
      <UserProfile user={user} />
      <PostFeed posts={posts} post={""} admin={false} />
    </main>
  );
}
