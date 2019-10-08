import * as type from "../type";

export const pages: Array<type.Page> = [
    {
        path: "about-desired-route",
        title: "DESIRED Routeについて",
        createdAt: new Date("2019-10-04T22:42:00"),
        updateAt: new Date("2019-10-04T22:42:00"),
        description: "DESIRED Routeについて話します",
        imageUrl: "/assets/desiredroute-title.jpg",
        content: [
            type.p(
                [],
                [
                    type.span("DESIRED Routeは"),
                    type.a(
                        [type.class_("inline")],
                        "http://smilebasic.com/",
                        "プチコン3号"
                    ),
                    type.span("で作られていたRPGです")
                ]
            ),
            type.p(
                [],
                "2015年前後にメニュー画面とバトル画面とBGMが多少作られたが、マップなどグラフィック、セリフが不足して断念。"
            ),
            type.p(
                [],
                [
                    type.span(
                        "当時プチコンファンミーティングのLT会に登壇した("
                    ),
                    type.a(
                        [type.class_("inline")],
                        "https://www.itmedia.co.jp/pcuser/articles/1510/20/news137_3.html",
                        "IT mediaの記事"
                    ),
                    type.span(")。そのことが少しだけ記事に書かれている。"),
                    type.a(
                        [],
                        "http://penkogoma.blog6.fc2.com/?mode=m&no=223&photo=true",
                        "「ペンコ改の知らね」(プチコンファンミーティングin東京レポートその3)"
                    ),
                    type.span("でも紹介されている")
                ]
            )
        ]
    },
    {
        path: "message-window",
        createdAt: new Date("2015-09-20T00:00:00"),
        updateAt: new Date("2019-10-04T22:14:00"),
        title: "メッセージウィンドウの話",
        description: "メッセージウィンドウについて話します",
        imageUrl: "/assets/window.jpg",
        content: [
            type.h2("メッセージウィンドウとは"),
            type.p(
                [],
                "メッセージウィンドウは、登場人物やが言ったことや、ナレーションの言葉を表示し、プレイヤーに伝えるUIです。DESIRED Routeを作る上で、登場人物たちのセリフをプレイヤーに伝えるために必要でした。市販のゲームを見てどんなメッセージウィンドウを作れば良いか考えてみよう!"
            ),
            type.h2("市販のゲームの例"),
            {
                name: "h3",
                attributes: [],
                children: [
                    type.a(
                        [],
                        "https://www.atlus.co.jp/title-archive/ssq/",
                        "新世界樹の迷宮"
                    )
                ]
            },
            type.normalImage(
                "window-sqq.jpg",
                "新世界樹の迷宮のメッセージウィンドウ"
            ),
            type.ul(
                [],
                [],
                [
                    "青の半透明の背景に、水色の文字、20文字3行",
                    "文字はすべて同じ幅でなく、句読点「、」などで位置が調整される(プロポーショナルフォント?)",
                    "LかRボタンを押している間、ウィンドウの表示をOFF",
                    "ボタンで進める(長押しで、すべて文字を表示したら進める)",
                    "Yボタン長押しで、メッセージスキップ",
                    "話している人の名前の表示がない"
                ]
            ),
            type.p(
                [],
                "またウィンドウ非表示中でもAボタンを押したら話を進めてしまうというバグもあった。(新世界樹の迷宮2で修正)"
            ),
            {
                name: "h3",
                attributes: [],
                children: [
                    type.a(
                        [],
                        "http://www.jp.square-enix.com/bdfts/",
                        "BRAVELY DEFAULT"
                    )
                ]
            },
            type.normalImage("bdff.jpg", "BRAVELY DEFAULTのイベント画面"),
            type.ul(
                [],
                [],
                [
                    "黒の背景に、白の文字、25文字2行",
                    "すべて文字は同じ幅で、句読点「、」などで位置が調整されない(等幅フォント?)",
                    "Aボタンで進める(長押しでは、進めない)",
                    "Yボタンでボイス合わせて進めるオート",
                    "Xボタンでスキップ",
                    "常に名前表示あり"
                ]
            ),
            type.p(
                [],
                "2行とすることで1つのページにセリフがたくさん表示されないようにしている。実際2行で十分なことが多い。"
            ),
            type.p(
                [],
                "また、推理ゲームなどに多かったが、セリフのログが残されていて後で確認できるようになっているものも最近はある。"
            ),
            {
                name: "h3",
                attributes: [],
                children: "DESIRED Routeでは"
            },
            type.p(
                [],
                "DESIRED ROUTEでは、現代的な快適さとシンプルさを合わせ持つように、"
            ),
            type.image(
                [type.class_("normal-image")],
                "/assets/window.jpg",
                "DESIRED Routeでのメッセージウィンドウ表示"
            ),
            type.ul(
                [],
                [],
                [
                    "青の半透明の背景に、白の文字、20文字3行",
                    "文字はすべて同じ幅で、句読点「、」などで位置が調整されない",
                    "Aボタンで進める",
                    "Aボタン長押しで、メッセージスキップ",
                    "名前表示ありと、名前表示なしを変更できる"
                ]
            ),
            type.p(
                [],
                "にしました。このRPGは下画面にメニューを常に表示しているので、上画面のウィンドウに使えるボタンはAボタンだけですが、Aボタン長押しでメッセージスキップもできるようにしています。"
            ),
            {
                name: "h2",
                attributes: [],
                children: "ページ内スキップ"
            },
            type.p(
                [],
                "他に、スキップ以外に快適さに必要なのは、ページ内スキップです。ページ内スキップとは、文字がぽつぽつ表示されている途中に、Aボタンを押すと、セリフの文字が一気に表示される機能です。忘れがちの処理ですが、有ると無いとでは、かなりと操作感が違います。紹介してきたRPG全てと、このDESIRED ROUTEはページ内スキップ機能はあります。PRGは文字で内容を伝えるゲームだと思うので、ウィンドウはこだわるべきです。"
            ),
            type.h2("文字の配色"),
            type.p(
                [],
                "開発初期のメッセージウィンドウの文字色は、10種類の中から選ぶことができましたが、色を多用していると何が重要かわからなくなってしまうのです。"
            ),
            type.normalImage(
                "bad-color-message-window.jpg",
                "10種類の文字色を使用したメッセージウィンドウの表示"
            ),
            type.p(
                [],
                "というわけで、文字色は、白とオレンジと水色の3種類に絞りました。"
            ),
            type.normalImage(
                "simple-color-message-window.jpg",
                "3色を使ったメッセージウィンドウの表示"
            ),
            type.p([], "オレンジは重要な単語につけることとします。"),
            type.div(
                [type.class_("window-bg")],
                [
                    type.div([type.class_("window-strong")], "テアー"),
                    type.div(
                        [type.class_("window-nomal")],
                        "を持ってきてくれ。"
                    )
                ]
            ),
            type.p([], "水色はシステムなどの説明に使うことにします。"),
            type.div(
                [type.class_("window-bg")],
                [
                    type.div(
                        [type.class_("window-info")],
                        "このRPGでは、下画面の決定をYボタンとします。"
                    )
                ]
            )
        ]
    },
    {
        path: "desired-route-font",
        title: "DESIRED RouteとNPIMEのフォントの描画処理",
        description: "DESIRED RouteとNPIMEのフォントの描画処理について話します",
        createdAt: new Date("2015-09-22"),
        updateAt: new Date("2019-10-08"),
        imageUrl: "/assets/font.jpg",
        content: [
            type.h2("漢字表示処理を自作する理由"),
            type.p(
                [],
                "プチコン3号のPRINTで出力されるコンソールの表示の文字は小さいです。こんな小さな文字を見ていると目が疲れてきます。初期バージョンは漢字が表示できなかったが、今はプチコン3号の更新により美咲フォントによってJIS第1水準相当までの漢字が表示されます。"
            ),
            type.normalImage(
                "font-petitcom3.jpg",
                "プチコン3号のコンソール表示"
            ),
            type.h2("経緯"),
            type.p(
                [],
                "そこで、16x16の1マスに手書きで文字を書いて、BGで表示することにしました。グラフィック面に書いてもいいのですが、グラフィック面への描画速度が遅いので使いませんでした"
            ),
            type.normalImage("freehand-font.jpg", "手書きの文字表示"),
            type.p(
                [],
                "手書きフォントでは読みづらいので、MicrosoftWordのMSゴシックで50音を入力して、コピーし、Microsoft Paintに貼り付けて、パソコンの画面を見ながら、フォントを作成しました"
            ),
            type.normalImage(
                "ms-paint-font.png",
                "Microsoft Paintでのフォントの表示"
            ),
            type.normalImage(
                "message-window-font.jpg",
                "MSゴシックをプチコンで表示"
            ),
            type.p(
                [],
                "しかし、BGでやると1文字1文字の色を変えられないので、スプライトを使うことにしました。BGCOLOR命令で、できそうだが1チップごとの指定ではない。レイヤーを何枚か使えばできなくもないが、 あんまりウィンドウにBGを何枚も使いたくなかった"
            ),
            type.normalImage(
                "window.jpg",
                "スプライトを使ったメッセージウィンドウ"
            ),
            type.p(
                [],
                "また、文字の種類がGRP4の512x512のサイズに左右されてしまい、他のキャラクターの画像も同じ1枚に収めなければならなかったので、160種類の漢字しか使えませんでした。"
            ),
            type.normalImage(
                "font-data-sprite-grp.jpg",
                "スプライトで使うグラフィック面"
            ),
            type.p(
                [],
                [
                    type.span("そこで、ほしけんさんの"),
                    type.a(
                        [],
                        "http://wiki.hosiken.jp/petc3gou/?Toukou%2F%A5%D7%A5%C1%A5%B3%A5%F3%B4%C1%BB%FA%A5%E9%A5%A4%A5%D6%A5%E9%A5%EA",
                        "プチコン漢字ライブラリ"
                    ),
                    type.span(
                        "を使うことにしました。このライブラリは素晴らしく、フォントデータはテキスト形式なので、GRPを使わず、JIS第2水準までの漢字が扱えます。ですが、グラフィック面に直接書くタイプなので、改造をし、ひらがなカタカナはGRP4に最初から書いておき、漢字が、必要になったらGRP4に書いて、スプライトで使うようにしました。うまく漢字を分担させる機能もあり、普通に使うよりも速度が上がっていると思います"
                    )
                ]
            ),
            type.p(
                [],
                "漢字表示ライブラリには、 沢山のフォントとエフェクトをサポートしていますが、 東雲ゴシック16を右にずらした 影つきの書体のみを使用することにしました。 また、東雲フォントはパブリックドメインなので、 著作権に心配することもなくなりました。"
            ),
            type.h2("その後の発展"),
            type.p(
                [],
                "今回のRPGでは、フォントの処理方法は、これに決定しましたが、 また作ることがあれば、複数のサイズのフォントを扱えるようにしたいです。SPSCALE命令でもできなくはないが、縮小すると輪郭がギザギザして見える"
            )
        ]
    },
    {
        path: "list-select-behavior",
        title: "リストの選択の挙動",
        description: "リストの選択の挙動について話します",
        createdAt: new Date(""),
        updateAt: new Date(""),
        imageUrl: "/assets/list-ui.jpg",
        content: []
    },
    {
        path: "ui-color",
        title: "UIの配色",
        description: "",
        createdAt: new Date(""),
        updateAt: new Date(""),
        imageUrl: "/assets/color.png",
        content: []
    },
    {
        path: "desired-route-encounter",
        title: "モンスターとのエンカウントについて",
        description: "モンスターとのエンカウントについて",
        createdAt: new Date(""),
        updateAt: new Date(""),
        imageUrl: "/assets/battle.jpg",
        content: []
    },
    {
        path: "desired-route-input-behavior",
        title: "プチコン3号で入力の処理をまとめてメンテナンス性能を高める",
        description:
            "プチコン3号で入力の処理をまとめてメンテナンス性能を高める",
        createdAt: new Date(""),
        updateAt: new Date(""),
        imageUrl: "/assets/3ds.png",
        content: []
    },
    {
        path: "star",
        title: "星の図形について",
        description: "星の図形について",
        createdAt: new Date(""),
        updateAt: new Date(""),
        imageUrl: "/assets/star.jpg",
        content: []
    },
    {
        path: "desired-route-monster",
        title: "DESIRED Routeに登場する予定だった敵モンスター",
        description:
            "DESIRED Routeに登場する予定だった敵モンスターについて話します",
        createdAt: new Date(""),
        updateAt: new Date(""),
        imageUrl: "/assets/kamausagi.png",
        content: []
    }
];
