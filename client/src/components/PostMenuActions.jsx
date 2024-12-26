import React from "react";

function PostMenuActions() {
  return (
    <div className="">
      <h1 className="mb-4 mt-8 text-sm font-medium">Actions</h1>
      <div className="flex items-center py-2 gap-2 cursor-pointer text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="20px"
          height="20px"
        >
          <path
            d="M12 4C10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.7-1.3-3-3-3H12z"
            stroke="black"
            stroke-width="2"
          />
        </svg>
        <span>Save this post</span>
      </div>
      <div className="flex items-center py-2 gap-2 cursor-pointer text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          width="24"
          height="24"
        >
          <path d="M3 6h18" />
          <path d="M8 6v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6" />
          <path d="M10 10v6" />
          <path d="M14 10v6" />
          <path d="M5 6l1-2h12l1 2" />
        </svg>

        <span>Delete this post</span>
      </div>
    </div>
  );
}

export default PostMenuActions;
