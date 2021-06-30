export interface Option {
    title: string
}

export interface Question {
    title: string,
    type: 'single' | 'multiple',
    options: Array<Option>,
    correctAnswer: Array<number>
}

export interface Survey {
    id: string,
    title: string,
    questions: Array<Question>
}