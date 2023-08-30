import bugIcon from "../assets/bug.svg";
import ideaIcon from "../assets/idea.svg";
import otherIcon from "../assets/thought.svg";

const feedBackType = {
  BUG: {
    type: "Bug",
    image: {
      url: bugIcon,
      alt: "Bug",
    },
  },
  IDEIA: {
    type: "Ideia",
    image: {
      url: ideaIcon,
      alt: "Idea",
    },
  },
  OUTRO: {
    type: "Outro",
    image: {
      url: otherIcon,
      alt: "Other",
    },
  },
};

interface FeedBackTypeProps {
  OnFeedBackSetType: (type: string) => void;
  OnFeedBackSetIconType: (icon: string) => void;
}

export function FeedBackType({ OnFeedBackSetType, OnFeedBackSetIconType }: FeedBackTypeProps) {
    
  return (
    <div className="w-full flex gap-4 items-center justify-center">
      {Object.entries(feedBackType).map((feedBack) => {
        return (
          <div
            className="w-full py-8 flex  gap-8 flex-col items-center justify-center bg-zinc-800 rounded-[0.8rem] hover:border hover:border-violet-700 cursor-pointer"
            key={feedBack[0]}
            onClick={() => {
              OnFeedBackSetType(feedBack[1].type)
              OnFeedBackSetIconType(feedBack[1].image.url)
            }}
          >
            <img src={feedBack[1].image.url} alt={feedBack[1].image.alt} />
            <p className="text-white text-[1.5rem] font-bold">
              {feedBack[1].type}
            </p>
          </div>
        )})}
    </div>
  )
}
