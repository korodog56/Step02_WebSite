let click_flg = 0;

var bone_Click = function (e) {
  if (click_flg == 0) {
    const select_bone_id = e.id;
    const imageArea = document.getElementById(select_bone_id);
    const images = [
      "assets/images/chihuahua.png",
      "assets/images/border_collie.png",
      "assets/images/golden_retriever.png",
    ];
    const imageNum = Math.floor(Math.random() * images.length);
    imageArea.src = images[imageNum];
    click_flg = click_flg + 1;
  }
};
