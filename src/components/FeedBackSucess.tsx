import sucessIcon from "../assets/success.svg";

interface FeedBackSucessProps {
  onFeedBackSent: () => void;
}

export function FeedBackSucess({ onFeedBackSent }: FeedBackSucessProps) {
  return (
    <div className="w-full h-full py-6 flex flex-col items-center text-center justify-between gap-4 ">
      <img className="w-[4rem]" src={sucessIcon} alt="Sucess" />
      <h2 className="text-white text-[2rem]">
        Agradecemos o <br /> seu FeedBack
      </h2>
      <button
        className="w-[80%] h-12 rounded-md bg-green-400 text-white text-[1.6rem] cursor-pointer"
        onClick={onFeedBackSent}
      >
        Enviar outro
      </button>
    </div>
  );
}
