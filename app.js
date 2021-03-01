let quiz = [
  {
    question :'Q OSI基本参照モデルのトランスポート層以上が異なるLANシステム相互間でプロトコル変換を行う機器はどれか。',
    answers :  [
      'ゲートウェイ',
      'ブリッジ',
      'リピータ',
      'ルータ'
    ],
    correct : 'ゲートウェイ'
  },{
    question :'Q XML文書のDTDに記述するものはどれか。',
    answers :  [
      '使用する文字コード',
      'データ',
      'バージョン情報',
      '文書型の定義'
    ],
    correct : '文書型の定義'
  },{
    question :'Q 基本設計思想と訳され、ハードウェア、OS、ネットワーク、アプリケーションソフトなどの基本設計や設計思想のことをなんというか。',
    answers :  [
      'アーキテクチャ',
      'アルゴリズム',
      'オブジェクト指向',
      'カレントディレクトリ'
    ],
    correct : 'アーキテクチャ'
  },{
    question :'Q システムが一定の時間内に処理できるジョブ（仕事）の量のことをなんというか。',
    answers :  [
      'シンクライアント',
      'スループット',
      'ソースプログラム',
      'タスク'
    ],
    correct : 'スループット'
  },{
    question :'Q インターネットに関係するプロトコルや言語に関する記述のうち，適切なものはどれか。',
    answers :  [
      'FTPは，電子メールにファイルを添付して転送するためのプロトコルである。',
      'HTMLは，文書の論理構造を表すタグをユーザが定義できる言語である。',
      'HTTPは，HTML文書などを転送するためのプロトコルである。',
      'SMTPは，画像情報を送受信するためのプロトコルである。'
    ],
    correct : 'HTTPは，HTML文書などを転送するためのプロトコルである。'
  },{
    question :'Q 日本において，産業財産権と総称される四つの権利はどれか。',
    answers :  [
      '意匠権，実用新案権，商標権，特許権',
      '意匠権，実用新案権，著作権，特許権',
      '意匠権，商標権，著作権，特許権',
      '実用新案権，商標権，著作権，特許権'
    ],
    correct : '意匠権，実用新案権，商標権，特許権'
  },{
    question :'Q オブジェクト指向におけるカプセル化を説明したものはどれか。',
    answers :  [
      '同じ性質をもつ複数のオブジェクトを抽象化して，整理すること',
      '基底クラスの性質を派生クラスに受け継がせること',
      'クラス間に共通する性質を抽出し，基底クラスを作ること',
      'データとそれを操作する手続を一つのオブジェクトにして，データと手続の詳細をオブジェクトの外部から隠蔽すること'
    ],
    correct : 'データとそれを操作する手続を一つのオブジェクトにして，データと手続の詳細をオブジェクトの外部から隠蔽すること'
  },{
    question :'Q SWOT分析を用いて識別した，自社製品に関する外部要因はどれか。',
    answers :  [
      '営業力における強み',
      '機能面における強み',
      '新規参入による脅威',
      '品質における弱み'
    ],
    correct : '新規参入による脅威'
  },{
    question :'Q オブジェクト指向において，あるクラスの属性や機能がサブクラスで利用できることを何というか。',
    answers :  [
      'オーバーライド',
      'カプセル化',
      '継承',
      '多相性'
    ],
    correct : '継承'
  }
];


let quizLength = quiz.length;

let quizIndex = 0;

//問題数定義
const count = ['第1問','第2問','第3問','第4問','第5問'];


let score = 0;


//シャッフルアルゴリズム
while (quizLength) {
  let j = Math.floor( Math.random() * quizLength );
  let t = quiz[--quizLength];
  quiz[quizLength] = quiz[j];
  quiz[j] = t;
}

//シャッフルされた配列の要素を順番に表示する
quiz.forEach( function( value ) {console.log( value )} );
  



const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;


//作ってます
const setupCount = ()=>{
  document.getElementById('quiz-count').textContent = count[quizIndex];
  

};


  



//クイズの問題文、選択肢を定義
const setupQuiz = () =>{
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
  //ここに命令
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
  
};
};
setupCount();
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }
  

  quizIndex++;

  if (quizIndex < 5) {
    //問題数がまだあればこちらを実行
    setupCount();
    setupQuiz();
  } else {
    //問題数がなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + 5 + 'です。');

  }



};







//ボタンクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;

}







