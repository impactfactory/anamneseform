export function showConfig() {
	state = 'config';
	start = 0;
	end = 2;
	startChapter = '';
	endChapter = '';
}
export function showGenerator() {
	state = 'generator';
}

export function showIntro() {
	state = 'intro';
}

export function showQuestions() {
	state = 'questions';
	start = 0;
	end = 2;
	startChapter = '';
	endChapter = '';
}

export function showRisks() {
	state = 'risks';
}

export function lastRisks() {
	state = 'questions';
	start = '10';
	end = '12';
}

//Risks and Questions Navi

export function nextChapter(x: number, y: number) {
	start = 0;
	end = 2;
	startChapter = x + 1;
	endChapter = y + 1;
}

export function nextQuestions(x: number, y: number) {
	start = x + 2;
	end = y + 2;
}

export function lastQuestions(x: number, y: number) {
	start = x - 2;
	end = y - 2;
}
