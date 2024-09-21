// 英単語と和訳のリスト
const wordList = [
    { english: "weather", japanese: "天気" },
    { english: "sunny", japanese: "日当たりのよい" },
    { english: "cloudy", japanese: "くもり" },
    { english: "rainy", japanese: "雨の" },
    { english: "dry", japanese: "乾燥した" },
    { english: "warm", japanese: "暖かい" },
    { english: "hot", japanese: "暑い" },
    { english: "cool", japanese: "涼しい" },
    { english: "derk", japanese: "暗い" },
    { english: "blow", japanese: "吹く" },
    { english: "character", japanese: "性格" },
    { english: "funny", japanese: "おもしろい" },
    { english: "smile", japanese: "ほほえみ" },
    { english: "kind", japanese: "親切な" },
    { english: "clever", japanese: "利口な" },
    { english: "quiet", japanese: "静かな" },
    { english: "shy", japanese: "内気な" },
    { english: "lazy", japanese: "怠け" },
    { english: "strict", japanese: "厳しい" },
    { english: "rude", japanese: "失礼な" },
    { english: "pleasure", japanese: "背が高い" },
    { english: "glad", japanese: "うれしい" },
    { english: "enjoy", japanese: "楽しみ" },
    { english: "thank", japanese: "ありがたいと思う" },
    { english: "want", japanese: "ほしい" },
    { english: "hope", japanese: "希望する" },
    { english: "wish", japanese: "願う" },
    { english: "pray", japanese: "祈る" },
    { english: "dream", japanese: "夢" },
    { english: "happy", japanese: "幸せな" }
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
