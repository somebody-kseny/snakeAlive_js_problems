// https://rubaxa.github.io/playground/#async-pause

// Реализовать паузу между командами
async function main() {
	// Какая-то логика до паузы
	let expr = 123;

	// Пауза в ~500ms секунду:
	// ...ваш код...
	const waitTill = new Date(new Date().getTime() + 500);
    while(waitTill > new Date()){}
 

	// Какая-то логика после паузы
	return +expr.toString().split('').reverse().join('')
}


const ts = Date.now();
main().then((res) => {
	console.log(`result: ${res}, time: ${Date.now() - ts}ms`);
});