interface ButtonProps {
  text: string;
  onclick: () => void;
  variant?: "primary" | "secondary";
}

export default function Button({
  text,
  onclick,
  variant = "primary",
}: ButtonProps) {
  return (
    <button className="flex items-center group" onClick={onclick}>
      <p
        className={`bg-primary py-1 text-black px-6 rounded-2xl ${
          variant === "secondary" ? "bg-secondary text-primary" : ""
        }`}
      >
        {text}
      </p>
      <img
        className={`bg-primary w-7 h-7 p-2 rounded-full object-contain -rotate-45 transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-2 ${
          variant === "secondary" ? "bg-secondary" : ""
        }`}
        src={`/icons/arrow${variant === "secondary" ? "g" : ""}.png`}
        alt=""
      />
    </button>
  );
}
