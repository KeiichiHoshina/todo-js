import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncomleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncomleteList = (text) => {
  // li要素生成
  const li = document.createElement("li");
  li.className = "list-row";

  // div要素生成
  const div = document.createElement("div");
  div.innerText = text;

  // button（完了）要素生成
  const completButton = document.createElement("button");
  completButton.innerText = "完了";
  completButton.addEventListener("click", () => {
    deleteFromIncompleteList(completButton.parentNode);
    const addTarget = completButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deletTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deletTarget);
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncomleteList(text);
    });
    addTarget.appendChild(div);
    addTarget.appendChild(backButton);
    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button（削除）要素生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // li要素のこ要素に各要素を設定
  li.appendChild(div);
  li.appendChild(completButton);
  li.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
