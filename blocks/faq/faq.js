export default function decorate(block) {
    const cols = [...block.firstElementChild.children];
    block.classList.add(`columns-${cols.length}-cols`);
  
    // setup image columns
    [...block.children].forEach((row) => {
      [...row.children].forEach((col) => {
        const pic = col.querySelector('picture');
        if (pic) {
          const picWrapper = pic.closest('div');
          if (picWrapper && picWrapper.children.length === 1) {
            // picture is only content in column
            picWrapper.classList.add('columns-img-col');
          }
        }
      });
    });
  
    const questions = block.querySelectorAll('h3');

    questions.forEach((question) => {
      question.addEventListener('click', () => {
        const answers = question.parentElement.nextElementSibling.querySelectorAll('p');
        
        // Toggle active class for the clicked question
        question.classList.toggle('active');
        
        answers.forEach((answer) => {
          if (answer.style.display === 'block') {
            answer.style.display = 'none';
          } else {
            answer.style.display = 'block';
          }
        });
      });
    });


    


    
  }
  