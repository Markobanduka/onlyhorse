import React from "react";
import Post from "./Post";
import UnderlinedText from "@/components/decorators/UnderlinedText";
import PostSkeleton from "@/components/skeletons/PostSkeloton";
import { admin, posts, user } from "@/dummy_data";

const Posts = () => {
  const isLoading = false;

  return (
    <div>
      {!isLoading &&
        posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            admin={admin}
            isSubscribed={user.isSubscribed}
          />
        ))}

      {isLoading && (
        <div className="mt-10 px-3 flex flex-col gap-10">
          {[...Array(3)].map((_, i) => (
            <PostSkeleton key={i} />
          ))}
        </div>
      )}

      {!isLoading && posts.length === 0 && (
        <div className="mt-10 px-3">
          <div className="flex flex-col items-center space-y-3 w-full md:w-3/4 mx-auto">
            <p className="text-xl font-semibold">
              No Posts <UnderlinedText>yet</UnderlinedText>
            </p>
            <p className="text-center">
              Stay tuned for more posts from{" "}
              <span className="text-primary font-semibold text-xl">
                OnlyHorse.
              </span>{" "}
              You can subscribe to access exclusive content when it's available.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Posts;
