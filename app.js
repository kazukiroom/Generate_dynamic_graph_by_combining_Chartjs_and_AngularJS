var app = angular.module('myApp', []);
app.controller('formCtrl', function () {
	//念の為thisを退避
	var me = this;
	//canvas取得
	var can = document.getElementById("myCan");
	var ctx = can.getContext("2d");
	//グラフの値
	me.items = [
		//{値,月度}
		{num:120,month:1}, 
		{num:220,month:2}, 
		{num:332,month:3}, 
		{num:210,month:4}, 
		{num:460,month:5}, 
		{num:520,month:6}
	];

	//値を配列に入れ替えてから、Chart.jsへ渡す
	var addData = (function(){
		var arr = [];
		for(var i = 0; i<me.items.length; i++){
			arr.push(me.items[i].num);
		}
		return arr;
	}());
	chartData.datasets[0].data = addData;

	//グラフを生成(Line:折れ線グラフ)
	var myChart = new Chart(ctx).Line(chartData);

	//フォームの値に変更があったら
	me.change = function(formName,ind){
		//フォームにエラーが無いかチェック
		if(!formName.$valid)return false;
		//下記のプロパティを差し替えることによって、グラフを動的に変更できる
		myChart.datasets[0].points[ind].value = me.items[ind].num;
		//グラフ描画指示
		myChart.update();
	};
});

//Chart.jsへ渡すデータ(Line:折れ線グラフ用)
var chartData ={
	labels: ["1月","2月","3月","4月","5月","6月"],//X軸のラベル
	datasets: [
	{
		label: "My First dataset",//項目名
		fillColor: "rgba(200,200,220,0.2)",//塗りつぶす色
		strokeColor: "rgba(200,200,220,1)",//線の色
		pointColor: "rgba(200,200,220,1)",//値の点を塗りつぶす色
		pointStrokeColor: "#fff",//値の点の枠線の色
		pointHighlightFill: "#fff",//マウスオーバー時値の点を塗りつぶす色
		pointHighlightStroke: "rgba(220,220,220,1)",//マウスオーバー時値の点の枠線を塗りつぶす色
		data: []//値(動的にバインドする為、空にしておく)
	}
	]
};