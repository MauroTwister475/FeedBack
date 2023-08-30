import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FeedBackType } from "../FeedBackType";
import { FeedBackContent } from "../FeedBackContent";
import { FeedBackSucess } from "../FeedBackSucess";
import { ChatTeardropDots } from "@phosphor-icons/react";
import { Popover } from "@headlessui/react";

export function WidgetForm() {

  const [type, setType] = useState<string>('');
  const [iconType, setIconType] = useState<string>('');
  const [feedBackSent, setFeedBackSent] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);

  function onFeedBackSent() {
    setFeedBackSent(true);
    onFeedBackRestart();
  }
  function onFeedBackRestart(){
    setType("");
  }

  return (
    <Popover className="transition-all relative">
      <Popover.Panel className="w-[38rem] h-[28rem] fixed rounded-xl p-8 bg-zinc-900 flex flex-col items-center justify-between top-[70rem] right-10  ">
        <Header feedBacktype={type} feedBackSent={feedBackSent} iconType={iconType} onFeedBackRestart={onFeedBackRestart} />
        {type ? 
          (<FeedBackContent type={type} onFeedBackSent={onFeedBackSent} />)
            : feedBackSent ? 
          (<FeedBackSucess onFeedBackSent={() => setFeedBackSent(false)} />) 
            : 
          (<FeedBackType OnFeedBackSetType={setType} OnFeedBackSetIconType={setIconType} />)}
        <Footer />
      </Popover.Panel>
      <Popover.Button 
        className="w-24 h-24 flex items-center justify-center gap-2 text-white bg-primary-bg fixed bottom-10 right-10 rounded-full overflow-hidden cursor-pointer hover:w-[15rem] transition-all text-[1.5rem]"
        onClick={onFeedBackRestart}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <ChatTeardropDots color="#FFF" size={35} />
          {hover && 'FeedBack'}
      </Popover.Button>
    </Popover>
  );
}
