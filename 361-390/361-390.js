// 英単語と和訳のリスト
const wordList = [
    { english: "set", japanese: "決める" },
    { english: "talk", japanese: "話す" },
    { english: "review", japanese: "見直す" },
    { english: "discuss", japanese: "議論する" },
    { english: "focus", japanese: "集中する" },
    { english: "conversation", japanese: "会話" },
    { english: "help", japanese: "手伝う" },
    { english: "need", japanese: "必要である" },
    { english: "excuse", japanese: "許す" },
    { english: "borrow", japanese: "借りる" },
    { english: "section", japanese: "健康" },
    { english: "close", japanese: "空腹" },
    { english: "hometown", japanese: "疲れた" },
    { english: "library", japanese: "太った" },
    { english: "rules", japanese: "視力" },
    { english: "wash", japanese: "耐える" },
    { english: "cook", japanese: "ひとりで" },
    { english: "cut", japanese: "孤独な" },
    { english: "garbage", japanese: "信じる" },
    { english: "clean", japanese: "知っている" },
    { english: "tall", japanese: "背が高い" },
    { english: "little", japanese: "小さい" },
    { english: "guy", japanese: "やつ" },
    { english: "kid", japanese: "子ども" },
    { english: "fever", japanese: "熱" },
    { english: "headache", japanese: "頭痛" },
    { english: "sick", japanese: "気分が悪い" },
    { english: "hurt", japanese: "〜を痛める" },
    { english: "bone", japanese: "骨" },
    { english: "medicine", japanese: "薬" }
];

// ランダムに20個の問題を生成
function generateQuestions() {
    const questionsContainer = document.getElementById('questions');
    questionsContainer.innerHTML = ""; // 以前の問題をクリア

    // ランダムに20問選択
    const shuffledList = wordList.sort(() => 0.5 - Math.random()).slice(0, 20);

    shuffledList.forEach((word, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <p>${index + 1}. 日本語: ${word.japanese}</p>
            <input type="text" id="answer-${index}" placeholder="英語を入力">
            <span id="result-${index}" style="margin-left: 10px;"></span>
        `;
        questionDiv.setAttribute('data-answer', word.english); // 正解の英単語を属性として保存
        questionsContainer.appendChild(questionDiv);
    });
}

// 答え合わせの関数
function checkAnswers() {
    const questionDivs = document.querySelectorAll('#questions div');

    questionDivs.forEach((questionDiv, index) => {
        const userAnswer = document.getElementById(`answer-${index}`).value.trim().toLowerCase();
        const correctAnswer = questionDiv.getAttribute('data-answer').toLowerCase();

        const resultSpan = document.getElementById(`result-${index}`);
        if (userAnswer === correctAnswer) {
            resultSpan.textContent = "正解！";
            resultSpan.style.color = "green";
        } else {
            resultSpan.textContent = `不正解。正解は ${correctAnswer}`;
            resultSpan.style.color = "red";
        }
    });
}
