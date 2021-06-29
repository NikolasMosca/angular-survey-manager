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
    id: number,
    title: string,
    questions: Array<Question>
}