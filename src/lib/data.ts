export function getChapters() {
	return [
		{
			number: '1',
			name: 'herzrasen',
			label: 'Haben Sie Herzrasen?',
			enabled: false,
			template: 'Palpitation',
			questions: [
				{
					id: '2',
					label: 'Wie häufig haben Sie Herzrasen?',
					type: 'select',
					freetextplaceholder: 'Bitte beschreiben Sie in welchem Muster es auftritt.',
					value: '',
					options: [
						{
							value: 'mehrmals täglich'
						},
						{
							value: 'einmal täglich'
						},
						{
							value: 'einmal pro Woche'
						},
						{
							value: 'alle paar Monate'
						},
						{
							value: 'sehr unterschiedlich'
						},
						{
							value: 'mal häufig dann lange Zeit nichts'
						},
						{
							value: 'sehr selten'
						},
						{
							freeanswer: '1',
							value: 'anderes:'
						}
					]
				},
				{
					id: '3',
					label: 'Wie lange hält das Herzrasen an?',
					type: 'select',
					freetextplaceholder: 'Bitte beschreiben Sie die Dauer.',
					value: '',
					options: [
						{
							value: 'nur Sekunden'
						},
						{
							value: 'ca. eine halbe Minute'
						},
						{
							value: 'ca. 1-2 Minuten'
						},
						{
							value: 'ca. eine halbe Stunde'
						},
						{
							value: 'mehrere Stunden'
						},
						{
							value: 'mal nur kurz für Minuten mal Stunden'
						},
						{
							freeanswer: '1',
							value: 'anderes:'
						}
					]
				},
				{
					id: '5',
					label: 'Wie beginnt das Herzrasen?',
					type: 'select',
					freetextplaceholder: 'Bitte beschreiben Sie genau, wie es beginnt',
					value: '',
					options: [
						{
							value: 'plötzlich'
						},
						{
							value: 'langsam abklingend'
						},
						{
							value: 'weiss nicht genau'
						},
						{
							freeanswer: '1',
							value: 'anderes'
						}
					]
				},
				{
					id: '6',
					label: 'Wie hört das Herzrasen auf?',
					type: 'select',
					freetextplaceholder: 'Bitte beschreiben Sie genau, wie es aufhört.',
					value: '',
					options: [
						{
							value: 'plötzlich'
						},
						{
							value: 'langsam abklingend'
						},
						{
							value: 'weiss nicht genau'
						},
						{
							freeanswer: '1',
							value: 'anderes'
						}
					]
				},
				{
					id: '7',
					label: 'Haben sie begleitende Symptome in dieser Zeit?',
					type: 'checkboxgroup',
					freetextplaceholder: 'Bitte beschreiben Sie die Symptome, welche Sie erfahren.',
					name: 'group7',
					value: '',
					boxes: [
						{
							id: 'a',
							label: 'Schwindel',
							value: 'Schwindel'
						},
						{
							id: 'b',
							label: 'Brustenge',
							value: 'Brustenge'
						},
						{
							id: 'c',
							label: 'Brustschmerzen',
							value: 'Brustschmerzen'
						},
						{
							id: 'd',
							label: 'Luftprobleme',
							value: 'Luftprobleme'
						},
						{
							id: 'e',
							freeanswer: '1',
							label: 'anderes',
							value: 'anderes:'
						}
					]
				},
				{
					id: '8',
					label: 'Seit wann kennen Sie dieses Herzrasen?',
					type: 'select',
					freetextplaceholder: 'Bitte beschreiben Sie seit wann.',
					value: '',
					options: [
						{
							value: 'schon Jahre'
						},
						{
							value: 'erst seit Kurzem'
						},
						{
							value: 'ich hatte es früher, dann lange nicht'
						},
						{
							freeanswer: '1',
							value: 'anderes'
						}
					]
				},
				{
					id: '9',
					label: 'Können Sie das Herzrasen durch etwas auslösen?',
					type: 'radiogroup',
					name: 'group9',
					freetextplaceholder: 'Bitte beschreiben Sie, wie Sie es auslösen können.',
					value: '',
					radios: [
						{
							id: 'a',
							value: 'nein'
						},
						{
							id: 'b',
							freeanswer: '1',
							value: 'ja'
						}
					]
				},
				{
					id: '10',
					label: 'Können Sie das Herzrasen durch etwas beenden?',
					type: 'radiogroup',
					name: 'group10',
					freetextplaceholder: 'Bitte beschreiben Sie, wie Sie es beenden können.',
					value: '',
					radios: [
						{
							id: 'a',
							value: 'nein'
						},
						{
							id: 'b',
							freeanswer: '1',
							value: 'ja'
						}
					]
				},
				{
					id: '11',
					label: 'Wurde dieses Herzrasen schon einmal behandelt?',
					type: 'checkboxgroup',
					name: 'group11',
					freeanswer: '1',
					value: '',
					boxes: [
						{
							id: 'a',
							label: 'nein',
							value: 'nein'
						},
						{
							id: 'b',
							label: 'ja, mit Medikamenten',
							value: 'Medikamente'
						},
						{
							id: 'c',
							label: 'ja, mit einem Herzkatheter',
							value: 'Herzkatheter'
						}
					]
				},
				{
					id: '12',
					label: 'Wie fühlen Sie den Herzschlag?',
					type: 'checkboxgroup',
					name: 'group12',
					freetextplaceholder: 'Bitte beschreiben Sie.',
					value: '',
					boxes: [
						{
							id: 'a',
							label: 'sehr schnell',
							value: 'sehr schnell'
						},
						{
							id: 'b',
							label: 'mässig schnell',
							value: 'mässig schnell'
						},
						{
							id: 'c',
							label: 'regelmässig aufeinander folgend',
							value: 'regelmässig aufeinander folgend'
						},
						{
							id: 'd',
							label: 'unregelmässig',
							value: 'unregelmässig'
						},
						{
							id: 'e',
							freeanswer: '1',

							label: 'anderes',
							value: 'anderes'
						}
					]
				}
			]
		},
		{
			number: '2',
			label: 'Haben Sie Herzstolpern?',
			name: 'herzstolpern',
			enabled: false,
			questions: [
				{
					id: '6',
					label: 'wie schnell denn?',
					type: 'text',
					description: 'Sagen sie ja oder nein',
					value: ''
				},
				{
					id: '7',
					label: 'Frage 2',
					type: 'text',
					description: '',
					value: ''
				},
				{
					id: '8',
					label: 'Frage 3',
					type: 'checkbox',
					description: 'Hier checken bitte',
					value: '',
					defaultstate: 'checked'
				},
				{
					id: '9',
					label: 'Beschreiben Sie was oben noch fehlt',
					type: 'textarea',
					description: 'Hier sollte ne Textarea sein obendran',
					value: '',
					defaultstate: '',
					cols: '30',
					rows: '3',
					text: '',
					max: '100'
				}
			]
		},
		{
			number: '3',
			name: 'strongness',
			label: 'Haben Sie ungewöhnlich starken Herzschlag?',
			enabled: false,
			questions: [
				{
					id: '6',
					label: 'wie schnell denn?',
					type: 'text',
					description: 'Sagen sie ja oder nein',
					value: ''
				},
				{
					id: '7',
					label: 'Frage 2',
					type: 'text',
					description: '',
					value: ''
				},
				{
					id: '8',
					label: 'Frage 3',
					type: 'checkbox',
					description: 'Hier checken bitte',
					value: '',
					defaultstate: 'checked'
				},
				{
					id: '9',
					label: 'Beschreiben Sie was oben noch fehlt',
					type: 'textarea',
					description: 'Hier sollte ne Textarea sein obendran',
					value: '',
					defaultstate: '',
					cols: '30',
					rows: '3',
					text: '',
					max: '100'
				}
			]
		},
		{
			number: '4',
			label: 'Haben Sie unregelmässigen Herzschlag?',
			name: 'rhythmus',
			enabled: false,
			questions: [
				{
					id: '6',
					label: 'wie schnell denn?',
					type: 'text',
					description: 'Sagen sie ja oder nein',
					value: ''
				},
				{
					id: '7',
					label: 'Frage 2',
					type: 'text',
					description: '',
					value: ''
				},
				{
					id: '8',
					label: 'Frage 3',
					type: 'checkbox',
					description: 'Hier checken bitte',
					value: '',
					defaultstate: 'checked'
				},
				{
					id: '9',
					label: 'Beschreiben Sie was oben noch fehlt',
					type: 'textarea',
					description: 'Hier sollte ne Textarea sein obendran',
					value: '',
					defaultstate: '',
					cols: '30',
					rows: '3',
					text: 'xxx',
					max: '100'
				}
			]
		},
		{
			number: '5',
			name: 'anderes',
			label: 'Haben Sie etwas anderes?',
			enabled: false,
			questions: []
		}
	];
}
