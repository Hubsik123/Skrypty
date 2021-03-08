function Rotate(Tag_Name, ID_Class_Tag, Nr_Elementu)
{
    //document.getElementById(Tag_Name).animate
    //document.getElementById("body").animate
    // document.getElementsByTagName("body")[0].animate
    document.getElementsByTagName("body")[0].animate
    (
        [
            {transform: "rotate(0deg)"},
            {transform: "rotate(360deg)"}
        ],
        {
            duration: 3500,
            iterations: Infinity
        }
    );
}
