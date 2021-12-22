// https://rubaxa.github.io/playground/#parallel

// Параллельные вычисления

function parallel(tasks, onAllTasksComplete) {
	const results = [];
  
	function onTaskComplete(index, result) {
	  results[index] = result;
	  if (Object.keys(results).length === tasks.length) {
		onAllTasksComplete(results);
	  }
	}
  
	for (let i = 0; i < tasks.length; i++) {
	  const onComplete = r => onTaskComplete(i, r);
	  const result = tasks[i](onComplete);
	  if (result !== undefined) {
		onComplete(result);
	  }
	}
  }


parallel([
	function (resolve) {
		setTimeout(function () {
			resolve(10);
		}, 50);
	},
	function () {
		return 5;
	},
	function (resolve) {
		setTimeout(function () {
			resolve(0);
		}, 10)
	}
], function (results) {
	console.log(results); // [10, 5, 0]
});

	