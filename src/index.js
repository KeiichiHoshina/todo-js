import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li要素生成
  const li = document.createElement("li");
  li.className = "list-row";

  // div要素生成
  const div = document.createElement("div");
  div.innerText = inputText;

  // button（完了）要素生成
  const completButton = document.createElement("button");
  completButton.innerText = "完了";
  completButton.addEventListener("click", () => {
    alert("完了");
  });

  // button（削除）要素生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
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
