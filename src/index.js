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

  // li要素のこ要素に各要素を設定
  li.appendChild(div);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
