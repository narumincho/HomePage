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
    | { c: "window"; contents: Array<InlineContent> };

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

export const articleContentsToElements = (
    contents: Array<ArticleContent>
): Array<Element> =>
    contents.map(c => articleContentToElementsLoop(c, 2)).flat();

const articleContentToElementsLoop = (
    content: ArticleContent,
    hLevel: number
): Array<Element> => {
    switch (content.c) {
        case "p":
            if (typeof content.contents === "string") {
                return [
                    { name: "p", attributes: [], children: content.contents }
                ];
            }
            return content.contents.map(inlineContentToElement);
        case "img":
            return [
                image(
                    [class_("normal-image")],
                    "/assets/" + content.fileName,
                    content.alternativeText
                )
            ];
        case "list":
            return [ul([], [], content.items)];
        case "section":
            if (6 < hLevel) {
                throw new Error(
                    "セクションの入れ子が深すぎる。(h2～h6までしか使えないため)"
                );
            }
            return [
                {
                    name: "h" + hLevel,
                    attributes: [],
                    children: content.title
                } as Element
            ].concat(
                content.contents
                    .map(c => articleContentToElementsLoop(c, hLevel + 1))
                    .flat()
            );

        case "window":
            return [
                div(
                    [class_("window")],
                    content.contents.map(inlineContentToElement)
                )
            ];
    }
};

const inlineContentToElement = (inlineContent: InlineContent): Element => {
    switch (inlineContent.c) {
        case "span":
            return {
                name: "span",
                attributes:
                    inlineContent.class === null
                        ? []
                        : [class_(inlineContent.class)],
                children: inlineContent.text
            };
        case "link":
            return {
                name: "a",
                attributes: [["href", inlineContent.url]],
                children: inlineContent.text
            };
    }
};

/**
 * HTMLの各要素
 */
export type Element = {
    name: string;
    attributes: Array<Attribute>;
    /**
     * nullは<hr>のように閉じカッコなしにする
     */
    children: Array<Element> | null | string;
};

/**
 *  HTML
 */
export type Html = {
    name: "html";
    attributes: Array<Attribute>;
    children: Array<Element>;
};

export const html = (
    headChildren: Array<Element>,
    bodyChildren: Array<Element>
): Html => ({
    name: "html",
    attributes: [["lang", "ja"]],
    children: [
        {
            name: "head",
            attributes: [],
            children: headChildren
        },
        {
            name: "body",
            attributes: [],
            children: bodyChildren
        }
    ]
});

/**
 * 属性
 */
export type Attribute = string | [string, string];

export const htmlToString = (html: Html): string =>
    "<!doctype html>" + elementToString(html);

const elementToString = (element: Element): string => {
    if (element.children === null) {
        return (
            "<" + element.name + attributesToString(element.attributes) + ">"
        );
    }
    if (typeof element.children === "string") {
        return (
            "<" +
            element.name +
            attributesToString(element.attributes) +
            ">" +
            (element.name === "script"
                ? element.children
                : escapeHtml(element.children)) +
            "</" +
            element.name +
            ">"
        );
    }

    return (
        "<" +
        element.name +
        attributesToString(element.attributes) +
        ">" +
        element.children.map(elementToString).join("") +
        "</" +
        element.name +
        ">"
    );
};

const attributesToString = (attributes: Array<Attribute>): string => {
    if (attributes.length === 0) {
        return "";
    }
    return (
        " " +
        attributes
            .map(e => {
                if (typeof e === "string") {
                    return e;
                }
                return e[0] + '="' + e[1].replace(/"/g, '\\"') + '"';
            })
            .join(" ")
    );
};

const escapeHtml = (text: string): string =>
    text.replace(/[&'`"<>]/g, (s: string): string =>
        s === "&"
            ? "&amp;"
            : s === "'"
            ? "&#x27;"
            : s === "`"
            ? "&#x60;"
            : s === '"'
            ? "&quot;"
            : s === "<"
            ? "&lt;"
            : s === ">"
            ? "&gt;"
            : ""
    );

export const div = (
    attributes: Array<Attribute>,
    children: Array<Element> | string
): Element => ({
    name: "div",
    attributes: attributes,
    children: children
});

export const blockCodeNoHightLight = (code: string): Element => ({
    name: "code",
    attributes: [class_("blockCode")],
    children: code
});

export const a = (
    url: string,
    attributes: Array<Attribute>,
    children: Array<Element>
) => ({
    name: "a",
    attributes: attributes.concat([["href", url]]),
    children: children
});

export const image = (
    attributes: Array<Attribute>,
    url: string,
    alternativeText: string
): Element => ({
    name: "img",
    attributes: attributes.concat([["src", url], ["alt", alternativeText]]),
    children: null
});

export const class_ = (className: string): Attribute => ["class", className];

const ul = (
    ulAttributes: Array<Attribute>,
    liAttributes: Array<Attribute>,
    children: Array<Array<Element> | string>
): Element => ({
    name: "ul",
    attributes: ulAttributes,
    children: children.map<Element>(c => ({
        name: "li",
        attributes: liAttributes,
        children: c
    }))
});
