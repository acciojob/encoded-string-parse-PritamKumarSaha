const parseCode = (str) => {
  // your code here
	let splitingStr = str.split(0);
	let ans=[];
	
	for(let i=0; i<splitingStr.length; i++) {
		if(splitingStr[i] === undefined) {
			continue;
		}
		else {
			ans.push(splitingStr[i]);
		}
	}
	let [a,b,c] = ans;
	return{
		firstName: a,
		lastName: b,
		id: c
	}
};

// Do not change the code below
// const str = prompt("Enter str: ");
// alert(JSON.stringify(parseCode(str)));
