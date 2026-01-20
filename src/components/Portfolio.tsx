import TextLinkCTA from "@/components/TextLinkCTA";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

const Portfolio = () => {
  const projects = [
    {
      image: project1,
      title: "宮澤悠維教育研究所",
      location: "諏訪郡原村",
      description: "ランディングページ制作, 運用管理",
    },
    {
      image: project2,
      title: "風の森建築",
      location: "諏訪郡原村",
      description: "HPリニューアル, Branding, 運用管理",
    },
    {
      image: project3,
      title: "韮崎東ケ丘病院",
      location: "韮崎市",
      description: "HPリニューアル, 運用管理",
    },
    {
      image: project4,
      title: "ONE DESIGN",
      location: "富士見町",
      description: "HPリニューアル",
    },
  ];

  return (
    <section id="work" className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">

          {/* ===== Heading ===== */}
          <div className="mb-24">
            <p className="text-minimal text-muted-foreground mb-4">制作実績</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">
              WORKS
            </h2>
          </div>

          {/* ===== Cards ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {projects.map((project, index) => (
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
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-[46vh]
                      md:h-[50vh]
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-[1.04]
                    "
                  />
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  <div>
                    <h3 className="text-xl font-light text-architectural">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.location}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-20">  
       <TextLinkCTA to="/work" label="制作実績を見る" /></div>
         

        </div>
        
      </div>
    </section>

    
  );
};

export default Portfolio;