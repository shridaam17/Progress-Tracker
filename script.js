const problems=[
    {
        id:1,
        title:"Two Sum",
        difficulty:"Easy",
        topic:"Array",
        solved:true
    },{
        id:2,
        title:"valid Parantheses",
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
function renderProblems{
    problems.forEach(function(problems){
        const card=document.createElement("div");
        card.classList.add("problem-list");
        const title=document.createElement("h3");
        title.textContent=problems.title;
        card.append(title);
        const difficulty=document.createElement("span");
        difficulty.textContent=problemList.difficulty;
        card.append(difficulty);
        const topic=document.createElement("span");
        topic.textContent=problemList.topic;
        card.append(topic);
        const status=document.createElement("span");
        if(problems.status)
            status.textContent="Solved";
        else status.textContent="Not Solved";
        card.append(status);
        problemList.append(card);

    });

}
renderProblems();