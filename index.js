const distRepositoryId = ""; // FIXME

(function main() {
  if (distRepositoryId == "") {
    console.error("distRepositoryId is empty");
    return;
  }

  let action = document.URL.replace("https://github.com", "") + "/transfer";
  let form = document.querySelector("form[action='" + action +  "']");
  let auth, issue_id;
  form.querySelectorAll('input').forEach((v) => {
    if (v.name == "authenticity_token") { auth = v.value };
    if (v.name == "issue_id") { issue_id = v.value };
  });


  let myForm = document.createElement('form');
  myForm.action = form.action.replace("https://github.com", "");
  myForm.setAttribute("accept-charset", form.getAttribute("accept-charset"));
  myForm.method = form.method;
  let inputRepoId = document.createElement('input');
  inputRepoId.name = "repository_id";
  inputRepoId.value = distRepositoryId;
  inputRepoId.type = "hidden";
  let inputIssueId = document.createElement('input');
  inputIssueId.name = "issue_id";
  inputIssueId.value = issue_id;
  inputIssueId.type = "hidden";
  let inputAuth = document.createElement('input');
  inputAuth.name = "authenticity_token";
  inputAuth.value = auth;
  inputAuth.type = "hidden";
  let button = document.createElement('button');
  button.className = "btn btn-sm";
  button.textContent = "transfer";
  myForm.appendChild(inputRepoId);
  myForm.appendChild(inputIssueId);
  myForm.appendChild(inputAuth);
  myForm.appendChild(button);

  document.querySelector(".gh-header-actions").appendChild(myForm)

})()

