document.getElementById("skills").addEventListener("click", function () {
  document.getElementById("info").innerHTML = `<ul>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>C language</li>
                        </ul>`;
});
document.getElementById("education").addEventListener("click", function () {
  document.getElementById("info").innerHTML = `<ul>
                            <li>Pursuing B.Tech in Robotics and AI</li>
                        </ul>`;
});
document.getElementById("certificates").addEventListener("click", function () {
  document.getElementById("info").innerHTML = `<ul>
                            <li>HTML and CSS</li>
                            <li>Introduction to AI</li>
                            <li>AI using Ibm Watson</li>
                        </ul>`;
});

