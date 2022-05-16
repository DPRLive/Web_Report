function changeContent()
{
    let sel = document.getElementById("selector");
    let con = document.getElementById("content");
    let selValue = sel.options[sel.selectedIndex].value;

    if(selValue == "summary")
    {
        con.innerHTML = "야호";
    }
    else if(selValue == "krafton")
    {
        con.innerHTML = "크래프톤";
    }
    else
    {
        con.innerHTML = "위메이드";
    }
}