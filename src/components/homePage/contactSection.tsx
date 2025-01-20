export default function ContactSection() {
  return (
    <article className="bg-secondary/50 padd py-12">
      <section className="text-9xl font-sans pb-10">
        <p>Let's talk</p>
      </section>
      <section>
        <aside>
          <div></div>
          <div></div>
        </aside>
      </section>
      <section className="flex justify-between text-gray-500 pt-12 border-t border-primary/30">
        <div className="relative group overflow-hidden">
          <p className="group-hover:bottom-full">Cookies and privacy</p>
          <p className="text-primary absolute top-full left-0 group-hover:-translate-y-full transition-all duration-100">
            Cookies and privacy
          </p>
        </div>
        <p>Copyright&copy;2025.AristideIsingizwe.AllRightsReserved</p>
      </section>
    </article>
  );
}
