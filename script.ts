interface Game {
    thumbnail: string;
    title: string;
    author: string;
    description: string;
    link: string;
}

const games: Game[] = [
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

function createGameBlock(game: Game): string {
    return `
        <div class="bg-white shadow-md rounded-md overflow-hidden">
            <a href="${game.link}" target="_blank">
                <img src="${game.thumbnail}" alt="${game.title}" class="w-full h-48 object-cover">
            </a>
            <div class="p-4">
                <h2 class="text-xl font-bold">${game.title}</h2>
                <p class="text-gray-600">作者: ${game.author}</p>
                <p class="mt-2 text-gray-800">${game.description}</p>
                <a href="${game.link}" target="_blank" class="mt-4 inline-block text-blue-500 hover:underline">ゲームをプレイ</a>
            </div>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    const gameList = document.getElementById("game-list");
    if (gameList) {
        gameList.innerHTML = games.map(createGameBlock).join("");
    }
});
