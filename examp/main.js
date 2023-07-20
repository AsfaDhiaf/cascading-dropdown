var subjectSel = document.getElementById("subject");
var topicSel = document.getElementById("topic");
    
// Function to populate the topics dropdown based on the selected subject
function populateTopics() {
var selectedSubject = subjectSel.value;
            topicSel.innerHTML = "<option value=''>Select Topic</option>";

            if (selectedSubject !== "") {
                for (var topic in subjectObject[selectedSubject]) {
                    var option = document.createElement("option");
                    option.value = topic;
                    option.textContent = topic;
                    topicSel.appendChild(option);
                }
            }
        }

// Function to populate the chapters dropdown based on the selected topic
function populateChapters() {
var selectedSubject = subjectSel.value;
var selectedTopic = topicSel.value;
chapterSel.innerHTML = "<option value=''>Select Chapter</option>";

            if (selectedSubject !== "" && selectedTopic !== "") {
                var chapters = subjectObject[selectedSubject][selectedTopic];
                for (var i = 0; i < chapters.length; i++) {
                    var option = document.createElement("option");
                    option.value = chapters[i];
                    option.textContent = chapters[i];
                    chapterSel.appendChild(option);
                }
            }
        }

subjectSel.onchange = populateTopics;
topicSel.onchange = populateChapters;