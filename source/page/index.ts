import * as type from "../type";
import * as petitcom from "./petitcom";
import * as html from "@narumincho/html";
import { URL } from "url";

const brandLogoSvg = (
  url: URL,
  viewBox: string,
  children: ReadonlyArray<html.Element>
): html.Element =>
  html.anchorLink({ class: "snsLink", url: url }, [
    {
      name: "svg",
      attributes: new Map([
        ["class", "brandLogo"],
        ["viewBox", viewBox],
      ]),
      children: {
        _: html.HtmlElementChildren_.HtmlElementList,
        value: children,
      },
    },
  ]);

const gitHubLink: html.Element = brandLogoSvg(
  new URL("https://github.com/narumincho"),
  "0 0 560 560",
  [
    {
      name: "g",
      attributes: new Map([
        ["transform", "translate(0,560) scale(0.1,-0.1)"],
        ["fill", "#000000"],
        ["stroke", "none"],
      ]),
      children: {
        _: html.HtmlElementChildren_.HtmlElementList,
        value: [
          {
            name: "path",
            attributes: new Map([
              [
                "d",
                "M2571 4839 c-733 -82 -1361 -525 -1676 -1182 -488 -1019 -73 -2233 941 -2749 60 -31 154 -72 209 -93 116 -43 165 -43 202 0 22 25 23 33 23 242 l0 215 -27 -6 c-16 -4 -86 -9 -158 -12 -152 -7 -232 7 -328 59 -95 50 -147 110 -211 239 -61 126 -113 194 -190 251 -111 83 -131 118 -78 138 107 42 291 -57 387 -207 106 -165 229 -232 404 -221 108 7 211 40 211 68 0 39 43 145 81 201 45 66 57 56 -99 83 -497 85 -752 358 -803 858 -26 260 24 468 158 647 l48 65 -17 65 c-33 127 -16 355 34 465 12 27 14 27 78 22 119 -10 299 -82 454 -181 l52 -33 110 23 c276 58 562 58 838 0 l110 -23 52 33 c156 100 335 171 456 181 l66 6 28 -84 c37 -114 45 -299 17 -405 l-19 -71 49 -63 c164 -218 207 -519 122 -856 -95 -376 -368 -595 -817 -656 -49 -7 -88 -16 -88 -19 0 -4 11 -20 24 -36 39 -47 74 -125 90 -206 13 -61 16 -145 16 -416 0 -338 0 -340 23 -366 37 -43 86 -43 202 0 1143 427 1676 1745 1150 2842 -296 618 -865 1045 -1550 1164 -139 24 -440 33 -574 18z",
              ],
            ]),
            children: {
              _: html.HtmlElementChildren_.HtmlElementList,
              value: [],
            },
          },
        ],
      },
    },
  ]
);

const twitterLink: html.Element = brandLogoSvg(
  new URL("https://twitter.com/naru_mincho"),
  "50 50 300 300",
  [
    {
      name: "path",
      attributes: new Map([
        [
          "d",
          "M153.6 301.6c94.3 0 145.9-78.2 145.9-145.9c0-2.2 0-4.4-0.1-6.6c10-7.2 18.7-16.3 25.6-26.6c-9.2 4.1-19.1 6.8-29.5 8.1c10.6-6.3 18.7-16.4 22.6-28.4c-9.9 5.9-20.9 10.1-32.6 12.4c-9.4-10-22.7-16.2-37.4-16.2c-28.3 0-51.3 23-51.3 51.3c0 4 0.5 7.9 1.3 11.7c-42.6-2.1-80.4-22.6-105.7-53.6c-4.4 7.6-6.9 16.4-6.9 25.8c0 17.8 9.1 33.5 22.8 42.7c-8.4-0.3-16.3-2.6-23.2-6.4c0 0.2 0 0.4 0 0.7c0 24.8 17.7 45.6 41.1 50.3c-4.3 1.2-8.8 1.8-13.5 1.8c-3.3 0-6.5-0.3-9.6-0.9c6.5 20.4 25.5 35.2 47.9 35.6c-17.6 13.8-39.7 22-63.7 22c-4.1 0-8.2-0.2-12.2-0.7C97.7 293.1 124.7 301.6 153.6 301.6",
        ],
      ]),
      children: {
        _: html.HtmlElementChildren_.HtmlElementList,
        value: [],
      },
    },
  ]
);

