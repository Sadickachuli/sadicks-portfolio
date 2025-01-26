import { useNavigate } from "react-router";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/")} className="cursor-pointer">
      <h1 className="font-serif text-3xl md:text-2xl sm:text-xl">
        Sadick<span className="text-primary"> .</span>
      </h1>
    </button>
  );
}
