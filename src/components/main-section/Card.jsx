import React from "react";
import { cardData } from "./CardData";

const Card = () => {
  const data = cardData;
  

  const getTag = (tag) => {
    switch (tag) {
      case "COMPLETED":
        return "bg-[#328B6B]";
      case "CANCELLED":
        return "bg-[#A95552]";
      case "IN PROGRESS":
        return "bg-[#4B72C2]";
      case "PENDING":
        return "bg-[#D6A24F]";
      default:
        return "bg-gray-500";
    }
  };

  const getIcons = (tag) => {
    switch (tag) {
      case "COMPLETED":
        return (
          <svg fill="currentColor" viewBox="0 0 16 16" className="size-6">
            <path d="M3 14.5A1.5 1.5 0 011.5 13V3A1.5 1.5 0 013 1.5h8a.5.5 0 010 1H3a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h10a.5.5 0 00.5-.5V8a.5.5 0 011 0v5a1.5 1.5 0 01-1.5 1.5H3z" />
            <path d="M8.354 10.354l7-7a.5.5 0 00-.708-.708L8 9.293 5.354 6.646a.5.5 0 10-.708.708l3 3a.5.5 0 00.708 0z" />
          </svg>
        );
      case "CANCELLED":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        );
      case "IN PROGRESS":
        return (
          <svg fill="none" viewBox="0 0 15 15" className="size-6">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M5.5.5A.5.5 0 016 0h3a.5.5 0 010 1H8v1.12a6.363 6.363 0 012.992 1.016.638.638 0 01.066-.078l1-1a.625.625 0 01.884.884l-.975.975A6.4 6.4 0 117 2.119V1H6a.5.5 0 01-.5-.5zm-3.4 8a5.4 5.4 0 1110.8 0 5.4 5.4 0 01-10.8 0zm5.4 0V4.1a4.4 4.4 0 103.111 7.511L7.5 8.5z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "PENDING":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
        );
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
        );
    }
  };

  return (
    <div className="mt-4 grid md:grid-cols-2 grid-cols-1 z-30 md:w-[90%] w-full gap-y-4">
      {data.map((data) => (
        <div key={data.id} className="p-2">
          <div className="bg-white/50 dark:bg-black/50  rounded-lg p-7 relative">
            <span
              className={
                "absolute top-0 right-0 px-2 py-1 rounded-full mt-2 mr-2 flex gap-2 dark:text-white " +
                getTag(data.tag)
              }
            >
              { getIcons(data.tag)} <span>{data.tag}</span>
            </span>
            <div className="grid grid-cols-1 gap-3 my-5 dark:text-white">
              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 mx-1 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                <span>:</span>
                <span className="dark:text-white/70">{data.c1}</span>
              </div>
              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 mx-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <span>:</span>
                <span className="dark:text-white/70">{data.price}</span>
              </div>

              <div className="flex gap-4">
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="size-6 mx-1"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit={10}
                    strokeWidth={32}
                    d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={32}
                    d="M256 128v144h96"
                  />
                </svg>
                <span>:</span>
                <span className="dark:text-white/70">{data.t1}</span>
              </div>
              <div className="flex gap-4">
                <svg
                  viewBox="0 0 940 1000"
                  fill="currentColor"
                  className="size-6 mx-1"
                >
                  <path d="M532 90c113.333 0 209.667 40 289 120s119 176.667 119 290-39.667 210-119 290-175.667 120-289 120c-92 0-176-29.333-252-88l70-76c54.667 40 115.333 60 182 60 84 0 156-30 216-90s90-132 90-216c0-85.333-30-158-90-218s-132-90-216-90c-82.667 0-153.667 28.667-213 86s-90.333 127.333-93 210h142L184 694 0 488h124c2.667-110.667 43.667-204.667 123-282S421.333 90 532 90m-36 190h70v204l130 130-50 50-150-150V280" />
                </svg>
                <span>:</span>
                <span className="dark:text-white/70">{data.age}</span>
              </div>
            </div>
            <span className="absolute bottom-0 right-0 px-2 py-1 mb-2 mr-2 text-blue-800 cursor-pointer">
              VIEW ORDERS
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
