type BlogHeroProps = {
  title: string;
  description: string;
};

export function BlogHero({ title, description }: BlogHeroProps) {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">MYO Systems</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-6">{title}</h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  );
}
