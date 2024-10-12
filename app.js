let question=document.querySelector('.question');
let choice=document.querySelector('.choice');
let result=document.querySelector('.result');
let nextBtn=document.querySelector('.next');
let pcount=0;
let quiz=[
	{
		question:"What is 12^2?",
		choice:['144','134','124','164'],
		correct:'144',
	},
	{
		question:"What is capital of Japan?",
		choice:['Kyoto','Hiroshima','Tokyo','Nagasaki'],
		correct:'Tokyo',
	},
	{
		question:"What is 5^3?",
		choice:['145','135','125','175'],
		correct:'125',
	},
	{
		question:"what is 25^2?",
		choice:['645','715','585','625'],
		correct:'625',
	},
	{
		question:"",
		choice:[''],
		correct:'',
	},
];
// console.log(quiz[now].question);
let now=0;
function display(){
	question.innerText=quiz[now].question;
	quiz[now].choice.forEach(data=>{
		console.log(data);
		let btn=document.createElement('button');
		btn.innerText=data;
		choice.appendChild(btn);
		btn.addEventListener('click',()=> checkAnswer(data));
	});
	nextBtn.style.display="none";
}
function checkAnswer(data){
	// alert(data);
	if(data==quiz[now].correct){
		result.innerText="Correct answer!!";
		pcount++;
	}else{
		result.innerText="Wrong answer!! Correct answer is "+quiz[now].correct+".";
	}
	nextBtn.style.display="block";
}
nextBtn.addEventListener('click',()=>{
	now++;
	question.innerText="";
	choice.innerHTML="";
	display();
	if(now==quiz.length-1){
		question.innerText="";
		result.innerText="Quiz finished! Your score is "+(quiz.length-1)+"/"+pcount;
		choice.innerHTML="";
		now=0;
		nextBtn.style.display="none";
	}
});
display();