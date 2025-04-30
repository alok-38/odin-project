async generateCoverLetter = () => {
    const resume = document.getElementById('resume').value;
    const job = document.getElementById('job').value;
    const output = document.getElementById('output');

    const prompt = `Write a professional cover letter based on this resume and job posting.

Resume:
${resume}
Job Description:
${job}`;
}