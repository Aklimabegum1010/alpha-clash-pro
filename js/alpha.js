function play(){
    const section1 = document.getElementById('section-1');
    section1.classList.add('hidden');




const section2 = document.getElementById('section-2');
// console.log(section2.classList)

section2.classList.remove('hidden')

}






function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('')
    console.log(alphabets)
}