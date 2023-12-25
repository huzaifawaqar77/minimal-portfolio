// components

import UserBio from "./components/UserBio";
import UserPosts from "./components/UserPosts";
import HotTopics from "./components/HotTopics";

export default function Home() {
  return (
    <main className="flex gap-4 flex-wrap">
      <UserBio />
      <UserPosts />
      <HotTopics />
    </main>
  );
}
