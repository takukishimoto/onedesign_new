import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import TextLinkCTA from "@/components/TextLinkCTA";

const Hojyokin = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHero
        label="補助金"
        enTitle="SUBSIDY"
        jpTitle={
          <>
            補助金を活用した
            <br />
            ホームページ制作
          </>
        }
        lead={
          <>
            「作りたいけど予算が心配」な方へ。
            <br />
            条件に合えば、制作費の一部を補助金でカバーできます。
          </>
        }
      />

      <section className="pb-32">
        <div className="container mx-auto px-6">
          <article className="max-w-6xl mx-auto space-y-28">
            {/* INTRO */}
            <section className="max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
              <h1 className="font-serif text-2xl md:text-3xl text-foreground">
                補助金で、制作費の負担を抑える選択肢
              </h1>
              <p>
                補助金制度を活用できる場合、ホームページ制作費用の
                <span className="text-foreground">一部（例：最大2/3＝約66%）</span>
                が補助対象になることがあります。
              </p>
              <p className="text-sm">
                ※補助率・上限・対象経費・要件は制度や公募回によって変わります。まずは「使える可能性があるか」を一緒に確認します。
              </p>
            </section>

            {/* BENEFITS */}
            <section className="space-y-10">
              <div className="space-y-3">
                <p className="text-minimal text-muted-foreground">MERIT</p>
                <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground">
                  補助金を活用するメリット
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-border p-7">
                  <p className="text-xs text-muted-foreground mb-2">01</p>
                  <h3 className="text-lg font-light text-foreground mb-3">制作費用の負担軽減</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    例：30万円の制作が、条件によっては自己負担を抑えられるケースがあります。
                  </p>
                </div>

                <div className="border border-border p-7">
                  <p className="text-xs text-muted-foreground mb-2">02</p>
                  <h3 className="text-lg font-light text-foreground mb-3">プロ品質で作れる</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    デザイン・導線・文章設計・SEOまで、事業に合う形で整えられます。
                  </p>
                </div>

                <div className="border border-border p-7">
                  <p className="text-xs text-muted-foreground mb-2">03</p>
                  <h3 className="text-lg font-light text-foreground mb-3">信頼性と成果につながる</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    “見た目”だけでなく、問い合わせ・採用・販路拡大まで見据えた設計が可能です。
                  </p>
                </div>
              </div>
            </section>

            {/* WHO */}
            <section className="grid md:grid-cols-2 gap-14 items-start">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-minimal text-muted-foreground">TARGET</p>
                <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground">
                  こんな方が対象になりやすいです
                </h2>

                <ul className="space-y-3 text-sm">
                  <li>・小規模事業者／個人事業主／中小企業</li>
                  <li>・販路拡大、集客、採用強化など「目的」が明確</li>
                  <li>・事業計画（やりたいこと）が言語化できる</li>
                  <li>・申請〜実績報告まで、期限を守って進められる</li>
                </ul>

                <p className="text-sm">
                  「自分が対象か分からない」「何を書けばいいか不安」でも大丈夫です。状況に合わせて整理します。
                </p>
              </div>

              <div className="border border-border p-8 space-y-6">
                <p className="text-minimal text-muted-foreground">EXAMPLE</p>
                <h3 className="text-xl font-light text-foreground">費用イメージ（例）</h3>

                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between gap-6 border-b border-border pb-3">
                    <span>制作費</span>
                    <span className="text-foreground/90">300,000円</span>
                  </div>
                  <div className="flex items-center justify-between gap-6 border-b border-border pb-3">
                    <span>補助（最大2/3の例）</span>
                    <span className="text-foreground/90">200,000円</span>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <span>自己負担</span>
                    <span className="text-foreground font-medium">100,000円</span>
                  </div>

                  <p className="text-xs pt-2">
                    ※上記は「概念をつかむための例」です。制度・上限・対象経費・採択結果により変わります。
                  </p>
                </div>
              </div>
            </section>

            {/* FLOW */}
            <section className="space-y-10">
              <div className="space-y-3">
                <p className="text-minimal text-muted-foreground">FLOW</p>
                <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground">
                  進め方（ざっくり全体像）
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { step: "01", title: "無料相談", body: "目的・現状・スケジュールを確認。補助金が使えそうかを整理します。" },
                  { step: "02", title: "要件確認・方向性", body: "制度要件に合わせて「何を作るか」を設計（構成・導線・必要ページ）。" },
                  { step: "03", title: "申請準備サポート", body: "申請書に必要な“整理”を手伝います（文章の骨子、制作内容の整理など）。" },
                  { step: "04", title: "採択後に制作開始", body: "採択後に制作へ。進行・成果物・運用まで一貫して対応します。" },
                ].map((x) => (
                  <div key={x.step} className="border border-border p-7">
                    <p className="text-xs text-muted-foreground mb-2">{x.step}</p>
                    <h3 className="text-lg font-light text-foreground mb-3">{x.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{x.body}</p>
                  </div>
                ))}
              </div>

              <div className="border border-border p-7 text-sm text-muted-foreground leading-relaxed">
                <p className="text-foreground/90 font-medium mb-2">大事なポイント</p>
                <p>
                  補助金は「採択されれば必ずOK」ではなく、制度ごとにルールがあります。
                  なので最初に <span className="text-foreground">“申請の前提に合う設計”</span> を作るのが重要です。
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section className="space-y-10">
              <div className="space-y-3">
                <p className="text-minimal text-muted-foreground">FAQ</p>
                <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground">
                  よくある質問
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    q: "どの補助金が使えるか分かりません。",
                    a: "OKです。業種・所在地・目的・スケジュールを伺って、可能性がある制度を一緒にあたります。",
                  },
                  {
                    q: "申請書が不安です。",
                    a: "「書き方」よりも、まず“伝えるべき内容の整理”が大切です。ヒアリングをもとに、骨子づくりをサポートします。",
                  },
                  {
                    q: "補助金が通らなかったらどうなりますか？",
                    a: "その場合でも、通常制作として進める選択肢があります（内容・予算に合わせて再設計します）。",
                  },
                  {
                    q: "制作範囲はどこまで？",
                    a: "サイト設計／デザイン／実装／写真撮影（必要に応じて）／SEOの土台まで。目的に合わせて提案します。",
                  },
                ].map((f) => (
                  <details key={f.q} className="border border-border p-6">
                    <summary className="cursor-pointer text-foreground/90">
                      {f.q}
                    </summary>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* CONTACT CTA (このページ専用) */}
            <section className="space-y-8">
              <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
                <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground">
                  まずは「使える可能性があるか」だけでも
                </h2>
                <p>
                  条件やタイミング次第で、合う制度が変わります。
                  相談は無料なので、現状と目的を教えてください。
                </p>
              </div>

              <div className="flex justify-center">
                <TextLinkCTA to="/contact" label="無料で相談する" />
              </div>

              <p className="text-xs text-muted-foreground text-center">
                ※補助金の採択を保証するものではありません。制度の要件・審査・締切は公募により変動します。
              </p>
            </section>

            {/* Site CTA（共通） */}
            <Cta />
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hojyokin;