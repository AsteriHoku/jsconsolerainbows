console.log("Hallo");

const RFG_COLORS = ['31','33','32','36','34','35'];

const RBG_COLORS = [
	'41',//red
	'43',//yellow
	'42',//green
	'46',//cyan
	'44',//blue
	'45',//magenta
];

const sog = 'Testing Rainbows is fun! !@#$%^&*()1234567890{}[]:";`!@#$%^&*()_\-+=\[\]{};:"\\|,.<>\/?~';
let fgs = '';
let ic = 0;

for (let i = 0; i < sog.length; i++)
{
	console.log(`iteration ${i} - ic = ${ic} - char = ${sog[i]}`);

	if (sog[i] == ' '){
		fgs += ' ';
	} else {
		fgs += `\u001b[${RFG_COLORS[ic]}m${sog[i]}`;
		ic++;
	}

	if (ic === RFG_COLORS.length) ic = 0;
}

console.log(`\u001b[0m${fgs}\u001b[0m`);

//background
let bic = 0;
let bgs = '\u001b[30m';//start with text black

for (let i = 0; i < sog.length; i++)
{
	console.log(`iteration ${i} - bic = ${bic} - char = ${sog[i]}`);

	if (sog[i] == ' '){
		bgs += ' ';
	} else {
		bgs += `\u001b[${RBG_COLORS[bic]}m${sog[i]}`;
		bic++;
	}

	if (bic === RFG_COLORS.length) bic = 0;
}
console.log(`\u001b[0m${fgs}\u001b[0m`);
console.log(`\u001b[0m${bgs}\u001b[0m`);