var games = [
    {
        thumbnail: "thumbnail1.jpg",
        title: "Game Title 1",
        author: "Author 1",
        description: "This is a short description of Game 1.",
        link: "https://unityroom.com/games/game1",
    },
    {
        thumbnail: "thumbnail1.jpg",
        title: "Game Title 1",
        author: "Author 1",
        description: "This is a short description of Game 1.",
        link: "https://unityroom.com/games/game1",
    },
    {
        thumbnail: "thumbnail1.jpg",
        title: "Game Title 1",
        author: "Author 1",
        description: "This is a short description of Game 1.",
        link: "https://unityroom.com/games/game1",
    },
    {
        thumbnail: "thumbnail2.jpg",
        title: "Game Title 2",
        author: "Author 2",
        description: "This is a short description of Game 2.",
        link: "https://unityroom.com/games/game2",
    },
    // 追加のゲームデータ
];
function createGameBlock(game) {
    return "\n        <div class=\"bg-white shadow-md rounded-md overflow-hidden\">\n            <a href=\"".concat(game.link, "\" target=\"_blank\">\n                <img src=\"").concat(game.thumbnail, "\" alt=\"").concat(game.title, "\" class=\"w-full h-48 object-cover\">\n            </a>\n            <div class=\"p-4\">\n                <h2 class=\"text-xl font-bold\">").concat(game.title, "</h2>\n                <p class=\"text-gray-600\">\u4F5C\u8005: ").concat(game.author, "</p>\n                <p class=\"mt-2 text-gray-800\">").concat(game.description, "</p>\n                <a href=\"").concat(game.link, "\" target=\"_blank\" class=\"mt-4 inline-block text-blue-500 hover:underline\">\u30B2\u30FC\u30E0\u3092\u30D7\u30EC\u30A4</a>\n            </div>\n        </div>\n    ");
}
document.addEventListener("DOMContentLoaded", function () {
    var gameList = document.getElementById("game-list");
    if (gameList) {
        gameList.innerHTML = games.map(createGameBlock).join("");
    }
});
