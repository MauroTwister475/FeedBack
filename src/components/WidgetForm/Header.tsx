import { ArrowLeft } from "@phosphor-icons/react";
import { CloseButton } from "../CloseButton";

interface HeaderProps {
  feedBacktype: string;
  feedBackSent: boolean;
  iconType: string,
  // onSetType: (type: string) => void,
  onFeedBackRestart: () => void,
}

export function Header({ feedBacktype, feedBackSent, iconType, onFeedBackRestart }: HeaderProps){
  return (
    <header className={`w-full flex items-center ${feedBacktype ? "justify-between":"justify-center"} text-[2rem] text-white`}>
      {feedBacktype && (
        <ArrowLeft
          color="#cecece"
          size={15}
          className="text-zinc-400 hover:text-zinc-100 cursor-pointer"
          onClick={onFeedBackRestart}
        />
      )}
      <span className="flex items-center justify-center gap-2">
        {!feedBacktype ? (feedBackSent ? "" : "Deixe o seu FeedBack") : feedBacktype}
        {feedBacktype && <img src={iconType} width="25" alt={feedBacktype} />}
      </span>
      {feedBacktype && <CloseButton />}
    </header>
  );
}
