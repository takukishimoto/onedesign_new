import { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import TextLinkCTA from "@/components/TextLinkCTA";

import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

type Project = {
  image: string;
  title: string;
  location: string;
  category: "WEB" | "BRANDING" | "SEO";
  description: string;
  year?: string;
};

const Work = () => {
  const [activeCategory, setActiveCategory] = useState<"ALL" | Project["category"]>("ALL");

  // ✅ category を必ず入れる（ここが今回の修正点）
  const projects: Project[] = [
    {
      image: project1,
      title: "宮澤悠維教育研究所",
      location: "諏訪郡原村",
      category: "WEB",
      description: "ランディングページ制作, 運用管理",
      year: "2024",
    },
    {
      image: project2,
      title: "風の森建築",
      location: "諏訪郡原村",
      category: "BRANDING",
      description: "HPリニューアル, Branding, 運用管理",
      year: "2025",
    },
    {
      image: project3,
      title: "韮崎東ケ丘病院",
      location: "韮崎市",
      category: "WEB",
      description: "HPリニューアル, 運用管理",
      year: "2023",
    },
    {
      image: project4,
      title: "ONE DESIGN",
      location: "富士見町",
      category: "SEO",
      description: "HPリニューアル",
      year: "2026",
    },
  ];

  const categories: Array<"ALL" | Project["category"]> = ["ALL", "WEB", "BRANDING", "SEO"];

  const filteredProjects = useMemo(() => {
    return activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <div id="top" className="min-h-screen bg-background">
      <Navigation />

      <PageHero
        label="制作実績"
        enTitle="Works"
        jpTitle={<>伝える設計で、成果につなげる。</>}
        bottom="Web / Design / Branding / Marketing"
      />

      {/* FILTER */}
      {/* <section className="pb-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-x-10 gap-y-4 justify-center md:justify-start">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`relative text-xs tracking-[0.28em] transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {category}
                    <span
                      className={`absolute -bottom-2 left-0 h-px w-full bg-foreground transition-transform origin-left ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="mt-10 h-px w-full bg-border" />
          </div>
        </div>
      </section> */}

      {/* PROJECTS */}
      <section className="pb-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {filteredProjects.map((project, index) => (
                <article
                  key={index}
                  className="
                    group
                    border border-border
                    bg-background
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                  "
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="
                        w-full
                        h-[46vh]
                        md:h-[50vh]
                        object-cover
                        transition-transform duration-700
                        group-hover:scale-[1.04]
                      "
                    />

                    {/* category tag */}
                    <div className="absolute left-6 top-6">
                      <span className="inline-flex items-center border border-border bg-background/70 backdrop-blur px-3 py-2 text-[11px] tracking-[0.22em] text-foreground">
                        {project.category}
                      </span>
                    </div>

                    {/* year */}
                    {project.year ? (
                      <div className="absolute right-6 top-6">
                        <span className="inline-flex items-center border border-border bg-background/70 backdrop-blur px-3 py-2 text-[11px] tracking-[0.22em] text-muted-foreground">
                          {project.year}
                        </span>
                      </div>
                    ) : null}
                  </div>

                  <div className="p-8 space-y-4">
                    <div>
                      <h3 className="text-xl font-light text-architectural">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.location}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-20">
              <TextLinkCTA to="/contact" label="相談する" />
            </div>
          </div>
        </div>
      </section>

      <Cta />

   

      <Footer />
    </div>
  );
};

export default Work;