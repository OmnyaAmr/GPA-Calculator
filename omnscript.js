
function AddCourse(){

	var table2= document.getElementById("table2");
	var rowNumber= document.getElementById("table2").rows.length;
	var list='<select>'+
				'<option value="0">-Select-</option>'+
				'<option value="0.7">A+</option>'+
  				'<option value="1">A</option>'+
  				'<option value="1.3">A-</option>'+
  				'<option value="2">B+</option>'+
  				'<option value="2">B</option>'+
 				'<option value="2.3">B-</option>'+
 				'<option value="2.7">C+</option>'+
  				'<option value="3">C</option>'+
  				'<option value="3.3">C-</option>'+
 				'<option value="3.7">D+</option>'+
  				'<option value="4">D</option>'+
 				'<option value="5">F</option>'+
 				'</select>';

	if(rowNumber<11){

		var row=table2.insertRow(-1);
		var cell1=row.insertCell(0);
		var cell2=row.insertCell(1);
		var cell3=row.insertCell(2);

		var key=document.createElement("input");
		key.setAttribute("style","width:98%");
		key.type="text";
		cell1.appendChild(key);
		var key2=document.createElement("input");
		key2.setAttribute("style","width:96%");
		key2.type="text";
		cell2.appendChild(key2);
		cell3.innerHTML=list;
			}
	else{
		alert("You Cannot Add More Courses!");
	}

		}

 function CalculateGPA(){
	var table2= document.getElementById("table2");
	var rows= document.getElementById("table2").rows.length;
	var scredits = 0;
	var sgrades = 0;
	for(i = 1; i < rows; ++i) {
		var row = document.getElementById("table2").rows[i];
		var credits = Number(row.cells[1].getElementsByTagName("input")[0].value);
		var grades = Number(row.cells[2].getElementsByTagName("select")[0].value);
		if(grades != 0) 
		scredits += credits;
		sgrades += credits * grades;
	}
	var gpa = sgrades / scredits;
	alert("GPA="+(Math.round(gpa * 100) / 100)+"\n"+"Credits="+scredits);
}
		