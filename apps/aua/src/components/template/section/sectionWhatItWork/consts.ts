
type DataWhatItWorks = {
    inCircle: string,
    header: string,
    color: string
    sectionCustomerFaqData: {
        header: string,
        description: string,
        collapse: Array<{
            header: string,
            description: string,
        }>
    }
}

export const dataWhatItWorks: Array<DataWhatItWorks> = [
    {
        inCircle: "1",
        header: "Analiza",
        color: "var(--uxu-gradient-blue-tell)",
        sectionCustomerFaqData: {
            header: "Analiza umowy pod kątem sankcji darmowego kredytu",
            description: "Sankcja darmowego kredytu, zgodnie z Art. 45. Kodeksu Cywilnego, umożliwia zwrot odsetek z umowy kredytowej. Nasz proces analizy polega na bezpłatnym badaniu, dokonywanym przez prawników w ciągu 72 godzin, przesłanej umowy kredytowej, aby ustalić, czy przysługuje Ci zwrot w ramach sankcji darmowego kredytu.",
            collapse: [
                {
                    header: "Ile kosztuje analiza umowy ?",
                    description: "Sankcja darmowego kredytu, zgodnie z Art. 45. Kodeksu Cywilnego, umożliwia zwrot odsetek z umowy kredytowej."
                },
                {
                    header: "Czy mogę mieć jakieś problemy z bankiem ?",
                    description: "Sankcja darmowego kredytu, zgodnie z Art. 45. Kodeksu Cywilnego, umożliwia zwrot odsetek z umowy kredytowej."
                },
                {
                    header: "Czy jest jakieś ryzyko ?",
                    description: "Sankcja darmowego kredytu, zgodnie z Art. 45. Kodeksu Cywilnego, umożliwia zwrot odsetek z umowy kredytowej."
                }
            ],
        }
    },
    {
        inCircle: "2",
        header: "Dokumentacja",
        color: "var(--uxu-gradient-purple-pink)",
        sectionCustomerFaqData: {
            header: "Szykujemy dokumentację dla banku",
            description: "Po analizie umowy o sankcję darmowego kredytu, jeśli zlecasz sprawę naszym prawnikom, przygotowujemy dokumentację do banku o zwrot prowizji. Bank ma 30 dni na decyzję. W razie potrzeby dodatkowej interpretacji prawnej, zwracamy się do sądu. Po pozytywnej decyzji sądowej, bank wypłaca środki w ciągu 2 tygodni. W przypadku negatywnej, kończymy współpracę i informujemy o niemożności skorzystania z sankcji.",
            collapse: [
                {
                    header: "Ile trwa cały proces ?",
                    description: "Sankcja darmowego kredytu, zgodnie z Art. 45. Kodeksu Cywilnego, umożliwia zwrot odsetek z umowy kredytowej."
                },
                {
                    header: "Kiedy dostanę pieniądze ?",
                    description: "Sankcja darmowego kredytu, zgodnie z Art. 45. Kodeksu Cywilnego, umożliwia zwrot odsetek z umowy kredytowej."
                },
                {
                    header: "Czy będę musiał chodzić po sądach ?",
                    description: "Sankcja darmowego kredytu, zgodnie z Art. 45. Kodeksu Cywilnego, umożliwia zwrot odsetek z umowy kredytowej."
                }
            ],
        }
    },
    {
        inCircle: "3",
        header: "Wypłata",
        color: "var(--uxu-gradient-red-amber)",
        sectionCustomerFaqData: {
            header: "Wypłata środków",
            description: "Po otrzymaniu środków z banku, przelewamy na Twoje konto 50% kwoty zwróconej przez bank w ramach sankcji darmowego kredytu w ciągu tygodnia. Druga połowa to nasze wynagrodzenie za przygotowanie dokumentacji i pokrycie ryzyka związanego z kosztami sądowymi. Dodatkowo, 5% naszego zysku przekazujemy na wybrane przez Ciebie schronisko dla zwierząt po wypłacie środków.",
            collapse: [
                {
                    header: "Co z moimi danymi po wypłacie środków ?",
                    description: "Sankcja darmowego kredytu, zgodnie z Art. 45. Kodeksu Cywilnego, umożliwia zwrot odsetek z umowy kredytowej."
                },
            ],
        }
    }
]