const snsLink: html.Element = html.div({ class: "snsLink-list" }, [
  gitHubLink,
  twitterLink,
]);

const createArticleGroup = (data: {
  title: string;
  subTitle: string;
  article: Array<{
    title: string;
    url: URL;
    imageUrl: URL;
    imageAlt: string;
  }>;
}): html.Element =>
  html.section({ class: "articleGroup" }, [
    html.h2({ class: "articleGroup-titleArea" }, [
      html.div({ class: "articleGroup-title" }, data.title),
      html.div({ class: "articleGroup-subtitle" }, data.subTitle),
    ]),
    html.div(
      { class: "article-list" },
      data.article.map<html.Element>((article) =>
        html.anchorLink({ class: "articleItem", url: article.url }, [
          html.image({
            class: "articleItem-img",
            url: article.imageUrl,
            alternativeText: article.imageAlt,
          }),
          html.h3({ class: "articleItem-title" }, article.title),
        ])
      )
    ),
  ]);

const articleGroupList = html.div({ class: "articleGroup-list" }, [
  createArticleGroup({
    title: "Definy",
    subTitle: "革新的なプログラミング言語",
    article: [
      {
        title: "Definy",
        url: new URL("https://definy-lang.web.app"),
        imageUrl: new URL(type.origin + "/assets/definy20190212.jpg"),
        imageAlt: "Definy2019-02-12のスクリーンショット",
      },
      {
        title: "言語仕様",
        url: new URL(type.origin + "/definy/spec"),
        imageUrl: new URL(type.origin + "/assets/definy-spec.svg"),
        imageAlt: "Definy言語仕様のイメージ画像",
      },
      {
        title: "アドベントカレンダー 20歳の-遺書- ナルミンチョ版",
        url: new URL(type.origin + "/will"),
        imageUrl: new URL(type.origin + "/assets/definy20190212.jpg"),
        imageAlt: "Definy2019-02-12のスクリーンショット",
      },
    ],
  }),
  createArticleGroup({
    title: "Web",
    subTitle: "作成中!",
    article: [],
  }),
  createArticleGroup({
    title: "PowerShell",
    subTitle: "",
    article: [
      {
        title: "ファイルに対して再帰的にコマンドを実行する",
        url: new URL(type.origin + "/powershell/recursion"),
        imageUrl: new URL(type.origin + "/assets/powershell-icon.png"),
        imageAlt: "PowerShellのロゴ",
      },
    ],
  }),
  createArticleGroup({
    title: "SVG",
    subTitle: "作成中!",
    article: [
      {
        title: "SVGの基本",
        url: new URL(type.origin + "/svg/basic"),
        imageUrl: new URL(type.origin + "/assets/orange.svg"),
        imageAlt: "オレンジ",
      },
      {
        title: "単体SVGと埋め込みSVG",
        url: new URL(type.origin + "/svg/standalone_embed"),
        imageUrl: new URL(type.origin + "/assets/grape.svg"),
        imageAlt: "ぶどう",
      },
    ],
  }),
  createArticleGroup({
    title: "プチコン3号関連",
    subTitle: "プチコン3号用の漢字入力IME 🔑BEREV2HV",
    article: petitcom.pages.map((page) => ({
      title: page.title,
      url: new URL(type.origin + "/" + page.path.join("/")),
      imageUrl: new URL(type.origin + "/assets/" + page.imageAssetsFileName),
      imageAlt: page.title + "のイメージ",
    })),
  }),
]);

const bodyElements: ReadonlyArray<html.Element> = [
  html.h1({ class: "title-logo" }, [
    html.image({
      class: "logo",
      url: new URL(type.origin + "/assets/logo.svg"),
      alternativeText: "ナルミンチョの創作記録のロゴ",
    }),
  ]),
  html.div({ class: "index-main" }, [snsLink, articleGroupList]),
];

export const page = {
  description:
    "革新的なプログラミング言語のDefinyとWeb技術について解説しています",
  bodyElements,
};
