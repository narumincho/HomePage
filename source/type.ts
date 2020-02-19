import * as html from "@narumincho/html";
import { URL } from "url";

export const origin = "https://narumincho.com";

/**
 * 記事
 */
export type Article = {
  path: string;
  title: string;
  createdAt: Date;
  updateAt: Date;
  imageUrl: string;
  description: string;
  extendScriptPath: null | string;
  contents: Array<ArticleContent>;
};

/**
 * 記事の構成要素
 */
export type ArticleContent =
  | {
      c: "p";
      contents: string | Array<InlineContent>;
    }
  | { c: "img"; fileName: string; alternativeText: string }
  | { c: "list"; items: Array<string> }
  | { c: "section"; title: string; contents: Array<ArticleContent> }
  | { c: "window"; contents: Array<InlineContent> }
  | { c: "divForScript"; id: string }
  | { c: "quote"; contents: Array<ArticleContent> }
  | { c: "code"; code: string }
  | { c: "imageList"; images: Array<{ title: string; fileName: string }> }
  | { c: "definitionList"; items: Array<{ key: string; value: string }> }
  | { c: "twitterEmbedded"; code: string }
  | { c: "youTubeEmbedded"; id: string };

export const p = (contents: Array<InlineContent> | string): ArticleContent => ({
  c: "p",
  contents: contents
});

export const normalImage = (
  fileName: string,
  alternativeText: string
): ArticleContent => ({
  c: "img",
  fileName: fileName,
  alternativeText: alternativeText
});

export const list = (items: Array<string>): ArticleContent => ({
  c: "list",
  items: items
});

export const section = (
  title: string,
  contents: Array<ArticleContent>
): ArticleContent => ({
  c: "section",
  title: title,
  contents: contents
});

export const window = (contents: Array<InlineContent>): ArticleContent => ({
  c: "window",
  contents: contents
});

export const divForScript = (id: string): ArticleContent => ({
  c: "divForScript",
  id: id
});

export const quote = (contents: Array<ArticleContent>): ArticleContent => ({
  c: "quote",
  contents: contents
});

export const blockCodeNoHightLight = (code: string): ArticleContent => ({
  c: "code",
  code: code
});

export const imageList = (
  images: Array<{ title: string; fileName: string }>
): ArticleContent => ({
  c: "imageList",
  images: images
});

export const definitionList = (
  items: Array<{ key: string; value: string }>
): ArticleContent => ({
  c: "definitionList",
  items: items
});

export const twitterEmbedded = (code: string): ArticleContent => ({
  c: "twitterEmbedded",
  code: code
});

/** YouTubeの動画を埋め込む */
export const youTubeEmbedded = (id: string): ArticleContent => ({
  c: "youTubeEmbedded",
  id: id
});

/**
 *  段落の中にある要素
 */
export type InlineContent =
  | { c: "link"; url: string; text: string }
  | { c: "span"; class: string | null; text: string };

export const span = (class_: string | null, text: string): InlineContent => ({
  c: "span",
  class: class_,
  text: text
});

export const link = (url: string, text: string): InlineContent => ({
  c: "link",
  url: url,
  text: text
});

const inlineContentToElement = (inlineContent: InlineContent): html.Element => {
  switch (inlineContent.c) {
    case "span":
      return {
        name: "span",
        attributes: new Map(
          inlineContent.class === null ? [] : [["class", inlineContent.class]]
        ),
        children: {
          _: html.HtmlElementChildren_.Text,
          text: inlineContent.text
        }
      };
    case "link":
      return {
        name: "a",
        attributes: new Map([["href", inlineContent.url]]),
        children: {
          _: html.HtmlElementChildren_.Text,
          text: inlineContent.text
        }
      };
  }
};

const inlineContentsToElement = (
  inlineContents: string | ReadonlyArray<InlineContent>
): string | Array<html.Element> => {
  if (typeof inlineContents === "string") {
    return inlineContents;
  }
  return inlineContents.map(inlineContentToElement);
};

const ul = (children: ReadonlyArray<string>): html.Element => ({
  name: "ul",
  attributes: new Map(),
  children: {
    _: html.HtmlElementChildren_.HtmlElementList,
    value: children.map<html.Element>(text => ({
      name: "li",
      attributes: new Map(),
      children: { _: html.HtmlElementChildren_.Text, text: text }
    }))
  }
});

