// Search form validation

const formSearchId = document.getElementById("form-search");

function validateSearch(){

    const formSearch = document.forms["form-search"];
    const formSearch_searchInput = formSearch["form-search__search-input"];

    formSearchId.classList.remove('is-invalid');
    if(formSearch_searchInput.value == "" || formSearch_searchInput.value.length <= 3){

        formSearch_searchInput.classList.add("is-invalid");

        document.getElementById("is-invalid-message__search").innerHTML="The entered word must be longer than three characters";

        return false;
    }
    return true;
}

formSearchId.addEventListener("focusout", e=> {
    if(e.target.value != "") e.target.classList.remove("is-invalid");
});