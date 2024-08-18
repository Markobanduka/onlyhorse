import React from "react";
import Post from "./Post";
import UnderlinedText from "@/components/decorators/UnderlinedText";

const Posts = () => {
  const posts = [];
  return (
    <div>
      {posts.length === 0 && (
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
