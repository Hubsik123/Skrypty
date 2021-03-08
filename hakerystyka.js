//! V 1.1; 8 Marca 2021; By Hubsik

function Funkcja_1(Element, ID_Class_Tag, Nr_Elementu = 0, Czas_Trwania = 2500, Ilosc_Iteracji = "Infinity")
{
    if (ID_Class_Tag == "ID" || ID_Class_Tag == "id" || ID_Class_Tag == 1)
    {
        document.getElementById(Element).animate
        (
            [
                {transform: "rotate(0deg)"},
                {transform: "rotate(360deg)"}
            ],
            {
                duration: Czas_Trwania,
                iterations: Ilosc_Iteracji
            }
        );
    }
    if (ID_Class_Tag == "Class" || ID_Class_Tag == "class" || ID_Class_Tag == 2)
    {
        document.getElementsByClassName(Element)[Nr_Elementu].animate
        (
            [
                {transform: "rotate(0deg)"},
                {transform: "rotate(360deg)"}
            ],
            {
                duration: Czas_Trwania,
                iterations: Ilosc_Iteracji
            }
        );
    }
    if (ID_Class_Tag == "Tag" || ID_Class_Tag == "tag" || ID_Class_Tag == 3)
    {
        document.getElementsByTagName(Element)[Nr_Elementu].animate
        (
            [
                {transform: "rotate(0deg)"},
                {transform: "rotate(360deg)"}
            ],
            {
                duration: Czas_Trwania,
                iterations: Ilosc_Iteracji
            }
        );
    }
}

var Snap = false
function Funkcja_2()
{
    if (!Snap) 
    {
        //var Main = document.getElementById("Main");
        var Linki = document.getElementsByTagName("a");
        var Akapity = document.getElementsByTagName("p");
        var Naglowki_1 = document.getElementsByTagName("h1");
        var Naglowki_2 = document.getElementsByTagName("h2");
        var Naglowki_3 = document.getElementsByTagName("h3");
        //! Linki
        for (var x = 0; x < Linki.length; x++)
        {
            var RNG = Math.floor((Math.random() * 10) + 1);
            if (RNG % 2 == 0)
            {
                document.getElementsByTagName("a")[x].style.display = "none";
            }
        }
        //! Akapity
        for (var x = 0; x < Akapity.length; x++)
        {
            var RNG = Math.floor((Math.random() * 10) + 1);
            if (RNG % 2 == 0)
            {
                document.getElementsByTagName("p")[x].style.display = "none";
            }
        }
        //! Nahgłówki h1
        for (var x = 0; x < Naglowki_1.length; x++)
        {
            var RNG = Math.floor((Math.random() * 10) + 1);
            if (RNG % 2 == 0)
            {
                document.getElementsByTagName("h1")[x].style.display = "none";
            }
        }
        //! Nahgłówki h2
        for (var x = 0; x < Naglowki_2.length; x++)
        {
            var RNG = Math.floor((Math.random() * 10) + 1);
            if (RNG % 2 == 0)
            {
                document.getElementsByTagName("h2")[x].style.display = "none";
            }
        }
        //! Nahgłówki h3
        for (var x = 0; x < Naglowki_3.length; x++)
        {
            var RNG = Math.floor((Math.random() * 10) + 1);
            if (RNG % 2 == 0)
            {
                document.getElementsByTagName("h3")[x].style.display = "none";
            }
        }
        Snap = true;
    }
    else
    {
        alert("I co magicznie jedną 1/4 chcesz zrobić?");
    }
}
