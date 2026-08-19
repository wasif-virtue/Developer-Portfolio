 const resumeBtns = document.querySelectorAll('.resume-btn');
 resumeBtns.forEach((btn, idx) => {
     btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');
        resumeDetails.forEach(d => d.classList.remove('active'));
        resumeDetails[idx].classList.add('active');
         resumeBtns.forEach(b => b.classList.remove('active'));
         btn.classList.add('active');
     });
 });