import { useState, FormEvent } from "react";
import { api } from "../api";
import html2canvas from "html2canvas";
import { Loading } from "./Loading";
import { Camera, Trash, CircleNotch } from "@phosphor-icons/react";

interface FeedBackContentProps {
  type: string,
  onFeedBackSent: () => void;
}

export function FeedBackContent({ type, onFeedBackSent }: FeedBackContentProps) {
 
  const [comment, setComment] = useState<string>("");
  const [screenshot, setScreenshot] = useState<string>("");
  const [takeScreenshot, setTakeScreenshot] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function onTakeScreenshot() { 
    if (document.body) {
      const photo = await html2canvas(document.body);
      const dataURL = photo.toDataURL();

      setScreenshot(dataURL);
      setTakeScreenshot(true); 
    }

    if (screenshot) {
      setScreenshot("");
    }
    setInterval(() => setTakeScreenshot(false), 2500);
  }
  
  async function onFeedBackSubmitSent(e: FormEvent<HTMLFormElement>){
      e.preventDefault();

      const data = { type, comment, screenshot };
      setIsLoading(true);

      setTimeout( async() => {
        try {
          await api.post("/createFeedBack", data);
          onFeedBackSent();// resetar tudo
          setIsLoading(false);
        }catch(error){
          console.log("Erro grave: "+error);
        }
      }, 2500);
  }

  return (
    <form 
      className="w-full h-full py-6 flex flex-col justify-between gap-4 text-white text-[2rem]"
      onSubmit={onFeedBackSubmitSent}
    >
      <textarea
        className="w-full h-full resize-none border border-violet-700 rounded-md p-4 bg-transparent text-[1.6rem]"
        placeholder="Conte com detalhes o que está acontecendo..."
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      ></textarea>
      <div className="w-full flex gap-2">
        <button
          type="button"
          className="w-[6rem] h-[3.8rem] flex items-center justify-center bg-zinc-800 rounded-md py-4 hover:opacity-[0.8] transition-opacity disabled:cursor-no-drop"
          onClick={onTakeScreenshot}
          disabled={takeScreenshot}
        >
          {screenshot ? (
            takeScreenshot ? (
              <Loading />
            ) : (
              <div className="flex w-full items-center justify-center">
                <img src={screenshot} alt="screenshot"
                  className="w-[3.8rem] h-[2.5rem] rounded-sm relactive"
                />
                <Trash color="#5d2fab" size={20} weight="fill" className="absolute ml-8 mt-2 cursor-pointer hover:opacity-[0.8] transition-all"
                  onClick={() => setScreenshot("")}
                />
              </div>
            )
          ) : (
            <Camera color="#fff" size={30} className="focus:border-violet-700" />
          )}
        </button>
        <button
          type="submit"
          className={`w-full h-[3.8rem] flex items-center justify-center rounded-md bg-violet-700 text-white text-[1.6rem] cursor-pointer transition-colors disabled:cursor-no-drop ${isLoading ? 'bg-violet-800':''}`}
          disabled={comment.length == 0 || takeScreenshot}
        >
          {isLoading ?
            <CircleNotch className="animate-spin w-[3rem]" size={40} />
             : "Enviar FeedBack"
          }
        </button>
      </div>
    </form>
  );
}
