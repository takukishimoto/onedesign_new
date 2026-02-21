import TextLinkCTA from "@/components/TextLinkCTA";

const Cta = () => {
  return (
    <section className="py-28 bg-muted/25">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light text-architectural mb-6">
            まずはホームページの状況を聞かせてください
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            「何から相談していいかわからない」段階でも大丈夫です。<br />
            目的・現状・優先順位を整理して、最短で成果につながるホームページ制作の進め方をご提案します。
          </p>

          {/* CTAボタン2つ */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
            <div className="w-full md:w-auto">
              <TextLinkCTA to="/freediagnosis" label="無料診断を受ける" />
            </div>

            <div className="w-full md:w-auto">
              <TextLinkCTA to="/contact" label="相談する" />
            </div>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            ※ 24時間以内に返信します（繁忙期は翌営業日）
          </p>

          {/* 診断の補足（安心材料） */}
          <p className="mt-3 text-xs text-muted-foreground">
            ※ 無料診断は「診断のみ」です。営業はしないのでご安心ください。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cta;