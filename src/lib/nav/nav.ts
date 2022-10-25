import { fields } from "$lib/data/fields";

export const showIntro = function showIntro() {
    fields.app.state = 'intro';
}

export const showConfig = function showConfig() {
    fields.app.state = 'config';
}

export const showQuestions = function showQuestions() {
    fields.app.state = 'questions';
}

export const showGenerator = function showGenerator() {
    fields.app.state = 'generator';
}
