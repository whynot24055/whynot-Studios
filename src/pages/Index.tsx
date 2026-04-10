import logo from "@/assets/logo.png";

const DISCORD_LINK = "https://discord.gg/Hffma3dxP4";

const Particles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 30 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-primary/40"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `particle ${3 + Math.random() * 4}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
  </div>
);

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-8">
    <Particles />
    <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
      <img
        src={logo}
        alt="Whynot Studios Logo"
        className="w-64 md:w-80 lg:w-96 animate-float mb-8"
      />
      <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-glow text-primary mb-6 animate-fade-in-up">
        Custom Minecraft Plugins for Your Server
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in-up animation-delay-200">
        Unique systems, abilities and features to make your server stand out
      </p>
      <a
        href="#packages"
        className="px-8 py-4 bg-primary text-primary-foreground font-display font-bold rounded-lg text-lg box-glow hover:box-glow-strong transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-400"
      >
        View Packages
      </a>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

const packages = [
  {
    name: "Small Package",
    price: "15€",
    description: "Simple systems",
    features: ["Vote system", "Basic commands", "Small features"],
    popular: false,
  },
  {
    name: "Medium Package",
    price: "30€",
    description: "Advanced features",
    features: ["Custom RTP system", "Daily reward system", "Improved gameplay mechanics"],
    popular: true,
  },
  {
    name: "Large Package",
    price: "75€",
    description: "Fully custom systems",
    features: ["Custom economy system", "Vault integration", "Complex mechanics"],
    note: "Fully customizable to your needs",
    popular: false,
  },
];

const PackagesSection = () => (
  <section id="packages" className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-glow text-primary mb-16 animate-fade-in-up">
        Packages
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg, i) => (
          <div
            key={pkg.name}
            className={`relative rounded-xl border bg-card p-8 flex flex-col transition-all duration-300 hover:scale-105 hover:box-glow-strong animate-fade-in-up ${
              pkg.popular
                ? "border-primary box-glow"
                : "border-border hover:border-glow"
            }`}
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-display font-bold rounded-full">
                POPULAR
              </div>
            )}
            <h3 className="font-display text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
            <p className="text-4xl font-display font-bold text-primary text-glow mb-4">{pkg.price}</p>
            <p className="text-muted-foreground mb-6">{pkg.description}</p>
            <ul className="space-y-3 mb-8 flex-1">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-foreground">
                  <span className="text-primary">✦</span> {f}
                </li>
              ))}
            </ul>
            {pkg.note && (
              <p className="text-sm text-primary/80 italic mb-4">{pkg.note}</p>
            )}
            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-primary text-primary-foreground font-display font-bold rounded-lg text-center hover:box-glow-strong transition-all duration-300 block"
            >
              Order via Discord
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const steps = [
  { num: "01", title: "Choose a Package", desc: "Pick the plan that fits your needs" },
  { num: "02", title: "Join Discord", desc: "Connect with us on our server" },
  { num: "03", title: "Describe Your Idea", desc: "Tell us exactly what you want" },
  { num: "04", title: "Get Your Plugin", desc: "Receive your custom-built plugin" },
];

const HowItWorksSection = () => (
  <section className="py-24 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-glow text-primary mb-16 animate-fade-in-up">
        How It Works
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className="text-center p-6 rounded-xl border border-border bg-card hover:border-glow hover:box-glow transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="font-display text-4xl font-bold text-primary text-glow mb-4">{step.num}</div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-24 px-4">
    <div className="max-w-3xl mx-auto text-center rounded-2xl border border-primary/30 bg-card p-12 box-glow animate-fade-in-up">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-glow text-primary mb-6">
        Want Your Own Custom System?
      </h2>
      <p className="text-muted-foreground text-lg mb-8">
        Let's bring your vision to life. Join the Discord and tell me about your project.
      </p>
      <a
        href={DISCORD_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-10 py-4 bg-primary text-primary-foreground font-display font-bold rounded-lg text-lg box-glow hover:box-glow-strong transition-all duration-300 hover:scale-105"
      >
        Join My Discord to Order
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border py-12 px-4">
    <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-3">
      <p className="font-display text-lg font-bold text-primary text-glow">Whynot Studios</p>
      <p className="text-muted-foreground">Custom Minecraft Development</p>
      <a
        href={DISCORD_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        Discord Server
      </a>
      <p className="text-muted-foreground text-sm mt-4">© 2026 Whynot Studios. All rights reserved.</p>
    </div>
  </footer>
);

const Index = () => (
  <div className="min-h-screen bg-background">
    <HeroSection />
    <PackagesSection />
    <HowItWorksSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
