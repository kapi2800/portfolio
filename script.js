document.getElementById('show-more-btn').addEventListener('click', function() {
    var moreProjects = document.getElementById('more-projects');
    if (moreProjects.style.display === "none") {
        moreProjects.style.display = "flex";
        this.textContent = "Show Less Projects";
    } else {
        moreProjects.style.display = "none";
        this.textContent = "Show More Projects";
    }
});
function showSkill(skill) {
    var desc = {
        "HTML": "HTML is used to create and organize content for web pages.",
        "CSS": "CSS is used for styling and layout of web pages.",
        "JavaScript": "JavaScript adds logic and interactivity to websites.",
        "Python": "Python is a versatile language for backend, automation, and ML.",
        "Java": "Java is widely used for applications and backend systems.",
        "C/C++": "C/C++ are foundational languages for systems programming.",
        "MySQL": "MySQL is a database system used to store and manage data.",
        "Git": "Git is a version control tool for managing code efficiently."
    };
    document.getElementById('skill-desc').textContent = desc[skill] || "";
}
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for contacting me! I'll get back to you soon.");
    this.reset();
});