const articleContentToElementsLoop = (
  content: ArticleContent,
  hLevel: number
): Array<html.Element> => {
  switch (content.c) {
    case "p": {
      const inlineContents = inlineContentsToElement(content.contents);
      return [
        {
          name: "p",
          attributes: new Map(),
          children:
            typeof inlineContents === "string"
              ? {
                  _: html.HtmlElementChildren_.Text,
                  text: inlineContents
                }
              : {
                  _: html.HtmlElementChildren_.HtmlElementList,
                  value: inlineContents
                }
        }
      ];
    }
    case "img":
      return [
        html.image({
          class: "normal-image",
          url: new URL(origin + "/assets/" + content.fileName),
          alternativeText: content.alternativeText
        })
      ];
    case "list":
      return [ul(content.items)];
    case "section":
      if (6 < hLevel) {
        throw new Error(
          "セクションの入れ子が深すぎる。(h2～h6までしか使えないため)"
        );
      }
      return [
        {
          name: "h" + hLevel.toString(),
          attributes: new Map(),
          children: { _: html.HtmlElementChildren_.Text, text: content.title }
        } as html.Element
      ].concat(
        content.contents
          .map(c => articleContentToElementsLoop(c, hLevel + 1))
          .flat()
      );

    case "window":
      return [
        html.div(
          { class: "window" },
          content.contents.map(inlineContentToElement)
        )
      ];
    case "divForScript":
      return [html.div({ id: content.id }, [])];
    case "quote":
      return [
        html.quote(
          {},
          content.contents
            .map(c => articleContentToElementsLoop(c, hLevel))
            .flat()
        )
      ];
    case "code":
      return [html.code({ class: "blockCode" }, content.code)];
    case "imageList":
      return [
        html.div(
          { class: "imageList" },
          content.images.map(
            (i): html.Element => ({
              name: "figure",
              attributes: new Map([["class", "imageList-item"]]),
              children: {
                _: html.HtmlElementChildren_.HtmlElementList,
                value: [
                  {
                    name: "figcaption",
                    attributes: new Map([["class", "imageList-title"]]),
                    children: {
                      _: html.HtmlElementChildren_.Text,
                      text: i.title
                    }
                  },
                  html.image({
                    class: "imageList-image",
                    url: new URL(origin + "/assets/" + i.fileName),
                    alternativeText: i.title
                  })
                ]
              }
            })
          )
        )
      ];
    case "definitionList":
      return [
        {
          name: "dl",
          attributes: new Map(),
          children: {
            _: html.HtmlElementChildren_.HtmlElementList,
            value: content.items
              .map<ReadonlyArray<html.Element>>(item => [
                {
                  name: "dt",
                  attributes: new Map(),
                  children: {
                    _: html.HtmlElementChildren_.Text,
                    text: item.key
                  }
                },
                {
                  name: "dd",
                  attributes: new Map(),
                  children: {
                    _: html.HtmlElementChildren_.Text,
                    text: item.value
                  }
                }
              ])
              .flat()
          }
        }
      ];
    case "twitterEmbedded":
      return [
        {
          name: "blockquote",
          attributes: new Map([["class", "twitter-tweet"]]),
          children: {
            _: html.HtmlElementChildren_.RawText,
            text: content.code
          }
        },
        {
          name: "script",
          attributes: new Map([
            ["async", null],
            ["src", "https://platform.twitter.com/widgets.js"]
          ]),
          children: {
            _: html.HtmlElementChildren_.HtmlElementList,
            value: []
          }
        }
      ];
    case "youTubeEmbedded": {
      const randomId = Math.floor(Math.random() * 1000000).toString();
      return [
        {
          name: "iframe",
          attributes: new Map([
            ["id", randomId],
            ["style", "width:100%"],
            ["src", `https://www.youtube.com/embed/${content.id}`],
            ["frameborder", "0"],
            [
              "allow",
              "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ],
            ["allowfullscreen", null]
          ]),
          children: {
            _: html.HtmlElementChildren_.HtmlElementList,
            value: []
          }
        },
        {
          name: "script",
          attributes: new Map(),
          children: {
            _: html.HtmlElementChildren_.RawText,
            text: `{
                const iFrame = document.getElementById("${randomId}");
    
                const resize = () => {
                  console.log(iFrame.clientWidth);
                  iFrame.style.height = (iFrame.clientWidth / 16) * 9 + "px";
                  requestAnimationFrame(resize)
                };
                
                resize();}`
          }
        }
      ];
    }
  }
};

export const articleContentsToElements = (
  contents: Array<ArticleContent>
): Array<html.Element> =>
  contents.map(c => articleContentToElementsLoop(c, 2)).flat();
