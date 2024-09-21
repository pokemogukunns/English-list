// 英単語と和訳のリスト
const wordList = [
    { english: "college", japanese: "大学" },
    { english: "class", japanese: "授業" },
    { english: "course", japanese: "講習" },
    { english: "code", japanese: "規定" },
    { english: "here", japanese: "ここに" },
    { english: "there", japanese: "そこへ" },
    { english: "everywhere", japanese: "あらゆる場所に" },
    { english: "place", japanese: "場所" },
    { english: "spot", japanese: "地点" },
    { english: "site", japanese: "場所、遺跡" },
    { english: "section", japanese: "地区" },
    { english: "close", japanese: "近い" },
    { english: "hometown", japanese: "故郷" },
    { english: "library", japanese: "図書館" },
    { english: "rules", japanese: "規則" },
    { english: "wash", japanese: "〜を洗う" },
    { english: "cook", japanese: "〜を作る" },
    { english: "cut", japanese: "〜を切る" },
    { english: "garbage", japanese: "ごみ" },
    { english: "clean", japanese: "きれいな" },
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
