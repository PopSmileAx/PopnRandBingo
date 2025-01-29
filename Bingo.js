function ohayou() {
  alert("Hello!");
}

function download() {
  var target = document.getElementById("target");
  var options = {
    type: "png",
    quality: 1
  };
  html2canvas(target, options).then(function (canvas) {
    var dataURL = canvas.toDataURL();
    var link = document.createElement("a");
    link.href = dataURL;
    link.download = "download.png";
    link.click();
  });
}

function makeRandom(pathNo){

  // (1) XMLHttpRequestオブジェクトを作成
  const xhr = new XMLHttpRequest();

// (2) 取得するファイルの設定
  switch (pathNo){
    case 47:
      xhr.open('get', '/Data/MusicName.txt');
      break;
    default:
      break;
  }

  // xhr.responseType = 'blob'; (ファイル形式によって設定）

  // (3) リクエスト（要求）を送信
  xhr.send();

  xhr.onreadystatechange = function() 
  {

    // (4) 通信が正常に完了したか確認
    if( xhr.readyState === 4 && xhr.status === 200) 
    {

      // (5) 取得したレスポンスをページに表示
      const file_area = document.getElementById('file_area');
      //file_area.innerHTML = this.responseText.replace(/\n/g, "<br>");

      //改行ごとに配列化
      var arr = this.responseText.split('\n');
      var workArray = [];

      for(var i=0,len=arr.length;i<9;i++,len--)
      {
          rand = Math.floor( Math.random() * len); // 0～len-1の範囲の整数からランダムに値を取得
          workArray.push(arr.splice(rand,1)[0]); // 配列のランダム値に対応するインデックスを得たうえで元々の配列から取り除く
      
          console.log("arr:" + arr);
          console.log("randArr:" + workArray);
      }

      let table = document.getElementById('target');
      let cells = table.querySelectorAll('td');
      let index = 0;
      cells.forEach( (cell) =>
        {
          cell.innerText = workArray[index];
          index++;
        }  );
    }
  }
};