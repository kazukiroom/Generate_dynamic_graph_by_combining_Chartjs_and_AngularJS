var app = angular.module('myApp', []);
app.controller('formCtrl', function () {
	//�O�̈�this��ޔ�
	var me = this;
	//canvas�擾
	var can = document.getElementById("myCan");
	var ctx = can.getContext("2d");
	//�O���t�̒l
	me.items = [
		//{�l,���x}
		{num:120,month:1}, 
		{num:220,month:2}, 
		{num:332,month:3}, 
		{num:210,month:4}, 
		{num:460,month:5}, 
		{num:520,month:6}
	];

	//�l��z��ɓ���ւ��Ă���AChart.js�֓n��
	var addData = (function(){
		var arr = [];
		for(var i = 0; i<me.items.length; i++){
			arr.push(me.items[i].num);
		}
		return arr;
	}());
	chartData.datasets[0].data = addData;

	//�O���t�𐶐�(Line:�܂���O���t)
	var myChart = new Chart(ctx).Line(chartData);

	//�t�H�[���̒l�ɕύX����������
	me.change = function(formName,ind){
		//�t�H�[���ɃG���[���������`�F�b�N
		if(!formName.$valid)return false;
		//���L�̃v���p�e�B�������ւ��邱�Ƃɂ���āA�O���t�𓮓I�ɕύX�ł���
		myChart.datasets[0].points[ind].value = me.items[ind].num;
		//�O���t�`��w��
		myChart.update();
	};
});

//Chart.js�֓n���f�[�^(Line:�܂���O���t�p)
var chartData ={
	labels: ["1��","2��","3��","4��","5��","6��"],//X���̃��x��
	datasets: [
	{
		label: "My First dataset",//���ږ�
		fillColor: "rgba(200,200,220,0.2)",//�h��Ԃ��F
		strokeColor: "rgba(200,200,220,1)",//���̐F
		pointColor: "rgba(200,200,220,1)",//�l�̓_��h��Ԃ��F
		pointStrokeColor: "#fff",//�l�̓_�̘g���̐F
		pointHighlightFill: "#fff",//�}�E�X�I�[�o�[���l�̓_��h��Ԃ��F
		pointHighlightStroke: "rgba(220,220,220,1)",//�}�E�X�I�[�o�[���l�̓_�̘g����h��Ԃ��F
		data: []//�l(���I�Ƀo�C���h����ׁA��ɂ��Ă���)
	}
	]
};