let chaptersList = [];
function chapterAdd() {

    let fav = document.getElementById("favchap").value;
  
    //get the list element from the DOM
    let ul = document.getElementById("list");
    while(ul.lastChild)
    {
      ul.removeChild(ul.lastChild);
    }
    //make sure it is empty
    document.getElementById("favchap").value = '';
    chaptersList.push({detail:fav, complete:false});
    //loop through the list array.for each of them we need to add the HTML markup
    //for a chapterAdd.
    for(i = 0; i < chaptersList.length; i++) {
      let item = chaptersList[i]  
      let li = document.createElement("li");
      li.innerHTML = `<li ${item.complete ? 'class="strike"' : ""}>
      <p>${item.detail}</p>
      <div class ="listcontainer">
        <span data-function="delete" data-detail="${item.detail}">❎</span>
      </div>
    </li>`;
        ul.appendChild(li);
    }
}
document.querySelector('#addChapButton').addEventListener('click', chapterAdd);

function deleteChapter(chaptersList_detail) {
  // note the use of Array.filter to remove the element from our BOM array
  chaptersList = chaptersList.filter(
    (chapter) => chapter.detail != chaptersList_detail
  );
  chapterAdd(false);
}

document.getElementById("list").addEventListener("click", manageTasks);

function manageTasks(event) {
  // did they click the delete or complete icon?
  console.log(event.target);
  console.log(event.currentTarget);
  // event.target will point to the actual icon clicked on. We need to get the parent li to work with however. HINT: Remember element.closest()? Look it up if you don't
  task_detail = event.target.getAttribute('data-detail');
  if (event.target.getAttribute('data-function') == 'delete')
  {
    deleteChapter(task_detail);
  }

  // because we added 'data-function="delete"' to each icon in a task we can access a dataset property on our target
  // use that in a couple of if statements to decide whether to run deleteChapter or manageChapter
}

// we need to attach listeners to the add button and the list. Listen for a click, call the 'addChapter' function on submit and call the 'manageChapters' function if either of the icons are clicked in the list of chapters.


