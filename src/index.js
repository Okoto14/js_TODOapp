import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createincompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteLst = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createincompleteList = (text) => {
  // li生成
  const li = document.createElement("li");

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグの生成
  const p = document.createElement("p");
  p.className = "todo-message";
  p.innerText = text;

  // button(完了)タグの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteLst(completeButton.closest("li"));

    // 完了リストに追加する要素
    const addTetget = completeButton.closest("li");

    // TODO内容テキストを取得
    const text = addTetget.firstElementChild.firstElementChild.innerText;

    // div以下を初期化
    addTetget.firstElementChild.textContent = null;

    // pタグの生成
    const p = document.createElement("p");
    p.className = "todo-message";
    p.innerHTML = text;

    // button(戻す)タグの生成
    const backButton = document.createElement("button");
    backButton.innerHTML = "戻る";
    backButton.addEventListener("click", () => {
      // 押下された戻すボタンのliを完了リストから削除
      const deleteTerget = backButton.closest("li");
      document.getElementById("complete-list").removeChild(deleteTerget);

      // 未完了リストに追加する要素
      const addTerget = backButton.closest("li");

      // TODO内容テキストを取得
      const text = addTerget.firstElementChild.firstElementChild.innerText;

      // 未完了のTODOを作成
      createincompleteList(text);
    });

    // 完了リストに追加する要素に各要素を設定
    addTetget.firstElementChild.appendChild(p);
    addTetget.firstElementChild.appendChild(backButton);

    // 完了リストに追加する
    const completeList = document.getElementById("complete-list");
    completeList.appendChild(addTetget);
  });

  // button(削除)タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteLst(deleteButton.closest("li"));
  });

  // liタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
