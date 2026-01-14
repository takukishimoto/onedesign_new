import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";

type Photo = { src: string; alt: string };
type MapBlock = { name: string; address: string; embedSrc: string };
type Spot = {
  id: string;
  title: string;
  description?: JSX.Element;
  photos: Photo[];
  maps?: MapBlock[]; // 0〜複数OK（文章の下に縦積み）
};

const Section = ({ spot }: { spot: Spot }) => {
  const hasMultiplePhotos = spot.photos.length > 1;

  return (
    <section id={spot.id} className="grid md:grid-cols-2 gap-16 items-start scroll-mt-28">
      {/* TEXT */}
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <h2 className="text-xl md:text-2xl font-serif text-foreground">{spot.title}</h2>

        {spot.description ? <div className="space-y-5">{spot.description}</div> : null}

        {/* MAPS (文章の下) */}
        {spot.maps?.length ? (
          <div className="pt-4 space-y-10">
            {spot.maps.map((m) => (
              <div key={m.name} className="space-y-3">
                <p className="text-sm">
                  {m.name}
                  <br />
                  {m.address}
                </p>
                <iframe
                  className="w-full h-[320px] rounded-xl"
                  src={m.embedSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {/* IMAGE */}
      <figure className="overflow-hidden">
        {spot.photos.map((p, i) => (
          <img
            key={p.src + i}
            src={p.src}
            alt={p.alt}
            loading="lazy"
            className={`w-full h-auto object-cover rounded-2xl ${hasMultiplePhotos && i !== 0 ? "mt-5" : ""}`}
          />
        ))}
      </figure>
    </section>
  );
};

const Blog = () => {
  const spots: Spot[] = [
    {
      id: "haramura-park",
      title: "原村｜八ヶ岳自然文化園",
      description: (
        <>
          <p>
            原村にある八ヶ岳自然文化園。四季の変化を感じられる、静かで豊かな場所です。
          </p>
          <p>
            夏にはクラフト市や星空の映画祭なども開催され、人と自然の距離感が心地よく保たれています。
          </p>
        </>
      ),
      photos: [
        { src: "https://one-design.xyz/nagano/yatsugatake01.jpg", alt: "八ヶ岳自然文化園の風景" },
      ],
      // 旧ページに地図は無かったので無し（必要なら後で追加OK）
    },

    {
      id: "haramura-rice",
      title: "原村｜秋の稲",
      description: (
        <>
          <p>
            原村の秋。稲の色、空気の透明さ、遠景の稜線。短い季節にだけ現れる色合いが好きです。
          </p>
        </>
      ),
      photos: [{ src: "https://one-design.xyz/nagano/ine.jpg", alt: "原村の稲" }],
    },

    {
      id: "fujimi-yatsu",
      title: "富士見町｜八ヶ岳の風景",
      description: (
        <>
          <p>
            八ヶ岳麓の茅野市・原村・富士見・北杜市から、それぞれ表情の異なる八ヶ岳を見ることができます。
          </p>
        </>
      ),
      photos: [
        { src: "https://one-design.xyz/nagano/yatsu01.jpg", alt: "八ヶ岳の風景（富士見町）" },
      ],
    },

    {
      id: "shirakoma",
      title: "北八ヶ岳連峰｜白駒の池",
      description: (
        <>
          <p>
            茅野市からメルヘン街道で佐久穂町に向かう途中にある「白駒の池」。
            周辺ではコメツガやシラビソ、トウヒなど亜高山性針葉樹林が広がり、
            林床には様々な種類の苔が敷き詰められています。
          </p>
          <p>
            2008年に日本蘚苔類学会より「日本の貴重な苔の森」に選定。日本でも有数の美しい苔の森です。
          </p>
        </>
      ),
      photos: [
        { src: "https://one-design.xyz/nagano/koke01.jpg", alt: "白駒の池（苔の森）" },
        { src: "https://one-design.xyz/nagano/koke03.jpg", alt: "白駒の池（苔の森）" },
      ],
      maps: [
        {
          name: "白駒の池（入口付近）",
          address: "〒384-0704 長野県南佐久郡佐久穂町八郡 白駒池入口",
          embedSrc: "https://www.google.com/maps?q=白駒の池%20長野&output=embed",
        },
      ],
    },

    {
      id: "fujimori",
      title: "茅野市｜藤森照信建築（高過庵）",
      description: (
        <>
          <p>
            茅野市は建築家・藤森照信さんの出身地。諏訪大社 上社 前宮の近くで藤森建築を見ることができます。
          </p>
        </>
      ),
      photos: [
        { src: "https://one-design.xyz/nagano/tino01.jpg", alt: "茅野市 高過庵" },
        { src: "https://one-design.xyz/nagano/tino02.jpg", alt: "茅野市 高過庵" },
      ],
      maps: [
        {
          name: "高過庵",
          address: "〒391-0013 長野県茅野市宮川389-1",
          embedSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3228.061840023991!2d138.12484125101554!3d35.99435558002483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601c56fc650589fb%3A0x78a42a8d296401d1!2z6Jek5qOu54Wn5L-h44CM6auY6YGO5bq144CN!5e0!3m2!1sja!2sjp!4v1645059530711!5m2!1sja!2sjp",
        },
      ],
    },

    {
      id: "takabe-community",
      title: "茅野市｜高部公民館",
      description: (
        <>
          <p>
            茅野市 高部地区出身の藤森照信さん設計の公民館。建物の佇まいがとても良いです。
          </p>
        </>
      ),
      photos: [
        { src: "https://one-design.xyz/nagano/chinoshi01.jpg", alt: "茅野市 高部公民館" },
        { src: "https://one-design.xyz/nagano/chinoshi02.jpg", alt: "茅野市 高部公民館" },
      ],
      maps: [
        {
          name: "高部公民館",
          address: "〒391-0013 長野県茅野市宮川高部95-イ",
          embedSrc:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12912.020136604287!2d138.1293081!3d35.9957436!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc26456fc2a2bdcd3!2z6auY6YOo5YWs5rCR6aSo!5e0!3m2!1sja!2sjp!4v1645925465984!5m2!1sja!2sjp",
        },
      ],
    },

    {
      id: "shimosuwa-harumiya",
      title: "下諏訪｜諏訪大社 下社 春宮",
      description: (
        <>
          <p>
            日本最古の神社の一つと言われる諏訪大社。諏訪湖周辺（諏訪郡、諏訪市、茅野市）に4箇所のお宮をもつ神社です。
          </p>
          <p>
            春宮の近くには、岡本太郎さんもお気に入りだったことでも有名な「万治の石仏」があります。
          </p>
          <p className="text-sm text-muted-foreground">
            参拝自由（社務所は9:00～17:00）／ 定休日なし ／ 0266-27-8316
          </p>
        </>
      ),
      photos: [
        { src: "https://one-design.xyz/nagano/suwa05.jpg", alt: "諏訪大社 下社 春宮" },
        { src: "https://one-design.xyz/nagano/suwa03.jpg", alt: "万治の石仏" },
      ],
      maps: [
        {
          name: "諏訪大社 下社 春宮",
          address: "長野県諏訪郡下諏訪町大門193",
          embedSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.4916361865594!2d138.07991310103782!3d36.08150178000524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601daaaa5aee4987%3A0xfef9276e1ce587e8!2z6KuP6Kiq5aSn56S-IOS4i-ekviDmmKXlrq4!5e0!3m2!1sja!2sjp!4v1645320008266!5m2!1sja!2sjp",
        },
        {
          name: "万治の石仏",
          address: "長野県諏訪郡下諏訪町193",
          embedSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6448.935513021066!2d138.0786372990242!3d36.08208405375012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8023739d8f57420f!2z5LiH5rK744Gu55-z5LuP!5e0!3m2!1sja!2sjp!4v1645060786995!5m2!1sja!2sjp",
        },
      ],
    },

    {
      id: "suwa-honmiya",
      title: "諏訪市｜諏訪大社 上社 本宮",
      description: (
        <>
          <p>
            茅野市にある「諏訪大社 上社 本宮」。布橋（屋根付きの67mにも及ぶ長い通路）が雰囲気あります。
          </p>
          <p className="text-sm text-muted-foreground">
            参拝自由（社務所は9:00～17:00）／ 定休日なし ／ 0266-52-1919
          </p>
        </>
      ),
      photos: [
        { src: "https://one-design.xyz/nagano/suwa04.jpg", alt: "諏訪大社 上社 本宮" },
        { src: "https://one-design.xyz/nagano/nagano_web_design.jpg", alt: "諏訪大社 上社 本宮（風景）" },
      ],
      maps: [
        {
          name: "諏訪大社 上社 本宮",
          address: "長野県諏訪市中洲 宮山1",
          embedSrc:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12911.62220466635!2d138.1193957!3d35.9981743!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x188189f41edb036c!2z6KuP6Kiq5aSn56S-IOS4iuekviDmnKzlrq4!5e0!3m2!1sja!2sjp!4v1646120364792!5m2!1sja!2sjp",
        },
      ],
    },

    {
      id: "fuji-view",
      title: "北杜市・富士見町｜富士山ビュースポット",
      description: (
        <>
          <p>
            長野県の富士見町や山梨県の北杜市、韮崎市からは富士山が見ることができます。
          </p>
        </>
      ),
      photos: [
        { src: "https://one-design.xyz/nagano/fuji01.jpg", alt: "八ヶ岳エリアから見る富士山" },
        { src: "https://one-design.xyz/nagano/fuji02.jpg", alt: "八ヶ岳エリアから見る富士山" },
      ],
      maps: [
        {
          name: "富士見町 八ヶ岳富士山ビュースポット",
          address: "長野県諏訪郡富士見町立沢",
          embedSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3230.0536712908724!2d138.24847695103458!3d35.94565698003597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x393b75df9e9ddd6f!2zMzXCsDU2JzQ0LjQiTiAxMzjCsDE1JzAyLjQiRQ!5e0!3m2!1sja!2sjp!4v1645062381939!5m2!1sja!2sjp",
        },
        {
          name: "北杜市 八ヶ岳富士山ビュースポット",
          address: "山梨県北杜市大泉町 西井出 8240-1",
          embedSrc:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3032.0487975903825!2d138.40640458809946!3d35.92365555459246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601c3feb7d1bb51d%3A0xc7abfd01526ed718!2z5bGx5qKo55yM56uLIOOBvuOBjeOBsOWFrOWckg!5e0!3m2!1sja!2sjp!4v1645320096690!5m2!1sja!2sjp",
        },
      ],
    },

    {
      id: "kurumayama",
      title: "茅野市・諏訪市｜車山",
      description: (
        <>
          <p>
            車山は長野県茅野市と諏訪市の境にあります。霧ヶ峰で一番高い山で標高は1925m。
          </p>
          <p>
            山頂近くまで自動車で行くことができ、頂上までは80分ほどで登ることができます。
          </p>
        </>
      ),
      photos: [
        { src: "https://one-design.xyz/nagano/kuruma01.jpg", alt: "車山の風景" },
        { src: "https://one-design.xyz/nagano/kuruma02.jpg", alt: "車山の風景" },
      ],
      maps: [
        {
          name: "車山",
          address: "長野県茅野市米沢北大塩、諏訪市（周辺）",
          embedSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25788.83824057043!2d138.17933810046006!3d36.103121126259445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601c531cfacefacd%3A0x1d034109001fb5e9!2z6LuK5bGx!5e0!3m2!1sja!2sjp!4v1645408097846!5m2!1sja!2sjp",
        },
      ],
    },

    {
      id: "tanaka-honke",
      title: "須坂｜豪商の館・田中本家博物館",
      description: (
        <>
          <p>
            長野県須坂にある豪商の館・田中本家博物館。江戸時代の豪商の館を利用した博物館です。
          </p>
          <p>
            建築、器、人形などが楽しめます。着物柄などデザインの観点から見ても美しい数々の品は一見の価値があります。
          </p>
        </>
      ),
      photos: [
        { src: "https://one-design.xyz/nagano/nagano_web04.jpg", alt: "田中本家博物館" },
      ],
    },

    {
      id: "matsumoto-mingeikan",
      title: "松本｜松本民藝館（まつもとみんげいかん）",
      description: (
        <>
          <p>
            丸山太郎によって創館された長野県松本市の松本民藝館。世界各国から蒐集された美しい民藝品を展示しています。
          </p>
          <p>
            日常の中から生まれ、使われてきたロングライフデザイン。素晴らしいです。
          </p>
        </>
      ),
      photos: [
        { src: "https://one-design.xyz/nagano/nagano_web07.JPG", alt: "松本民藝館" },
        { src: "https://one-design.xyz/nagano/nagano_web08.JPG", alt: "松本民藝館" },
      ],
      maps: [
        {
          name: "松本民藝館",
          address: "長野県松本市里山辺1313-1",
          embedSrc:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12871.468523589141!2d137.9946708!3d36.2427215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe38665185c54f93a!2z5p2-5pys5rCR6Iq46aSo!5e0!3m2!1sja!2sjp!4v1645319913705!5m2!1sja!2sjp",
        },
      ],
    },

    {
      id: "kiso-town",
      title: "木曽｜古い町並み",
      description: (
        <>
          <p>
            今も古い町並みを残す木曽の宿場。木曽には今も昔の佇まいを残す宿場が残っていて、
            「奈良井宿」「馬籠宿」などは観光地としても有名です。
          </p>
          <p>
            町並みだけでなく、古い看板のフォントなど、ホームページ制作に役立ちそうなものも多く、
            見ているだけで楽しめます。
          </p>
        </>
      ),
      photos: [
        { src: "https://one-design.xyz/nagano/nagano_web09.jpg", alt: "木曽の町並み" },
        { src: "https://one-design.xyz/nagano/nagano_web10.jpg", alt: "木曽の町並み" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* HERO */}
      <PageHero
        label="日記"
        enTitle="JOURNAL"
        jpTitle={
          <>
            諏訪・茅野・八ヶ岳の
            <br />
            写真とデザインの記録
          </>
        }
        lead={
          <>
            八ヶ岳エリアで出会った風景・建築・場所を、
            <br />
            デザインの視点でまとめています。
          </>
        }
      />

      {/* CONTENT */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <article className="max-w-6xl mx-auto space-y-28">
            {/* INTRO */}
            <section className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
              <h1 className="text-2xl md:text-3xl font-serif text-foreground">
                諏訪・茅野・八ヶ岳の風景とデザイン
              </h1>
              <p>
                長野県（諏訪市・茅野市・原村・富士見町）、
                山梨県（北杜市・韮崎市）を中心に、
                日々撮影している風景や建築の記録です。
              </p>
              <p>
                看板、建築、街並み、自然。
                仕事としてデザインに向き合う中で、
                日常の中にある「美しさ」を大切にしています。
              </p>
            </section>

            {/* TOC */}
<nav className="max-w-6xl mx-auto">
  <div className="border-t border-b border-border py-6">
    <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
      {spots.map((spot) => (
        <a
          key={spot.id}
          href={`#${spot.id}`}
          className="hover:text-foreground transition"
        >
          {spot.title}
        </a>
      ))}
    </div>
  </div>
</nav>

            {/* SECTIONS */}
            <div className="space-y-28">
              {spots.map((spot) => (
                <Section key={spot.id} spot={spot} />
              ))}
            </div>

            {/* CTA */}
            <Cta />
          </article>
        </div>
      </section>
      {/* Back to top */}
<div className="fixed bottom-6 right-6 z-50">
  <a
    href="#haramura-park"
    className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur text-sm text-muted-foreground hover:text-foreground hover:bg-background transition shadow-sm"
  >
    ↑ 上へ
  </a>
</div>
      <Footer />
    </div>
  );
};

export default Blog;