jQuery(function ($) {

    // テーブルの行を追加する処理です
    $("#btn_add_user_list").on("click", function () { // #btn_add_user_listがクリックされたら処理を実行します

        $("#user_list tbody tr:first-child") // テーブルの一番初めの行を指定する
            .clone(true)                     // 指定した一番初めの行のHTML要素を複製する
            .appendTo("#user_list tbody");   // 複製した要素をtbodyに追加する
        
        
        $("#user_list tbody tr:last-child input").val(""); // 追加した行の値をクリアする
        
    });

    // テーブルの行を削除する処理です
    $(".btn_delete").on("click", function () { // .btn_deleteがクリックされたら処理を実行します

        $(this)             // クリックした削除ボタンを指定する
            .closest("tr")  // 指定した要素の直近のtr要素を取得する
            .remove();      // 取得した要素を削除する
        
    });

	// Jsonデータ読み込み
    $.get("../json/data.json" , function(data) {
      var ulObj = $("#demo"),
      len = data.length;

      for(var i = 0; i < len; i++) {
        ulObj.append($("<li>").attr({"id":data[i].id}).text(data[i].name));
      }
    });

	// 「全選択」する
	$('#all').on('click', function() {
		$("input[name='list_chk']").prop('checked', this.checked);
	});


});
