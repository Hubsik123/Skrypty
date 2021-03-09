//! V 1.2;
// 9 Marca 2021
// By Hubsik

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

function Funkcja_2(Znacznik)
{
    Ilosc = document.getElementsByTagName(Znacznik).length;
    for (var x = 0; x < Ilosc; x++)
    {
        var RNG = Math.floor((Math.random() * 10) + 1);
        if (RNG % 2 == 0)
        {
            document.getElementsByTagName(Znacznik)[x].style.display = "none";
        }
    }
}

function Funkcja_3(Selektor, Co_Stylowac)
{
    var Litery = '0123456789ABCDEF';
    var Kolor = '#';
    for (var x = 0; x < 6; x++)
    {
        Kolor += Litery[Math.floor(Math.random() * 16)];
    }
    $(Selektor).css(Co_Stylowac, Kolor);
}
