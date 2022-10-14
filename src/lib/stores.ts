import { writable, readable } from 'svelte/store';

export const chapters = readable({
	'1': 'Herzrasen',
	'2': 'Brustschmerzen',
	'3': 'Atemnot',
	'4': 'Schwindel',
	'5': 'Herzstolpern',
	'6': 'Herzrhythmusstörungen',
	'7': 'Bewusstseinsverlust',
	'8': 'Leistungsschwächen',
	'9': 'geschwollene Beine oder Füsse (Ödem)'
});

export const answers = writable({
	answer0: '',
	answer1_0: '',
	answer1_1_1: '',
	answer1_1_2: '',
	answer1_1_3: '',
	answer1_1_4: '',
	answer1_1_5: '',
	answer1_1_6: '',
	answer1_2_1: '',
	answer1_2_2: '',
	answer1_2_3: '',
	answer1_2_4: '',
	answer1_2_5: '',
	answer1_2_6: '',
	answer1_2_7: '',
	answer1_3_1: '',
	answer1_3_2: '',
	answer1_3_3: '',
	answer1_3_4: '',
	answer1_3_5: '',
	answer1_3_6: '',
	answer1_3_7: '',
	answer1_3_8: '',
	/////////////////////////////
	answer2_0: '',
	answer2_1_1: '',
	answer2_1_2: '',
	answer2_1_3: '',
	answer2_1_4: '',
	answer2_1_5: '',
	answer2_1_6: '',
	answer2_1_7: '',
	answer2_2_1: '',
	answer2_2_2: '',
	answer2_2_3: '',
	answer2_2_4: '',
	answer2_2_5: '',
	answer2_2_6: '',
	answer2_2_7: '',
	answer2_3_1: '',
	answer2_3_2: '',
	answer2_3_3: '',
	answer2_3_4: '',
	answer2_3_5: '',
	answer2_3_6: '',
	answer2_3_7: '',
	answer2_4_1: '',
	answer2_4_2: '',
	answer2_4_3: '',
	answer2_4_4: '',
	answer2_4_5: '',
	answer2_4_6: '',
	answer2_4_7: '',
	////////////////////////////
	answer3_0: '',
	answer3_1_1: '',
	answer3_1_2: '',
	answer3_1_3: '',
	answer3_1_4: '',
	answer3_1_5: '',
	answer3_1_6: '',
	answer3_1_7: '',
	answer3_1_8: '',
	answer3_2_1: '',
	answer3_2_2: '',
	answer3_2_3: '',
	answer3_2_4: '',
	answer3_2_5: '',
	answer3_2_6: '',
	answer3_2_7: '',
	answer3_3_1: '',
	answer3_3_2: '',
	answer3_3_3: '',
	answer3_3_4: '',
	answer3_3_5: '',
	answer3_3_6: '',
	answer3_3_7: '',
	////////////////////////////
	answer4_0: '',
	answer4_1_1: '',
    answer4_1_2: '',
    answer4_1_3: '',
    answer4_1_4: '',
    answer4_1_5: '',
    answer4_1_6: '',
    answer4_2_1: '',
    answer4_2_2: '',
    answer4_2_3: '',
    answer4_2_4: '',
    answer4_2_5: '',
    answer4_2_6: '',
    answer4_3_1: '',
    answer4_3_2: '',
    answer4_3_3: '',
    answer4_3_4: '',
    answer4_3_5: '',
    answer4_3_6: '',
	////////////////////////////
	answer5_0: '',
	answer5_1_1: '',
    answer5_1_2: '',
    answer5_1_3: '',
    answer5_1_4: '',
    answer5_1_5: '',
    answer5_1_6: '',
    answer5_2_1: '',
    answer5_2_2: '',
    answer5_2_3: '',
    answer5_2_4: '',
    answer5_2_5: '',
    answer5_2_6: '',
    answer5_3_1: '',
    answer5_3_2: '',
    answer5_3_3: '',
    answer5_3_4: '',
    answer5_3_5: '',
    answer5_3_6: '',
	////////////////////////////
	answer6_0: '',
	answer6_1_1: '',
    answer6_1_2: '',
    answer6_1_3: '',
    answer6_1_4: '',
    answer6_1_5: '',
    answer6_1_6: '',
    answer6_2_1: '',
    answer6_2_2: '',
    answer6_2_3: '',
    answer6_2_4: '',
    answer6_2_5: '',
    answer6_2_6: '',
    answer6_3_1: '',
    answer6_3_2: '',
    answer6_3_3: '',
    answer6_3_4: '',
    answer6_3_5: '',
    answer6_3_6: '',
	////////////////////////////
	answer7_0: '',
	answer7_1_1: '',
    answer7_1_2: '',
    answer7_1_3: '',
    answer7_1_4: '',
    answer7_1_5: '',
    answer7_1_6: '',
    answer7_2_1: '',
    answer7_2_2: '',
    answer7_2_3: '',
    answer7_2_4: '',
    answer7_2_5: '',
    answer7_2_6: '',
    answer7_3_1: '',
    answer7_3_2: '',
    answer7_3_3: '',
    answer7_3_4: '',
    answer7_3_5: '',
    answer7_3_6: '',
	////////////////////////////
	answer8_0: '',
	answer8_1_1: '',
    answer8_1_2: '',
    answer8_1_3: '',
    answer8_1_4: '',
    answer8_1_5: '',
    answer8_1_6: '',
    answer8_2_1: '',
    answer8_2_2: '',
    answer8_2_3: '',
    answer8_2_4: '',
    answer8_2_5: '',
    answer8_2_6: '',
    answer8_3_1: '',
    answer8_3_2: '',
    answer8_3_3: '',
    answer8_3_4: '',
    answer8_3_5: '',
    answer8_3_6: '',
	////////////////////////////
	answer9_0: '',
	answer9_1_1: '',
    answer9_1_2: '',
    answer9_1_3: '',
    answer9_1_4: '',
    answer9_1_5: '',
    answer9_1_6: '',
    answer9_2_1: '',
    answer9_2_2: '',
    answer9_2_3: '',
    answer9_2_4: '',
    answer9_2_5: '',
    answer9_2_6: '',
    answer9_3_1: '',
    answer9_3_2: '',
    answer9_3_3: '',
    answer9_3_4: '',
    answer9_3_5: '',
    answer9_3_6: '',
	////////////////////////////
	risk0: '',
	risk1_1: '',
	risk1_2: '',
	risk1_3: '',
	risk1_4: '',
	risk1_5: '',
	risk1_6: '',
	risk2_1: '',
	risk2_2: '',
	risk2_3: '',
	risk2_4: '',
	risk2_5: '',
	risk2_6: '',
	risk3_1: '',
	risk3_2: '',
	risk3_3: '',
	risk3_4: '',
	risk3_5: '',
	risk3_6: '',
	risk4_1: '',
	risk4_2: '',
	risk4_3: '',
	risk4_4: '',
	risk4_5: '',
	risk4_6: '',
	risk5_1: '',
	risk5_2: '',
	risk5_3: '',
	risk5_4: '',
	risk5_5: '',
	risk5_6: '',
	risk6_1: '',
	risk6_2: '',
});
