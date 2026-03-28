import fs from "fs";
import path from "path";

const routes = [
  {
    route: "/work",
    title: "制作実績｜諏訪・伊那・山梨のホームページ制作事例｜ONE DESIGN",
    description: "ONE DESIGNの制作実績。諏訪市・茅野市・伊那市・山梨県エリアの個人事業主・中小企業・店舗のホームページ制作事例を掲載しています。"
  },
  {
    route: "/services",
    title: "サービス内容｜ホームページ制作・SEO・グラフィックデザイン｜ONE DESIGN",
    description: "ホームページ制作・SEO対策・グラフィックデザイン・ブランディング。長野県・山梨県の個人事業主・中小企業向けにWEB集客をトータルサポートします。"
  },
  {
    route: "/about",
    title: "ONE DESIGNとは｜八ヶ岳・諏訪エリアのホームページ制作｜ONE DESIGN",
    description: "ONE DESIGNは長野県（諏訪・茅野・伊那）と山梨県を拠点に、個人事業主・中小企業向けのホームページ制作・WEB集客を行うデザイン事務所です。"
  },
  {
    route: "/contact",
    title: "お問い合わせ・ご相談｜ONE DESIGN",
    description: "ホームページ制作・リニューアル・WEB集客のご相談はこちら。まずはお気軽にお問い合わせください。"
  },
  {
    route: "/blog",
    title: "ブログ｜ホームページ制作・SEO・WEB集客のヒント｜ONE DESIGN",
    description: "ホームページ制作・SEO・WEB集客に関するノウハウや事例をお届けします。長野県・山梨県の中小企業・個人事業主向け情報が中心です。"
  },
  {
    route: "/price",
    title: "料金・費用｜ホームページ制作の価格プラン｜ONE DESIGN",
    description: "ONE DESIGNのホームページ制作料金プラン。個人事業主・小規模店舗向けの最小構成から、中小企業向けの本格サイトまで、予算に合わせてご提案します。"
  },
  {
    route: "/hojyokin",
    title: "補助金でホームページ制作｜小規模事業者持続化補助金対応｜ONE DESIGN",
    description: "小規模事業者持続化補助金を活用したホームページ制作に対応。補助金の対象になるか、申請の流れも含めてご相談ください。"
  },
  {
    route: "/freediagnosis",
    title: "無料診断（15分）｜ホームページの課題を整理します｜ONE DESIGN",
    description: "いまのホームページの問題点を15分で整理する無料診断。営業なし・診断のみでOK。諏訪・伊那・山梨エリアの個人事業主・中小企業向け。"
  },
  {
    route: "/yamanashi-lp",
    title: "山梨県のホームページ制作｜個人事業主・中小企業・店舗向け｜北杜市・甲府市・韮崎市｜ONE DESIGN",
    description: "山梨県（甲府市・北杜市・韮崎市・南アルプス市ほか全域）の個人事業主・中小企業・店舗向けホームページ制作。問い合わせ・集客・採用につながる設計を得意とし、対面打ち合わせ・補助金活用にも対応。まずは無料診断（15分）で現状の課題を整理します。営業なし。"
  },
  {
    route: "/suwa-homepage",
    title: "諏訪市のホームページ制作｜個人事業主・中小企業向け｜ONE DESIGN",
    description: "諏訪市・茅野市・岡谷市エリアの個人事業主・中小企業向けホームページ制作。"
  },
  {
    route: "/ina-homepage",
    title: "伊那市・駒ヶ根市のホームページ制作｜中小企業・個人事業主向け｜ONE DESIGN",
    description: "伊那市・駒ヶ根市・飯田市エリアの個人事業主・中小企業向けホームページ制作。"
  },
  {
    route: "/ueda-homepage",
    title: "上田市のホームページ制作｜個人事業主・中小企業向け｜ONE DESIGN",
    description: "上田市・佐久市・小諸市エリアの個人事業主・中小企業向けホームページ制作。"
  },
];

const distDir = path.resolve("dist");
const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

for (const { route, title, description } of routes) {
  const dir = path.join(distDir, route);
  fs.mkdirSync(dir, { recursive: true });

  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta name="description".*?>/,
      `<meta name="description" content="${description}">`
    );

  fs.writeFileSync(path.join(dir, "index.html"), html);
  console.log(`✓ ${route}/index.html → ${title}`);
}