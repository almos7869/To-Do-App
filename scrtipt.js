
let btn = document.querySelector('.btn');
let task= document.querySelector('.tasks')

function show(){
    let input_text = document.querySelector('.input').value;
    var div = document.createElement('div');
    div.className = 'bor';
//TEXT INPUT
    var para = document.createElement('p');
    para.className='para';
    var para_text = document.createTextNode(input_text); 
    para.appendChild(para_text)
//DATE INPUT
    let input_date = document.querySelector('.date1').value;
    var pdate = document.createElement('p');
    pdate.className='pdate';
    var date_text = document.createTextNode(input_date); 
    pdate.appendChild(date_text)
//TIME INPUT
    let input_time = document.querySelector('.time1').value;
    var ptime = document.createElement('p');
    ptime.className='ptime';
    var time_text = document.createTextNode(input_time); 
    ptime.appendChild(time_text);

//DELETE
var del = document.createElement('BUTTON');
del.className='delete';
var del_text = document.createTextNode('Delete'); 
del.appendChild(del_text);

//STATUS
var status1 = document.createElement('div');
status1.className = 'status';
//active
var active = document.createElement('BUTTON');
active.className='active';
var active_text = document.createTextNode('Active'); 
active.appendChild(active_text);
//complete
var complete = document.createElement('BUTTON');
complete.className='complete';
var complete_text = document.createTextNode('Complete'); 
complete.appendChild(complete_text);

status1.appendChild(active);
status1.appendChild(complete);

//APPEND
    let e = div.appendChild(para);
    let f = div.appendChild(pdate);
    let g = div.appendChild(ptime);
    let i= div.appendChild(status1);
    let h = div.appendChild(del);
    task.appendChild(div);

    function delete1(){
        div.style.display = 'none';
      }
      del.onclick = delete1;

      function complete1(){
        para.style.textDecorationLine = 'line-through';
        para.style.color = 'green';
        complete.style.color='white';
        complete.style.backgroundColor='red';
        active.style.color='balck';
        active.style.backgroundColor='grey';
        div.style.backgroundColor='#daf8da';
      }
      complete.onclick = complete1;

      function active1(){
        para.style.textDecorationLine = 'underline';
        para.style.color = 'blue';
        active.style.color='white';
        active.style.backgroundColor='blue';
        complete.style.color='black';
        complete.style.backgroundColor='grey';
        div.style.backgroundColor='#c6e9f5';
      }
      active.onclick = active1;
}


btn.onclick = show; 
