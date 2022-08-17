let fields = [
    {
        id: '1',
        label: 'Haben sie Herzrasen',
        type: 'text',
        description: 'Sagen sie ja oder nein',
        value: orgParams.get('1') || ''
    },
    {
        id: '2',
        label: 'Frage 2',
        type: 'text',
        description: '',
        value: orgParams.get('2') || ''
    }
];