//(1) ページ本体が読み込まれたタイミングで実行するコード
const result = document.getElementById("result");
if (navigator.geolocation) {
    //(1)位置情報取得処理
    navigator.geolocation.getCurrentPosition(
        (pos) => {
            //(2)位置情報取得成功時の処理
            msg = `緯度:${pos.coords.latitude}<br>
                経度:${pos.coords.longitude}<br>
                方角:${pos.coords.heading}`;
            result.innerHTML = msg;
        }
    );
} else {
    window.alert("geolocation APIに対応しているブラウザーでアクセスしてください。")
}
window.alert(result);