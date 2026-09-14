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
const problemList= document.getElementById("problem-list");
function renderProblems(){
    problems.forEach(function(problem){
        const card=document.createElement("div");
        card.classList.add("problem-card");
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
        problemList.append(card);

    });

}
renderProblems();