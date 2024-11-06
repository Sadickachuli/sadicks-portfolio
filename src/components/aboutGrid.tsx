import {
  Eight,
  Five,
  Four,
  Nine,
  One,
  Seven,
  Six,
  Three,
  Two,
} from "./aboutPage/gridParts";

export default function AboutGrid() {
  return (
    <article className="padd columns-3 md:columns-2 sm:columns-1">
      <One />
      <Two />
      <Four />
      <Three />
      <Five />
      <Six />
      <Seven />
      <Eight />
      <Nine />
    </article>
  );
}
