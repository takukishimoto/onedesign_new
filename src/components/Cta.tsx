import TextLinkCTA from "@/components/TextLinkCTA";

const Cta = () => {
  return (
      <section className="py-28 bg-muted/25">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-light text-architectural mb-6">
              まずは状況を聞かせてください
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              「何から相談していいかわからない」段階でも大丈夫です。<br />
              目的・現状・優先順位を整理して、最短で成果につながる進め方をご提案します。
            </p>
                <div className="mt-10">
                <TextLinkCTA to="/contact" label="無料で相談する" />
</div>
            <p className="mt-6 text-xs text-muted-foreground">
              ※ 24時間以内に返信します（繁忙期は翌営業日）
            </p>
          </div>
        </div>
      </section>

        );
};

export default Cta;