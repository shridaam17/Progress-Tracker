const problems=[
    {
        id:1,
        title:"Two Sum",
        difficulty:"Easy",
        topic:"Array",
        solved:true
    },{
        id:2,
        title:"Valid Parantheses",
        difficulty:"Easy",
        topic:"Stack",
        solved:false
    }, {
        id: 3,
        title: "3Sum",
        difficulty: "Medium",
        topic: "Array",
        solved: false
    },
    {
        id: 4,
        title: "Binary Search",
        difficulty: "Easy",
        topic: "Binary Search",
        solved: true
    },
    {
        id: 5,
        title: "Maximum Subarray",
        difficulty: "Medium",
        topic: "Array",
        solved: false
    },
    {
        id: 6,
        title: "Merge k Sorted Lists",
        difficulty: "Hard",
        topic: "Linked List",
        solved: false
    }
];
const searchInput = document.getElementById("search-input");
const problemList= document.getElementById("problem-list");
const difficultyFilter = document.getElementById("difficulty-filter");
const topicFilter = document.getElementById("topic-filter");


function renderProblems(problemArray){
    problemArray.forEach(function(problem){
        const checkbox=document.createElement("input");
        checkbox.type="checkbox";
        checkbox.checked=problem.solved;
        

        const card=document.createElement("div");
        card.classList.add("problem-card");
        card.append(checkbox);
        
        const title=document.createElement("h3");
        title.textContent=problem.title;
        card.append(title);
        const difficulty=document.createElement("span");
        difficulty.textContent=problem.difficulty;
        difficulty.classList.add(problem.difficulty.toLowerCase());
        card.append(difficulty);

        const topic=document.createElement("span");
        topic.textContent=problem.topic;
        card.append(topic);
        const solved=document.createElement("span");
        if(problem.solved){
            solved.textContent="Solved";
        }
        else solved.textContent="Not Solved";
        solved.classList.add(problem.solved? "solved":"unsolved");
        card.append(solved);
        checkbox.addEventListener("change",function(){
            problem.solved=checkbox.checked;
            if(problem.solved){
                solved.textContent="Solved";
                solved.classList.remove("unsolved");
                solved.classList.add("solved");
            }
            else{
                solved.textContent="Not Solved";
                solved.classList.remove("solved");
                solved.classList.add("unsolved");
            }
        });
        
        
        problemList.append(card);

    });

}
renderProblems(problems);
function applyFilters(){
    const searchText=searchInput.value.toLowerCase();
    const selectedDifficulty= difficultyFilter.value;
    const selectedTopic=topicFilter.value;


    const filteredProblems = problems.filter(function(problem) {
        const matchedInput=problem.title.toLowerCase().includes(searchText);
        const matchedDifficulty= selectedDifficulty==="All" || problem.difficulty===selectedDifficulty;
        const matchedTopic= selectedTopic==="all" || selectedTopic===problem.topic;
        return matchedInput && matchedDifficulty && matchedTopic;
    });
    problemList.innerHTML="";
    renderProblems(filteredProblems);
}
searchInput.addEventListener("input", function() {
    // const searchText = searchInput.value.toLowerCase();

    // const filteredProblems = problems.filter(function(problem) {
    //     return problem.title.toLowerCase().includes(searchText);
    // });

    // problemList.innerHTML = "";
    // renderProblems(filteredProblems);
    applyFilters();
});
difficultyFilter.addEventListener("change",function(){
    // const selectedDifficulty= difficultyFilter.value;
    // const filteredProblems=problems.filter(function(problem){
    //     if(selectedDifficulty==="All"){
    //         return true;
    //     }
    //     return problem.difficulty===selectedDifficulty;

    // });
    // problemList.innerHTML="";
    // renderProblems(filteredProblems);
    applyFilters();
});
topicFilter.addEventListener("change",function(){
    // const selectedTopic=topicFilter.value;
    // const filteredProblems=problems.filter(function(problem){
    //     if(selectedTopic==="all"){
    //         return true;
    //     }
    //     return selectedTopic===problem.topic;
    // });
    // problemList.innerHTML="";
    // renderProblems(filteredProblems);
    applyFilters();
});