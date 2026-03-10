import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function SuwaSoloLP() {
const areas = [
  "諏訪市",
  "茅野市",
  "原村",
  "富士見町",
  "岡谷市",
  "下諏訪町",
  "北杜市",
];

const pains = [
  "諏訪市でホームページ制作を検討している",
  "開業に合わせてホームページを作りたい",
  "ホームページはあるが問い合わせが増えない",
  "「諏訪市 〇〇」で検索しても出てこない",
  "古いホームページをリニューアルしたい",
  "スマホで見づらいサイトを改善したい",
];

  const points = [
     {
    title: "中小企業・個人事業主の「独自の強み」を言語化・視覚化",
    body: "ヒアリングを通じて、当たり当り前すぎて気づかない「選ばれる理由」を抽出。プロの視点でコンテンツへ落とし込みます。",
  },
  {
    title: "諏訪市周辺なら対面での打ち合わせ・取材が可能",
    body: "甲府市から北杜市までフットワーク軽くお伺いします。現場の熱量やこだわりを直接感じることで、血の通った、温度感のあるサイト制作を実現します。",
  },
  {
    title: "ホームページデザイン＋集客（SEO）まで設計",
    body: "見た目だけでなく、検索や導線から問い合わせにつながる形を重視します。",
  },
  {
    title: "集客と採用、両面から攻めるサイト設計",
    body: "地元の顧客に届くSEO（検索対策）はもちろん、求職者が「ここで働きたい」と思えるストーリー構築まで、ビジネスの成長に必要な導線を作ります。",
  },
  {
    title: "写真・文章・保守まで一貫した伴走支援",
    body: "撮影やライティングの代行、公開後の運用サポートまで対応。Web担当者がいない現場でも、二人三脚でサイトを育てていくことが可能です。",
  },
  {
    title: "予算に合わせて“必要最小限”から提案できます",
    body: "全部やる前提ではなく、今の状況と予算に合わせて「最小で効果が出る形」を提案します。",
  },
  ];

  // 「見せないプラン」前提：無料診断→提案→必要なら制作
  const flow = [
    {
      t: "無料診断（15分）",
      d: "いまの状況を伺いながら、改善ポイントを3つに整理します（画面を見ながらOK）。",
    },
    {
      t: "優先順位と次の一手を提案",
      d: "「どこから手を付けるべきか」を明確にします（診断のみで終了もOK）。",
    },
    {
      t: "必要な範囲だけ制作・改善",
      d: "新規／リニューアルどちらも、状況と予算に合わせて必要最小限から組めます。",
    },
  ];

  const faqs = [
    {
q: "諏訪市でも対面打ち合わせできますか？",
a: "諏訪市・茅野市・原村・富士見町など諏訪地域で対面対応しています。オンライン打ち合わせも可能です。",    },
    {
      q: "まずは診断・相談だけでも大丈夫？",
      a: "大丈夫です。診断は「診断のみ」ですし相談も無料です。営業はしないのでご安心ください。",
    },
    {
      q: "ホームページ制作費がどれくらいになるか不安です。予算が限られていても相談できますか？",
      a: "相談できます。状況を見たうえで「必要最小限で整える案」も含めて、無理のない範囲で提案します（内容は相談・無料診断後に共有します）。",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
    <Seo
  title="諏訪市のホームページ制作｜中小企業・個人事業主向け｜ONE DESIGN"
  description="諏訪市の中小企業・個人事業主向けに、集客につながるホームページ制作を行っています。SEO対策・スマホ対応・WordPress対応。諏訪市・茅野市・原村・富士見町など諏訪地域対応。"
/>

      <Navigation />

      {/* HERO */}
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl overflow-hidden border border-border">
            <div className="relative px-6 py-14 md:px-12 md:py-16">
              <div className="absolute inset-0 animated-gradient" />
              <div className="absolute -inset-24 blob-layer" />
              <div className="absolute inset-0 bg-black/10 dark:bg-black/35" />

              <div className="relative z-10 mx-auto max-w-4xl">
                <p className="text-minimal tracking-[0.22em] text-white/80 mb-4">
SUWA / WEB DESIGN
</p>

<h1 className="text-2xl md:text-4xl font-light text-white leading-tight">
諏訪市のビジネスを加速させる
<span className="block mt-2 text-white/90 text-2xl md:text-3xl">
ホームページ制作・リニューアル
</span>
</h1>

                {/* ★ここが肝：価格は出さず、見せないプランの“安心”だけ出す */}
                <p className="mt-6 text-white/85 text-sm md:text-base leading-relaxed">
                 「事業に見合うサイトがほしい」「求人や集客の反応を良くしたい」「補助金を活用したい」<br className="hidden md:block" />
        諏訪市の商圏を理解したクリエイターが、中小企業から個人事業主まで幅広くサポート。<br />
        まずは無料診断（15分）で、現状の課題整理と「次の一手」を明確にしませんか。
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {/* 主ボタン */}
                  <a
                    href="/freediagnosis"
                    className="
                      inline-flex items-center justify-center
                      rounded-xl px-6 py-3 text-sm font-medium
                      bg-white text-black
                      hover:bg-white/90 transition
                      shadow-[0_18px_60px_rgba(0,0,0,0.25)]
                    "
                  >
                    無料診断（15分）を申し込む →
                  </a>

                  {/* サブボタン */}
                  <a
                    href="#why"
                    className="
                      inline-flex items-center justify-center
                      rounded-xl px-6 py-3 text-sm font-medium
                      border border-white/40 bg-white/10 text-white
                      hover:bg-white/15 transition
                      backdrop-blur
                    "
                  >
                    できることを見る
                  </a>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-2 text-xs text-white/80">
                  {areas.map((a) => (
                    <span
                      key={a}
                      className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-md"
                    >
                      {a}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-xs text-white/75">
                  ※ 無料診断は「診断のみ」です。営業はしないのでご安心ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-3 md:grid-cols-1 gap-10">
            {/* Left */}
            <div className="col-span-2 md:col-span-1 space-y-10">
              <section className="rounded-3xl border border-border bg-background shadow-sm p-7 md:p-8">
                <h2 className="text-xl font-medium text-foreground">諏訪市でこのような課題をお持ちの企業・個人様へ</h2>
                <ul className="mt-5 space-y-3 text-muted-foreground">
                  {pains.map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-[0.6em] h-1 w-1 rounded-full bg-foreground/40 flex-none" />
                      <span className="leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>

                {/* ここに導線（見せないプラン運用で安心を出す） */}
                <div className="mt-7 rounded-2xl border border-border bg-muted/20 p-5">
                  <p className="text-sm text-foreground font-medium">
                    無料診断（15分）で、いまのホームページを整理しませんか
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    画面を見ながら改善ポイントを3つに整理します。<br />
                    診断のみで完結OK。営業はしないのでご安心ください。<br />
                    予算に合わせた最小構成の提案も可能です（診断後に共有）。
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    {/* 主：無料診断 */}
                    <a
                      href="/freediagnosis"
                      className="
                        inline-flex items-center justify-center
                        rounded-xl px-6 py-3 text-sm font-medium
                        bg-foreground text-background
                        hover:opacity-90 transition
                        shadow-sm
                      "
                    >
                      無料診断（15分）を申し込む →
                    </a>

                    {/* サブ：相談 */}
                    <a
                      href="/contact"
                      className="
                        inline-flex items-center justify-center
                        rounded-xl px-6 py-3 text-sm font-medium
                        border border-border bg-background
                        hover:bg-muted/40 transition
                      "
                    >
                      相談する
                    </a>
                  </div>
                </div>
              </section>

              <section id="why" className="rounded-3xl border border-border bg-background shadow-sm p-7 md:p-8">
                <h2 className="text-xl font-medium text-foreground">諏訪市の中小企業・個人事業主に選ばれる理由</h2>
                <div className="mt-6 grid grid-cols-3 md:grid-cols-1 gap-4">
                  {points.map((x) => (
                    <div key={x.title} className="rounded-2xl border border-border bg-muted/20 p-5">
                      <p className="font-medium text-foreground">{x.title}</p>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl border border-border bg-background shadow-sm p-7 md:p-8">
                <h2 className="text-xl font-medium text-foreground">無料診断の流れ（15分）</h2>
                <ol className="mt-6 space-y-3">
                  {flow.map((x) => (
                    <li key={x.t} className="rounded-2xl border border-border bg-background p-5">
                      <p className="font-medium text-foreground">{x.t}</p>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.d}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="rounded-3xl border border-border bg-background shadow-sm p-7 md:p-8">
                <h2 className="text-xl font-medium text-foreground">よくある質問</h2>
                <div className="mt-6 space-y-4">
                  {faqs.map((x) => (
                    <details key={x.q} className="rounded-2xl border border-border bg-muted/20 p-5">
                      <summary className="cursor-pointer text-foreground font-medium">
                        {x.q}
                      </summary>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {x.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            {/* Right (Sticky CTA) */}
            <div className="col-span-1">
              <div className="md:static sticky top-6 rounded-3xl border border-border bg-background shadow-sm">
                <div className="p-6">
                  <p className="text-minimal tracking-[0.22em] text-muted-foreground">FREE DIAGNOSIS</p>
                  <h2 className="mt-2 text-2xl font-medium text-foreground">無料診断（15分）</h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    いまの状況を整理して、改善ポイントを3つにまとめます。<br />
                    診断のみでOKです。
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href="/freediagnosis"
                      className="
                        inline-flex items-center justify-center
                        rounded-xl px-6 py-3 text-sm font-medium
                        bg-foreground text-background
                        hover:opacity-90 transition
                        shadow-sm
                      "
                    >
                      無料診断（15分）を申し込む →
                    </a>
                    <a
                      href="/contact"
                      className="
                        inline-flex items-center justify-center
                        rounded-xl px-6 py-3 text-sm font-medium
                        border border-border bg-background
                        hover:bg-muted/40 transition
                      "
                    >
                      相談する
                    </a>
                  </div>

                  <p className="mt-5 text-xs text-muted-foreground leading-relaxed">
                    ※ 無料診断は「診断のみ」です。営業はしないのでご安心ください。
                  </p>

                  <div className="mt-6 rounded-2xl border border-border bg-muted/20 p-4">
                    <p className="text-sm text-foreground font-medium">対応</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      諏訪地域全域対応（諏訪市・岡谷市・下諏訪町・茅野市・原村・富士見町）／オンライン対応
                    </p>
                  </div>

                  <div className="mt-4 rounded-2xl border border-border bg-muted/20 p-4">
                    <p className="text-sm text-foreground font-medium">補足</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      ホームページ制作は予算に合わせた最小構成の提案も可能です（内容は相談・無料診断後に共有します）。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}