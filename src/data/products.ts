import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 'sauny',
    title: 'Sauny',
    description: 'サウナ愛好家のためのモバイルサ活記録アプリ。温度感まで伝わるこだわりのUIデザインで、日々のルーティンから「ととのい」の履歴まで美しく記録します。',
    url: 'https://sauny.solooo.dev/',
    status: 'released',
    tags: ['Next.js', 'Hono', 'Flutter', 'Cloudflare D1', 'Drizzle ORM', 'shadcn/ui', 'TanStack Query'],
    isFeatured: true,
    releaseDate: '2026-04-30',
    article: {
      tagline: '毎日のサウナ体験を、もっと深く、美しく記録する。',
      features: [
        '直感的なUIでのサ活記録',
        '施設ごとの統計データの可視化',
        'サウナ・水風呂・休憩のセット管理',
        '全国のサウナ施設データベースとの連携'
      ],
      targetUsers: '日々のサウナ体験を記録して振り返りたい、すべてのサウナ愛好家（サウナー）の方へ。',
      howToUse: [
        { title: '施設を選択', description: '全国のデータベースから、または現在地からサウナ施設を探して選択します。' },
        { title: 'セットを記録', description: 'サウナ、水風呂、休憩の各時間を直感的なスライダーやプリセットで記録します。' },
        { title: 'ととのいを可視化', description: '記録されたデータは統計グラフとして可視化され、自分のサウナ傾向を把握できます。' }
      ],
      background: '私自身がサウナ愛好家であり、既存のアプリでは満足できなかった「デザインの美しさ」と「記録のしやすさ」を両立させるために開発をスタートしました。個人の開発だからこそできる、細部までこだわったUI/UXを追求しています。',
      screenshots: [
        '/products/sauny/screenshot-1.webp',
        '/products/sauny/screenshot-2.webp'
      ]
    }
  },
  {
    id: 'ronpark',
    title: 'RONPARK',
    description: 'AIとの対話を通じてあなたの論理的思考力と説得力を鍛える、次世代の知的格闘技プラットフォームです。',
    url: 'https://ronpark.solooo.dev/',
    status: 'released',
    tags: ['Next.js', 'React 19', 'Hono', 'Cloudflare Workers', 'Cloudflare D1', 'Tailwind CSS (v4)', 'Framer Motion', 'Auth.js', 'Zod', 'Vercel AI SDK'],
    isFeatured: true,
    releaseDate: '2026-04-01',
    article: {
      tagline: 'AIを論理でねじ伏せる。ウィットと知性の知的格闘技アリーナ。',
      features: [
        '10ターンの制限時間内で行われるリアルタイム議論バトル',
        '論理的優位性を視覚化する「Rope（綱引き）」スコアシステム',
        '最新のLlama 3.1/3.3モデルを使用した高度な対戦AIと審判AI',
        'E-Sportsライクな緊張感のある対戦UI'
      ],
      targetUsers: '論理的思考力を試したい方、AIとの高度な議論を楽しみたい知的好奇心旺盛なプレイヤー。',
      howToUse: [
        { title: 'トピックの選択', description: '議論のテーマと自分の立場（賛成・反対）を選択してバトルを開始します。' },
        { title: 'ロジックを展開', description: '限られたターンの中で、AIの反論を論破し、審判に論理性をアピールします。' },
        { title: '勝利を掴む', description: '10ターン終了後、スコアゲージが自分の側に傾いていれば勝利です。' }
      ],
      background: '「AIと本気で喧嘩ができたら面白いのではないか」という、少し型破りなインスピレーションからこのプロジェクトは始まりました。しかし、単なる言葉の応酬ではなく、知性とロジックを武器にAIを打ち負かす「討論」という形にすることで、ゲーム感覚で勝利を掴む楽しさを追求しました。RONPARKという名は、まさに論理（RON）で切り開く公園（PARK）のような、自由で刺激的な遊び場をイメージしています。',
      screenshots: ['/products/ronpark/screenshot-1.webp', '/products/ronpark/screenshot-2.webp']
    }
  },
  {
    id: 'lt-room',
    title: 'LT Room',
    description: 'LT Roomは、Lightning Talkの進行をスムーズにし、発表の場をより魅力的にするサポートツールです。',
    url: 'https://lt-room.solooo.dev/',
    status: 'released',
    tags: ['Next.js', 'Hono', 'Drizzle ORM', 'Zod', 'shadcn/ui', 'TanStack Query', 'Cloudflare R2', 'Cloudflare Workers AI'],
    isFeatured: true,
    releaseDate: '2026-03-17',
    article: {
      tagline: 'LTの準備から本番まで。AIが発表をアップデートするサポートツール。',
      features: [
        'Cloudflare Workers AI (Whisper) によるリアルタイムに近い文字起こし',
        '発表内容の要点をAIが自動で要約・抽出',
        '音声データとテキストデータのセキュアな履歴管理 (R2)',
        'ランダムテーマ選定機能でLTのネタ作りをサポート'
      ],
      targetUsers: '勉強会や社内イベントでLTを行う発表者、およびイベントの運営者。',
      howToUse: [
        { title: 'ルームを作成', description: 'イベント用のルームを即座に作成し、参加者に共有します。' },
        { title: '発表を録音', description: 'ボタン一つで録音を開始。AIがバックグラウンドで文字起こしを実行します。' },
        { title: '振り返りと共有', description: '終了後、AIによる要約と全文テキストで内容を簡単に振り返り、共有できます。' }
      ],
      background: 'LT Roomは、私自身がリーダーを務めるチームの定例会議を「もっと活気ある場所にしたい」という想いから生まれました。チーム内の相互理解や自己開示を促すために始めたLT（ライトニングトーク）ですが、ゼロからネタを考えるのは心理的ハードルが高いものです。そこで「ランダム抽選と自己選択」という制約と自由の絶妙なバランスを取り入れ、誰もが話しやすく、かつタイマーによって進行がスムーズに進む、現場目線のツールとして設計しました。',
      screenshots: ['/products/lt-room/screenshot-1.webp', '/products/lt-room/screenshot-2.webp']
    }
  },
  {
    id: 'chousei-master',
    title: '調整マスター',
    description: 'ログイン不要、30秒でイベント作成。日程調整だけでなく、場所や内容のアンケートも同時に集計できる次世代スケジューリングツール。',
    url: 'https://chousei-master.solooo.dev',
    status: 'released',
    tags: ['HonoX', 'Cloudflare D1', 'Radix UI', 'Vite', 'Tailwind CSS (v4)'],
    isFeatured: true,
    releaseDate: '2026-02-11',
    article: {
      tagline: 'ログイン不要、30秒でイベント作成。日程調整に「迷い」をなくす。',
      features: [
        'ログインなしで即座にイベントURLを発行',
        '日程調整だけでなく、場所や内容のアンケートも同時集計',
        'HonoXを使用した高速なユーザー体験',
        'スマホからでも直感的に回答できるモダンなUI'
      ],
      targetUsers: '飲み会や会議の日程調整を素早く済ませたい幹事さん、ビジネスマン。',
      howToUse: [
        { title: 'イベント作成', description: '候補日とアンケート項目を入力して、30秒でURLを発行します。' },
        { title: 'URLを共有', description: '生成されたURLをLINEやSlackなどで参加者に送信します。' },
        { title: 'ベストな日を選択', description: '回答が集まったら、最も都合の良い日が一目で分かります。' }
      ],
      background: '「調整マスター」は、既存の日程調整ツールのUI/UXに対する「もっと直感的に、ストレスなく使いたい」という強い不満から生まれました。自分が登録した予定の修正しづらさなど、細かな使い勝手の悪さを徹底的に排除し、現代的なデザインとスムーズな操作感を追求しました。さらに、日程と同時に「場所」や「メニュー」も選べる「2軸調整」機能を搭載。幹事さんの「いつ＆どこで？」を一度に解決できる、かゆい所に手が届くツールを目指しました。',
      screenshots: ['/products/chousei-master/screenshot-1.webp', '/products/chousei-master/screenshot-2.webp']
    }
  },
  {
    id: 'soku-p',
    title: 'Soku-p',
    description: 'WebAssemblyを使用したクライアントサイド画像変換ツール。画像をサーバーに送信せず、ブラウザ上で高速にPNG/JPEG/WebP/AVIF等の相互変換が可能。',
    url: 'https://soku-p.solooo.dev',
    status: 'released',
    tags: ['Hono', 'WebAssembly', 'Photon', 'Vite', 'React'],
    isFeatured: false,
    releaseDate: '2026-02-01',
    article: {
      tagline: 'サーバー送信なし、ブラウザ完結。爆速・安全な画像変換ツール。',
      features: [
        'WASM (Photon) を使用したクライアントサイドでの超高速画像処理',
        '画像を外部サーバーに一切送信しない、究極のプライバシー保護',
        'PNG/JPEG/WebP/AVIFなど、主要なフォーマットに相互変換可能',
        'HEIC画像にも対応し、スマホ写真の共有をスムーズに'
      ],
      targetUsers: '画像のプライバシーを気にする方、大量の画像を素早く変換したいWeb制作者。',
      howToUse: [
        { title: '画像をドロップ', description: '変換したい画像をブラウザにドラッグ＆ドロップします。' },
        { title: '形式を選択', description: '変換後のフォーマット（WebPなど）を選択します。' },
        { title: '瞬時にダウンロード', description: 'ブラウザ上で処理が完了し、即座に保存されます。' }
      ],
      background: 'Soku-pの原点は、個人開発における「実用的なアウトプット」への挑戦でした。昨今のWeb標準であるWebPへの変換を、サーバーリソースを使わずユーザーのブラウザ上だけで完結させる（サーバー送信なし）ことで、最高水準のセキュリティとスピードを実現しました。また、ただ変換するだけでなく、画質を保ちながらファイルサイズを極限まで削る圧縮ロジックにもこだわり、サイトのパフォーマンス向上に直結するツールとして設計しました。',
      screenshots: ['/products/soku-p/screenshot-1.webp', '/products/soku-p/screenshot-2.webp']
    }
  },
  {
    id: 'id-photo',
    title: '証明写真マスター',
    description: 'スマホで撮影した写真を、履歴書やパスポートなどの規格サイズに自動調整。コンビニでL判印刷するだけで証明写真が作れる、プライバシー重視の作成ツール。',
    url: 'https://id-photo.solooo.dev',
    status: 'released',
    tags: ['Next.js', 'React Easy Crop', 'Radix UI', 'Cloudflare Pages', 'Privacy'],
    isFeatured: false,
    releaseDate: '2026-01-29',
    article: {
      tagline: '履歴書からパスポートまで。スマホ写真が30秒で証明写真に。',
      features: [
        'ガイドに合わせて直感的にクロッピングできる専用UI',
        '履歴書、免許証、マイナンバー、パスポートなど主要規格に自動対応',
        'コンビニのL判プリント1枚に複数枚を最適配置して保存',
        '全ての処理がブラウザ内で完結するため、顔写真の流出リスクなし'
      ],
      targetUsers: '急ぎで証明写真が必要な方、コストを抑えて（30円程度で）作成したい方。',
      howToUse: [
        { title: '写真を撮影・選択', description: 'スマホで撮影した自撮り写真や保存されている写真を選択します。' },
        { title: '規格を選択', description: '用途（履歴書用など）を選ぶと、自動で最適な枠が表示されます。' },
        { title: 'コンビニで印刷', description: '保存された画像をコンビニのネットプリント等でL判印刷するだけです。' }
      ],
      background: '履歴書作成などのシーンで必要となる「証明写真」を、より手軽に、かつ安価に用意できればという想いからこのプロダクトは誕生しました。スマホの普及に合わせ、撮影からコンビニ印刷用の画像生成までをワンストップで実現。画像を一切サーバーに送信しない設計を徹底することで、究極のプライバシー保護と「撮ってその場で作れる」手軽さの両立を追求しました。',
      screenshots: ['/products/id-photo/screenshot-1.webp', '/products/id-photo/screenshot-2.webp']
    }
  },
  {
    id: 'nengo',
    title: '年号マスター',
    description: '和暦と西暦を瞬時に変換・検索できるユーティリティツール。計算ロジックや早見表も搭載。',
    url: 'https://nengo.solooo.dev',
    status: 'released',
    tags: ['Hono', 'Cloudflare Workers', 'Minimal', 'TypeScript'],
    isFeatured: false,
    releaseDate: '2026-01-19',
    article: {
      tagline: '和暦・西暦、もう迷わない。瞬時に引ける、時代を繋ぐツール。',
      features: [
        '和暦から西暦、西暦から和暦への双方向の高速変換',
        '明治・大正・昭和・平成・令和の全範囲をカバー',
        '入力と同時に結果が表示される、思考を妨げない検索体験',
        'Cloudflare Workersによる軽量・爆速なレスポンス'
      ],
      targetUsers: '公的な書類作成や歴史の調査などで、年号の変換を頻繁に行う方。',
      howToUse: [
        { title: '数値を入力', description: '西暦（例: 2024）または和暦（例: 令和6）を入力します。' },
        { title: '結果を確認', description: '対応する年号が瞬時に一覧表示されます。' },
        { title: '計算ロジックも活用', description: '年齢や経過年数の計算にも役立てることができます。' }
      ],
      background: '年号マスターは、私の個人開発の旅が始まった記念すべき第1号プロダクトです。2025年から2026年にかけての年末年始、「新しい年に切り替わる瞬間に、何か価値あるものを生み出したい」という想いから開発をスタートしました。単なる西暦・和暦の変換に留まらず、履歴書作成に便利な入学・卒業年度の自動計算や厄年チェックなど、実生活に寄り添った機能を凝縮。あえてDBを持たない設計にすることで極限のパフォーマンスを追求し、さらに生成AIによる歴史情報の追加や多言語対応など、第1号ならではの情熱を細部まで詰め込みました。',
      screenshots: ['/products/nengo/screenshot-1.webp', '/products/nengo/screenshot-2.webp']
    }
  },
];
