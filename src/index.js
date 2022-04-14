import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  // 押された削除ボタンの親を未完了リストから削除
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  div.innerText = text;

  // ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode.parentNode;
    // TODO内容テキストを取得
    const text = completeButton.parentNode.firstChild.textContent;
    console.log(text);
    // div以下を初期化
    addTarget.firstElementChild.textContent = null;
    const moveLi = document.createElement("li");
    addTarget.firstElementChild.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      // テキスト取得
      const backText = backButton.parentNode.firstChild.textContent;
      createIncompleteList(backText);
    });
    addTarget.firstElementChild.appendChild(backButton);
    moveLi.appendChild(addTarget.firstElementChild);
    console.log(moveLi);
    document.getElementById("complete-list").appendChild(moveLi);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  div.className = "list-row";

  const li = document.createElement("li");
  li.appendChild(div);
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
