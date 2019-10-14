import * as type from "../type";

export const pages: Array<type.Article> = [
    {
        path: "about-desired-route",
        title: "DESIRED Routeについて",
        createdAt: new Date("2019-10-04T22:42:00"),
        updateAt: new Date("2019-10-04T22:42:00"),
        description: "DESIRED Routeについて話します",
        imageUrl: "/assets/desiredroute-title.jpg",
        extendScriptPath: null,
        contents: [
            type.p([
                type.span(null, "DESIRED Routeは"),
                type.link("http://smilebasic.com/", "プチコン3号"),
                type.span(null, "で作られていたRPGです")
            ]),
            type.p(
                "2015年前後にメニュー画面とバトル画面とBGMが多少作られたが、マップなどグラフィック、セリフが不足して断念。"
            ),
            type.p([
                type.span(
                    null,
                    "当時プチコンファンミーティングのLT会に登壇した("
                ),
                type.link(
                    "https://www.itmedia.co.jp/pcuser/articles/1510/20/news137_3.html",
                    "IT mediaの記事"
                ),
                type.span(null, ")。そのことが少しだけ記事に書かれている。"),
                type.link(
                    "http://penkogoma.blog6.fc2.com/?mode=m&no=223&photo=true",
                    "「ペンコ改の知らね」(プチコンファンミーティングin東京レポートその3)"
                ),
                type.span(null, "でも紹介されている")
            ])
        ]
    },
    {
        path: "message-window",
        createdAt: new Date("2015-09-20T00:00:00"),
        updateAt: new Date("2019-10-04T22:14:00"),
        title: "メッセージウィンドウの話",
        description: "メッセージウィンドウについて話します",
        imageUrl: "/assets/window.jpg",
        extendScriptPath: null,
        contents: [
            type.section("メッセージウィンドウとは", [
                type.p(
                    "メッセージウィンドウは、登場人物やが言ったことや、ナレーションの言葉を表示し、プレイヤーに伝えるUIです。DESIRED Routeを作る上で、登場人物たちのセリフをプレイヤーに伝えるために必要でした。市販のゲームを見てどんなメッセージウィンドウを作れば良いか考えてみよう!"
                )
            ]),
            type.section("市販のゲームの例", [
                type.section("新世界樹の迷宮", [
                    type.p([
                        type.span(null, "("),
                        type.link(
                            "https://www.atlus.co.jp/title-archive/ssq/",
                            "新世界樹の迷宮"
                        ),
                        type.span(null, "はNintendo 3DSのRPG)")
                    ]),
                    type.normalImage(
                        "window-sqq.jpg",
                        "新世界樹の迷宮のメッセージウィンドウ"
                    ),
                    type.list([
                        "青の半透明の背景に、水色の文字、20文字3行",
                        "文字はすべて同じ幅でなく、句読点「、」などで位置が調整される(プロポーショナルフォント?)",
                        "LかRボタンを押している間、ウィンドウの表示をOFF",
                        "ボタンで進める(長押しで、すべて文字を表示したら進める)",
                        "Yボタン長押しで、メッセージスキップ",
                        "話している人の名前の表示がない"
                    ]),
                    type.p(
                        "またウィンドウ非表示中でもAボタンを押したら話を進めてしまうというバグもあった。(新世界樹の迷宮2で修正)"
                    )
                ]),
                type.section("BRAVELY DEFAULT", [
                    type.p([
                        type.span(null, "("),
                        type.link(
                            "http://www.jp.square-enix.com/bdfts/",
                            "BRAVELY DEFAULT"
                        ),
                        type.span(null, "はNintendo 3DSのRPG)")
                    ]),
                    type.normalImage(
                        "bdff.jpg",
                        "BRAVELY DEFAULTのイベント画面"
                    ),
                    type.list([
                        "黒の背景に、白の文字、25文字2行",
                        "すべて文字は同じ幅で、句読点「、」などで位置が調整されない(等幅フォント?)",
                        "Aボタンで進める(長押しでは、進めない)",
                        "Yボタンでボイス合わせて進めるオート",
                        "Xボタンでスキップ",
                        "常に名前表示あり"
                    ]),
                    type.p(
                        "2行とすることで1つのページにセリフがたくさん表示されないようにしている。実際2行で十分なことが多い。"
                    )
                ]),
                type.p(
                    "また、推理ゲームなどに多かったが、セリフのログが残されていて後で確認できるようになっているものも最近はある。"
                )
            ]),
            type.section("DESIRED Routeでは", [
                type.p(
                    "DESIRED ROUTEでは、現代的な快適さとシンプルさを合わせ持つように、"
                ),
                type.normalImage(
                    "window.jpg",
                    "DESIRED Routeでのメッセージウィンドウ表示"
                ),
                type.list([
                    "青の半透明の背景に、白の文字、20文字3行",
                    "文字はすべて同じ幅で、句読点「、」などで位置が調整されない",
                    "Aボタンで進める",
                    "Aボタン長押しで、メッセージスキップ",
                    "名前表示ありと、名前表示なしを変更できる"
                ]),
                type.p(
                    "にしました。このRPGは下画面にメニューを常に表示しているので、上画面のウィンドウに使えるボタンはAボタンだけですが、Aボタン長押しでメッセージスキップもできるようにしています。"
                )
            ]),
            type.section("ページ内スキップ", [
                type.p(
                    "他に、スキップ以外に快適さに必要なのは、ページ内スキップです。ページ内スキップとは、文字がぽつぽつ表示されている途中に、Aボタンを押すと、セリフの文字が一気に表示される機能です。忘れがちの処理ですが、有ると無いとでは、かなりと操作感が違います。紹介してきたRPG全てと、このDESIRED ROUTEはページ内スキップ機能はあります。PRGは文字で内容を伝えるゲームだと思うので、ウィンドウはこだわるべきです。"
                )
            ]),
            type.section("文字の配色", [
                type.p(
                    "開発初期のメッセージウィンドウの文字色は、10種類の中から選ぶことができましたが、色を多用していると何が重要かわからなくなってしまうのです。"
                ),
                type.normalImage(
                    "bad-color-message-window.jpg",
                    "10種類の文字色を使用したメッセージウィンドウの表示"
                ),
                type.p(
                    "というわけで、文字色は、白とオレンジと水色の3種類に絞りました。"
                ),
                type.normalImage(
                    "simple-color-message-window.jpg",
                    "3色を使ったメッセージウィンドウの表示"
                ),
                type.p("オレンジは重要な単語につけることとします。"),
                type.window([
                    type.span("window-strong", "テアー"),
                    type.span("window-normal", "を持ってきてくれ。")
                ]),
                type.p("水色はシステムなどの説明に使うことにします。"),
                type.window([
                    type.span(
                        "window-info",
                        "このRPGでは、下画面の決定をYボタンとします。"
                    )
                ])
            ])
        ]
    },
    {
        path: "desired-route-font",
        title: "DESIRED RouteとNPIMEのフォントの描画処理",
        description: "DESIRED RouteとNPIMEのフォントの描画処理について話します",
        createdAt: new Date("2015-09-22"),
        updateAt: new Date("2019-10-08"),
        imageUrl: "/assets/font.jpg",
        extendScriptPath: null,
        contents: [
            type.section("漢字表示処理を自作する理由", [
                type.p(
                    "プチコン3号のPRINTで出力されるコンソールの表示の文字は小さいです。こんな小さな文字を見ていると目が疲れてきます。初期バージョンは漢字が表示できなかったが、今はプチコン3号の更新により美咲フォントによってJIS第1水準相当までの漢字が表示されます。"
                ),
                type.normalImage(
                    "font-petitcom3.jpg",
                    "プチコン3号のコンソール表示"
                )
            ]),
            type.section("経緯", [
                type.p(
                    "そこで、16x16の1マスに手書きで文字を書いて、BGで表示することにしました。グラフィック面に書いてもいいのですが、グラフィック面への描画速度が遅いので使いませんでした"
                ),
                type.normalImage("freehand-font.jpg", "手書きの文字表示"),
                type.p(
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
                    "しかし、BGでやると1文字1文字の色を変えられないので、スプライトを使うことにしました。BGCOLOR命令で、できそうだが1チップごとの指定ではない。レイヤーを何枚か使えばできなくもないが、 あんまりウィンドウにBGを何枚も使いたくなかった"
                ),
                type.normalImage(
                    "window.jpg",
                    "スプライトを使ったメッセージウィンドウ"
                ),
                type.p(
                    "また、文字の種類がGRP4の512x512のサイズに左右されてしまい、他のキャラクターの画像も同じ1枚に収めなければならなかったので、160種類の漢字しか使えませんでした。"
                ),
                type.normalImage(
                    "font-data-sprite-grp.jpg",
                    "スプライトで使うグラフィック面"
                ),
                type.p([
                    type.span(null, "そこで、ほしけんさんの"),
                    type.link(
                        "http://wiki.hosiken.jp/petc3gou/?Toukou%2F%A5%D7%A5%C1%A5%B3%A5%F3%B4%C1%BB%FA%A5%E9%A5%A4%A5%D6%A5%E9%A5%EA",
                        "プチコン漢字ライブラリ"
                    ),
                    type.span(
                        null,
                        "を使うことにしました。このライブラリは素晴らしく、フォントデータはテキスト形式なので、GRPを使わず、JIS第2水準までの漢字が扱えます。ですが、グラフィック面に直接書くタイプなので、改造をし、ひらがなカタカナはGRP4に最初から書いておき、漢字が、必要になったらGRP4に書いて、スプライトで使うようにしました。うまく漢字を分担させる機能もあり、普通に使うよりも速度が上がっていると思います"
                    )
                ]),
                type.p(
                    "漢字表示ライブラリには、 沢山のフォントとエフェクトをサポートしていますが、 東雲ゴシック16を右にずらした 影つきの書体のみを使用することにしました。 また、東雲フォントはパブリックドメインなので、 著作権に心配することもなくなりました。"
                )
            ]),
            type.section("その後の発展", [
                type.p(
                    "今回のRPGでは、フォントの処理方法は、これに決定しましたが、 また作ることがあれば、複数のサイズのフォントを扱えるようにしたいです。SPSCALE命令でもできなくはないが、縮小すると輪郭がギザギザして見える"
                )
            ])
        ]
    },
    {
        path: "list-select-behavior",
        title: "リストUIのボタン操作の挙動",
        description: "リストUIのボタン操作の挙動について話します",
        createdAt: new Date("2015-10-18"),
        updateAt: new Date("2019-10-09"),
        imageUrl: "/assets/list-ui.jpg",
        extendScriptPath: null,
        contents: [
            type.section("挙動を考えた理由", [
                type.p(
                    "バトルのプログラムを書いている途中に、リストアップされた項目の選択の処理を メニュー画面を処理を統一出来たらいいなと思い、選択の処理を改善しました。"
                ),
                type.p(
                    "そのコード改良で整理した、ページがあるリストの選択処理について話したいと思います。こんなこと考えるのは、つまらないかもしれないけど私の中では大切な処理です。ちゃんとしたゲームまたは、ツールを作る人はこういうこともしっかり考えて欲しいです。"
                )
            ]),
            type.section("ボタンリピート", [
                type.p(
                    "何かの選択画面で十字ボタンを長押ししたら普通、 「トッ、…トトトトトトト」と鳴ると思います。 押した瞬間に反応する「トッ」 少し時間を空いてから連続してカーソルが動く「トトトトトトト」 何気ないこの選択時の音の間隔からわかるカーソルの動くタイミングですが、 これがあると無いとでは、選択する項目が多い場合の操作性が大きく異なります。 選択する項目が5つ以上ある場合は必須と言えるでしょう。"
                ),
                type.p(
                    "これから「トッ」を初押し、 「トトトトトトト」を連続押しと略して言います。"
                ),
                type.p(
                    "プチコン3号ではBREPAT命令で手軽に作れますが、タッチ時の処理と統一できたり、初押しと連続押しが判断できるように自作した方がいいです。 こだわるなら。"
                )
            ]),
            type.section("ページ送り", [
                type.p(
                    "画面上で1番下を選択しているときに、 下を押すと、すべての項目が1項目分上に動き、 下の項目が出るようにします。 これと、上にスクロールする処理を書けばページができます。"
                ),
                type.p(
                    "もっと言うと、ページがあるのならば、右ボタンでページ送り、左ボタンでページを戻せるようにすべきです。 早く下の方にある項目にアクセスできるようになります。 ここでページ送りの時に、画面上の相対位置を維持するということを頭に入れて欲しいです。 なぜなら、ページと絶対位置を同じ分だけ動かすと、ページが1番下にぶつかった時、画面上の相対位置がずれることがあるからです。"
                ),
                type.blockCodeNoHightLight("相対位置=絶対位置-ページの位置"),
                type.p(
                    "でいったん相対位置を出して、 ページの飛び出し防止処理をした後に"
                ),
                type.blockCodeNoHightLight("絶対位置=ページ位置+相対位置"),
                type.p("と絶対位置を求めたほうが確実です。"),
                type.p(
                    "発売されているソフトでも相対位置がずれることがよくあります。 まあそれくらい気にしなくても良いことかもしれませんが。"
                )
            ]),
            type.section("ループ", [
                type.p(
                    "ループは、 1番上の項目を選択しているときに、上ボタンを押すと1番下、1番下の項目を選択しているときに、下ボタンを押すと、 1番上を選択するものです。"
                ),
                type.p(
                    "連続押しでループさせるかしないかは、 微妙なところでありますが、上下ボタンで連続押しのループは気持ちいいので、私はおすすめします。ページ送りボタンでのループをさせる場合は、初押しのみにすべきです。 ちなみに世界樹の迷宮ではページ送りでのループがありません。 「ブブー」と音が鳴ります。 ウォークマンではループします。"
                )
            ]),
            type.section("まとめ", [
                type.section("下ボタンを押す", [
                    type.p(
                        "1番下の項目を選択をしているのならば、 1番上の項目を選択する。 画面上の1番下の項目を選択していたのならば、 下に1つスクロールして1つ下を選択する。 それ以外は普通に選択の位置を1つ上にする。"
                    )
                ]),
                type.section("上ボタンを押す", [
                    type.p(
                        "1番上の項目を選択をしているのならば、 1番下の項目を選択する。 画面上の1番上の項目を選択していたのならば、 上に1つスクロールして1つ上を選択する。 それ以外は普通に選択の位置を1つ上にする。"
                    )
                ]),
                type.section("ページ送りボタンを押す", [
                    type.p(
                        "1番下の項目を選択をしている。かつ連続押しでなく初押し。ならば、 1番上の項目を選択する。 ページが1番下ならば1番下を選択する。 それ以外は画面に表示している項目の数の分だけ下を、 選択、スクロールすればいいが、 相対位置を出して、飛び出しを防ぐ処理してから、絶対位置を求めます。"
                    )
                ]),
                type.section("ページ戻りボタンを押す", [
                    type.p(
                        "1番上の項目を選択をしている。かつ連続押しでなく初押し。ならば、 1番下の項目を選択する。 ページが1番上ならば1番上を選択する。 それ以外は画面に表示している項目の数の分だけ上を、 選択、スクロールすればいいが、 相対位置を出して、飛び出しを防ぐ処理してから、絶対位置を求めます。"
                    )
                ])
            ])
        ]
    },
    {
        path: "ui-color",
        title: "UIの配色",
        description: "",
        createdAt: new Date("2015-11-02"),
        updateAt: new Date("2019-10-09"),
        imageUrl: "/assets/color.png",
        extendScriptPath: null,
        contents: [
            type.section("配色ミス", [
                type.p(
                    "DESIRED Routeで私が一番最初に作ったUIです。その頃の私は未熟でした。 配色について一切考えていませんでした。 見づらく、目が痛くなるような配色。 最悪です。"
                ),
                type.normalImage("initial-item-menu.jpg", "初期のITEMメニュー"),
                type.quote([
                    type.p("配色には"),
                    type.list([
                        "ベースカラー70%",
                        "メインカラー25%",
                        "アクセントカラー5%"
                    ]),
                    type.p(
                        "のバランスで3色をベースに構成するっていう基本テクがあるよ。 配色を工夫することで同じUIでもよりプロっぽく見せられるよ。"
                    )
                ]),
                type.p(
                    "という親切なコメントをMiiverseでしてくれました。コメントしてくれた人、ありがとうございます。ベースカラーは緑、メインカラーは青、アクセントカラーは赤です。"
                ),
                type.normalImage("list-ui.jpg", "改良したITEMメニュー"),
                type.p(
                    "ITEMメニューはこのような感じになりました。 まだ、それっぽく魅せる比率に完全に則していないので、 改良が必要ですけれどね。今作の所は良いとしましょう。"
                )
            ]),
            type.section("全体的な統一感", [
                type.p("良い例として、新世界樹のバトル画面"),
                type.normalImage(
                    "ssq_battle.jpg",
                    "新世界樹の迷宮のバトル画面"
                ),
                type.p(
                    "ベースカラー青、メインカラーは薄い緑、アクセントカラーは黄色。メニュー画面は、"
                ),
                type.normalImage(
                    "ssq_menu.jpg",
                    "新世界樹の迷宮のメニュー画面"
                ),
                type.p(
                    "全体的に統一感がありますよね。構造的にも似ていますが、ベースカラーは青と決まっていて綺麗です。 ちなみに世界樹の迷宮シリーズは作品ごとにベースカラーが青、緑、青、緑と交互になっています。"
                )
            ]),
            type.section("悪い例", [
                type.normalImage(
                    "seven_battle.jpg",
                    "セブンスドラゴンのバトル画面"
                ),
                type.p(
                    "悪い例としてセブンスドラゴンⅢ code:VFD 。 ベースカラーは黒、メインカラーとアクセントカラーは同じ黄色になってしまっている。 2色であると何か、変な感じがする。この画面だけじゃわかりにくいですが、 選択している項目によってアクセントカラー(今、黄色の所)が変わるので、チカチカして見えます。 慣れたら大したことが無いかもしれないが、コロコロ色を変えるべきじゃないです。なぜかアイテムボックスの右枠がオレンジ、左枠は黄色と色が違っている。左右で色を変える意味がわからない。"
                ),
                type.p(
                    "SKILL(SHILLに見える)では、アクセントカラーがオレンジになるのだが、その場合は、左右の枠は共にアクセントカラーのオレンジである。"
                ),
                type.p(
                    "また、選択している項目(ここでは、メディスⅠ)の色の抜け方があまりにも急で ベースカラーと近い色になるタイミングが多い。 もう少し変化を抑えたほうが良い。"
                ),
                type.normalImage(
                    "seven_menu.jpg",
                    "セブンスドラゴンのメニュー画面"
                ),
                type.p(
                    "次はメニュー画面の話になるのだが、この画面は何をしているところだろうか。"
                ),
                type.p(
                    "アイテムを選んでいるのではなく、メディスⅠの使用する対象者を選んでいるところなのだ。 わかりにくいので、メディスⅠの色をいつもと違う色に反転させるか、 アイテム欄の所を暗転させるか、消すかするべきだ。"
                ),
                type.p(
                    "DESIRED Routeでは、アイテム欄を暗転させて中央に表示している。"
                ),
                type.normalImage(
                    "item-select-target.jpg",
                    "DESIRED Routeのアイテム使用対象者選択画面"
                ),
                type.p(
                    "見た目の話ではないが、セブンスドラゴンはボタンを押しで反応を見た感じでは、なんかプログラムに無駄な処理が通ってる感じがします。そんなもんだから、「プログラムはまるで迷宮だ」 (ゲーム中に登場するセブンスエンカウントの開発者の話) とか言ってしまうのだろう。ちゃんと設計を考えて作れば迷わない。"
                )
            ]),
            type.section("ちょっとした挑戦", [
                type.p(
                    "DESIRED Routeでは、 主人公の今いる場所によって UIのベースカラーとメインカラーが変わったら面白いんじゃないかと思い、 そういう仕組を作っています。"
                ),
                type.p(
                    "新しいダンジョンに入った時、変わったなという雰囲気を モンスターやマップチップだけでなく、 GUIの色を変えることによっても演出する。すでに世界樹の迷宮のメニュー画面の背景画像は場所によって違いますけどね。"
                )
            ])
        ]
    },
    {
        path: "desired-route-encounter",
        title: "モンスターとのエンカウントについて",
        description: "モンスターとのエンカウントについて",
        createdAt: new Date("2015-11-08"),
        updateAt: new Date("2019-10-09"),
        imageUrl: "/assets/battle.jpg",
        extendScriptPath: null,
        contents: [
            type.section("エンカウントとは", [
                type.p(
                    "エンカウントとは、捜索パートで歩いている時にモンスターと出会い、戦闘パートに移行することです。"
                ),
                type.p(
                    "シンボルエンカウントという、目に見える敵と接触して戦闘に移行する物もありますが、少し面倒なのでDESIRED Routeでは、マップ上見えない敵にのみエンカウントします。"
                )
            ]),
            type.section("エンカウントするタイミング", [
                type.p(
                    "エンカウントは場所によって度合いが違います。 森では普通にエンカウントしていいですが、 街でエンカウントしたらおかしいです。 また、遺跡ではギミックに集中させるために敵が少なかったりするので、 場所ごとで度合いを設定するべきでしょう。"
                ),
                type.p(
                    "1歩 歩くごとに指定した確率にしたがってエンカウントするかと調べる方法がありますが、 運が悪い場合、戦闘が終わったあと、1歩 歩いたら、またエンカウントする可能性があります。 戦闘が終了したらある程度エンカウントしない歩数が保証されるべきです。"
                ),
                type.p(
                    "というわけで、思いついた方法は、エンカウントする歩数の下限上限を指定することです。 戦闘が終了したあとにエンカウントするまでの歩数を指定した範囲内で決めます。 そして1歩 歩くごとにその数を減らして、0になったらエンカウントします。"
                ),
                type.p(
                    "DESIRED Routeでのエンカウントのデータでは次のように指定します"
                ),
                type.blockCodeNoHightLight(
                    "[エンカウントする歩数の下限]～[エンカウントする歩数の上限]"
                ),
                type.p("エンカウントしない場合は ∞ を指定します。"),
                type.p(
                    "この方法は世界樹の迷宮シリーズなどでも使われているみたいです。後で確認したところ、世界樹は減らす数が1固定ではなく1マスごとに0～3くらいに個々に設定されているそうです。"
                ),
                type.normalImage(
                    "sq-encounter.jpg",
                    "世界樹の迷宮の捜索パートの画面"
                ),
                type.p(
                    "世界樹の迷宮の面白い所はどれくらいでエンカウントするか、 色によって可視化していることです。 この表示は「エネミーアピアランス」というそうです。「あ、表示が赤い! 後もう少しでエンカウントするから 今のうちにFOE(フィールド上に見える強い敵)から逃げておこう」 みたいな感じで駆け引きがしやすくなっています。"
                )
            ]),
            type.section("エンカウントするパーティデータ", [
                type.normalImage(
                    "desired-route-encounter-data.jpg",
                    "DESIRED Routeのエンカウントのデータ"
                ),
                type.p(
                    '前は"50[1,2]30[1]20[2]"で、50%の確率で1と2の敵、30%の確率で1の敵、20%の確率で2の敵、と短い文字列でやろうとしたのですけれど、 データをパースして処理することが少し面倒であることと、次の方法の方が見やすいと思い、この方法にしました。'
                ),
                type.blockCodeNoHightLight(`DATA [指定する敵パーティになる確率(%指定)],"[敵パーティの文字列(カンマ区切り)]"
    DATA [指定する敵パーティになる確率(%指定)],"[敵パーティの文字列(カンマ区切り)]"
    DATA [指定する敵パーティになる確率(%指定)],"[敵パーティの文字列(カンマ区切り)]"
    ………`),
                type.p(
                    "確率の合計が100になったら読み込みを終了します。それぞれのモンスターの表示位置を指定する方法はまだ未定ですが、今作のモンスターは大きさが近いので、数によって左から順に置いていけば良いでしょう。"
                )
            ])
        ]
    },
    {
        path: "star",
        title: "星の図形について",
        description: "星の図形について",
        createdAt: new Date("2016-01-01"),
        updateAt: new Date("2019-10-10"),
        imageUrl: "/assets/star.jpg",
        extendScriptPath: "star.ts",
        contents: [
            type.divForScript("star"),
            type.p(
                "タイトル画面の下画面にαバージョンでは、星の模様が 描かれていく、アニメーションを見ることができます。"
            ),
            type.normalImage(
                "press-any-button.jpg",
                "タイトルの下画面の星の模様"
            ),
            type.p(
                "私は星の図形に思い入れがあります。 今回は星の図形について話したいと思います。"
            ),
            type.section("七芒星の可能性", [
                type.normalImage("star-5.jpg", "五芒星"),
                type.p(
                    "これは皆さんご存知な「五芒星」です。 中学1年生の時、ふと思ったのです。7つの頂点がある星がないのかと… 五芒星は中心に正五角形があるので、大きな紙に正七角形を書き、辺を伸ばしてみたのです。そしたら、このような図形ができました。"
                ),
                type.normalImage("star-7-pre.jpg", "七芒星?"),
                type.p(
                    "思った以上に、綺麗じゃない… そして、諦めずに更に辺を伸ばすと…! 綺麗な星ができました。「七芒星」です。"
                ),
                type.normalImage("star-7.jpg", "七芒星"),
                type.p(
                    "定規(目盛りを使わない)っとコンパスによる作図では正七角形が作図できないので「正七芒星」というものは描くことはできません。転じて「不可能を可能にする」という意味もあるそうです。"
                )
            ]),
            type.section("その後の発展", [
                type.p(
                    "そのあと、辺を伸ばして描く方法よりも、いい方法を思いつきました。"
                ),
                type.p(
                    "円周上にn間隔に点を描き、1番上の点から(n-1)/2飛ばしに一筆書きのように点を繋いでいく。"
                ),
                type.p(
                    "とやると描けます。 そのことを友達に教えたら一緒に、 「九十九芒星」くらいまで描きました。 懐かしい思い出です。"
                ),
                type.p(
                    "次は、違う方向から考えていきます。 (n-1)/2ずつ飛ばすと決めていましたが、 1つ飛ばしから(n-1)/2飛ばしまでの図形を重ねてみます。"
                ),
                type.normalImage(
                    "star-7-2.jpg",
                    "七芒星の内側にも線を含めたもの"
                ),
                type.normalImage(
                    "star-15.jpg",
                    "十五芒星の内側にも線を含めたもの"
                ),
                type.normalImage(
                    "star-29.jpg",
                    "二十九芒星の内側にも線を含めたもの"
                ),
                type.normalImage(
                    "star-77.jpg",
                    "七十七芒星の内側にも線を含めたもの"
                ),
                type.p(
                    "最後の七十七芒星のやつは拡大しましたが。 綺麗な模様になったと思います。"
                ),
                type.p(
                    "製作者のKish.から「テーマは星だ。」と言われてから、 こういう図形のことを懐かしく思い、話を整理しました。 テーマが星の作品は多々ありますが、こういう面で星を見ることは少ないと思います。"
                )
            ])
        ]
    },
    {
        path: "desired-route-monster",
        title: "DESIRED Routeに登場する予定だった敵モンスター",
        description:
            "DESIRED Routeに登場する予定だった敵モンスターについて話します",
        createdAt: new Date(""),
        updateAt: new Date("2019-10-13"),
        extendScriptPath: null,
        imageUrl: "/assets/kamausagi.png",
        contents: [
            type.imageList([
                {
                    title: "悪魔の手",
                    fileName: "akumanote.jpg"
                },
                {
                    title: "アルコールランプ",
                    fileName: "alcohol_lamp.jpg"
                },
                {
                    title: "バンモン",
                    fileName: "banmon.jpg"
                },
                {
                    title: "バラの戦士",
                    fileName: "baranosensi.jpg"
                },
                {
                    title: "電球ホタル",
                    fileName: "denkyu-hotaru.jpg"
                },
                {
                    title: "泥団子",
                    fileName: "dorodango.jpg"
                },
                {
                    title: "ゴブリン",
                    fileName: "goburin.jpg"
                },
                {
                    title: "骨のオーガ",
                    fileName: "honeno-oga.jpg"
                },
                {
                    title: "ほねつむり",
                    fileName: "honetumuri.jpg"
                },
                {
                    title: "フードゴブリン",
                    fileName: "hood_goburin.jpg"
                },
                {
                    title: "一角デメキン",
                    fileName: "ikkakudemekin.jpg"
                },
                {
                    title: "かまうさぎ",
                    fileName: "kamausagi.png"
                },
                {
                    title: "カメレオン",
                    fileName: "kamereon.jpg"
                },
                {
                    title: "枯れ葉宿り",
                    fileName: "karahayadori.jpg"
                },
                {
                    title: "勾魂",
                    fileName: "katamari.jpg"
                },
                {
                    title: "木の葉虫",
                    fileName: "kinohamusi.jpg"
                },
                {
                    title: "紅葉の精",
                    fileName: "kouyounosei.jpg"
                },
                {
                    title: "メバナ",
                    fileName: "mabana.jpg"
                },
                {
                    title: "マッシュ",
                    fileName: "massyu.jpg"
                },
                {
                    title: "ミノカマキリ",
                    fileName: "minokamakiri.jpg"
                },
                {
                    title: "もぐねずみ",
                    fileName: "mogunezumi.jpg"
                },
                {
                    title: "モグライダー",
                    fileName: "moguraida.jpg"
                },
                {
                    title: "なまけデビル",
                    fileName: "namakedebiru.jpg"
                },
                {
                    title: "ナマコ",
                    fileName: "namako.jpg"
                },
                {
                    title: "ノナン",
                    fileName: "nonan.png"
                },
                {
                    title: "龍の指輪",
                    fileName: "ryuno-udewa.jpg"
                },
                {
                    title: "神秘的なやつ",
                    fileName: "shinpitekinayatsu.jpg"
                },
                {
                    title: "ソール",
                    fileName: "so-ru.jpg"
                },
                {
                    title: "トカゲナイト",
                    fileName: "tokagenaito.jpg"
                },
                {
                    title: "強そうなザコ",
                    fileName: "tsuyosouna.jpg"
                },
                {
                    title: "ツタマネ",
                    fileName: "tutamane.jpg"
                },
                {
                    title: "ウパナリア",
                    fileName: "upanaria.jpg"
                },
                {
                    title: "うるおいわかば",
                    fileName: "uruoi_wakaba.jpg"
                },
                {
                    title: "邪教の使者",
                    fileName: "zyasinnoshisya.jpg"
                }
            ])
        ]
    }
];
