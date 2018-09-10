$(document).ready(function(){

var iduser='';

function getUsers(){
	$.get('/getusers', function(data){
		///alert(data);
		createTable(data, $("#table"));
	})
}
function createTable(mas, element){
	$(element).empty();
	$("<table>").addClass('table').addClass('table-bordered').addClass('table-danger').appendTo(element);
	for(var i=0; i<mas.length; i++){
		$("<tr>").addClass('tr').appendTo('.table');
		for(var key in mas[i]){
			$("<td>").addClass('td').appendTo('.tr:last').text(mas[i][key])
		}
		$("<td>").addClass('td').addClass('d-flex').addClass('justify-content-center').appendTo('tr:last');
		$('<button>').addClass('btn').addClass('btn-danger').appendTo('.td:Last').text('Delete')
		.click(function(){
			var id=$(this).parent().parent().children().filter(':first').text();
			/*console.log(id);*/
			deleteUser(id);
		});
		
		$("<td>").addClass('td').appendTo('tr:last');
		$('<button>').addClass('btn').addClass('btn-primary').appendTo('.td:Last').text('Updete')
		.click(function(){
			var id=$(this).parent().parent().children().filter(':first').text();
			iduser=id;
			var name=$(this).parent().parent().children().filter(':eq(1)').text();
			$('.name').val(name);
			/*console.log(name);*/
			var age=$(this).parent().parent().children().filter(':eq(2)').text();
			$('.age').val(age);
			/*console.log(age);*/
		});

		$('.tr:last td:first').hide();
	}
}



getUsers();


function addUser(name, age){
	var obj={
		name: name,
		age: age
	}

	if(!iduser){
	if (!name || !age) return;
		$.post('/adduser', obj, function(data){
		console.log(data);
		getUsers()
	})
	}
	else{
		obj.id=iduser;
		$.post('/updateuser', obj, function(data){
		console.log(data);
		getUsers()
		iduser='';
		})
	}
}


function deleteUser(id){
	var obj={id:id};
	$.post('/deleteuser', obj, function(data){
		//alert(data);
		getUsers()
	})
}



$('.adduser').click(function(){
	addUser($('.name').val(),
			$('.age').val())
	$('.name').val("");
	$('.age').val("");

})






})