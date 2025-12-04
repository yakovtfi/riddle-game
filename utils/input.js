import readlineSync from 'readline-sync';


export function askQuestion(question){
    return readlineSync.question(question)
}
