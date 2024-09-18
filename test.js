// 英単語と和訳のリスト
const wordList = [
    { english: "clean", japanese: "きれいな" },
    { english: "garbage", japanese: "ごみ" },
    { english: "cut", japanese: "切る" },
    { english: "cook", japanese: "料理する" },
    { english: "wash", japanese: "洗う" },
    { english: "rule", japanese: "規則" },
    { english: "college", japanese: "大学" },
    { english: "class", japanese: "クラス" },
    { english: "course", japanese: "課程" },
    { english: "code", japanese: "コード" },
    { english: "medicine", japanese: "薬" },
    { english: "bone", japanese: "骨" },
    { english: "fever", japanese: "熱" },
    { english: "guy", japanese: "男" },
    { english: "kid", japanese: "子ども" },
    { english: "tall", japanese: "背が高い" },
    { english: "little", japanese: "小さい" },
    { english: "place", japanese: "場所" },
    { english: "site", japanese: "用地" },
    { english: "section", japanese: "区域" }
];

// ランダムに20個の問題を生成
function generateQuestions() {
    const questionsContainer = document.getElementById('questions');
    questionsContainer.innerHTML = ""; // 以前の問題をクリア

    // ランダムに20問選択
    const shuffledList = wordList.sort(() => 0.5 - Math.random()).slice(0, 20);

    shuffledList.forEach((word, index) => {
        const question = document.createElement('p');
        question.textContent = `${index + 1}. 英語: ${word.english} | 日本語: ${word.japanese}`;
        questionsContainer.appendChild(question);
    });
}
