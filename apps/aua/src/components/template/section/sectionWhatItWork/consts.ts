
type DataWhatItWorks = {
    id: string,
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
        id: "analize",
        inCircle: "1",
        header: "Analiza",
        color: "var(--uxu-gradient-blue-tell)",
        sectionCustomerFaqData: {
            header: "Analiza umowy pod kątem sankcji darmowego kredytu",
            description: "Nasi prawnicy dają Ci możliwość odzyskania kosztów, które ponosisz, spłacając kredyt. Tym samym oddajesz do banku dokładnie tyle, ile pożyczyłeś. Jak to możliwe? Wszystko za sprawą Sankcji Darmowego Kredytu. Przeprowadzimy bezpłatnie analizę Twojej umowy, a następnie odzyskamy Twoje pieniądze. <br /><br /> Sankcja darmowego kredytu, czyli art. 45 Kodeksu Cywilnego jest zapisem prawnym, który skutecznie chroni konsumentów i ogranicza występowanie błędów oraz nieścisłości w umowach kredytowych. To właśnie pod tym kątem całkowicie bezpłatnie sprawdzimy dokładnie Twoją umowę. W wielu przypadkach banki oraz instytucje parabankowe naruszają bowiem przepisy, dając klientom do podpisania wiążący dokument. <br /> <b>Nie czekaj dłużej i przekonaj się już teraz, ile pieniędzy możesz otrzymać!</b>",
            collapse: [
                {
                    header: "Ile kosztuje analiza umowy?",
                    description: "Analiza Twojej umowy jest w 100% bezpłatna. W związku z tym nie ponosisz żadnych kosztów za naszą pracę. W sytuacji natomiast, gdy zdecydujesz się na skorzystanie z Sankcji Darmowego Kredytu i będziesz chciał otrzymać pieniądze, które Ci się należą, pobierzemy z odzyskanych środków prowizję w wysokości 50%. Nie dokładasz zatem nic z własnej kieszeni."
                },
                {
                    header: "Czy mogę mieć jakieś problemy z bankiem?",
                    description: "Nie masz się czego obawiać. Odzyskanie nienależnie pobranych od Ciebie środków jest zupełnie standardową procedurą. Działamy bowiem na podstawie art. 45 ustawy z dnia 12 maja 2011 roku o kredycie konsumenckim. Nie zamierzamy walczyć z bankiem, tylko zwracamy się do niego z prośbą o zwrot pieniędzy z tytułu Sankcji Darmowego Kredytu. W niektórych przypadkach banki od razu przelewają należną Ci kwotę. W jeszcze innych natomiast potrzebują dodatkowej interpretacji sądu. Jeżeli sąd zgadza się z naszą interpretacją, pieniądze błyskawicznie lądują na Twoim koncie. Jeżeli nie, nic nie tracisz."
                },
                {
                    header: "Czy jest jakieś ryzyko?",
                    description: "Nic nie ryzykujesz! Hipotetycznym ryzykiem jest bowiem odrzucenie przez sąd naszej interpretacji. W takim jednak przypadku nic nie stracisz, a my nie pobierzemy za naszą pracę nawet złotówki. Z kolei w sytuacji, gdybyś próbował samodzielnie odzyskać pieniądze przed sądem, ryzykowałbyś własnymi środkami. Chyba sam przyznasz, że to opłacalna propozycja."
                }
            ],
        }
    },
    {
        id: "docs",
        inCircle: "2",
        header: "Dokumentacja",
        color: "var(--uxu-gradient-purple-pink)",
        sectionCustomerFaqData: {
            header: "Szykujemy dokumentację dla banku",
            description: "Na tym etapie będziesz już wiedzieć, czy Twoja umowa kredytowa podlega pod Sankcję Darmowego Kredytu. Jeżeli nie, nie ponosisz żadnych kosztów. W sytuacji natomiast, gdy dokument, który podpisałeś z bankiem, pozwala nam zwrócić się do niego w sprawie SKD, podpisujemy z Tobą umowę. <br /><br /> Wynika z niej, że w przypadku wygranej sprawy pobierzemy 50% odzyskanych dla Ciebie środków. Po podpisaniu umowy nasi prawnicy niezwłocznie przechodzą do działania. Cenimy bowiem czas naszych klientów.",
            collapse: [
                {
                    header: "Ile trwa cały proces?",
                    description: "Na samym początku analizujemy dokument, który podpisałeś z bankiem, następnie podpisujemy z Tobą umowę. Potrzebujemy na to około 7 dni. Następnie nasi prawnicy przygotowują całą dokumentację potrzebną, aby zwrócić się do banku, co trwa około 2-3 tygodnie. Bank natomiast ma 30 dni na odpowiedź. Możliwe jednak, że udzieli jej przed upływem tego okresu. W przypadku gdy zwraca się on do nas o interpretację sądową, trwa to najczęściej od tygodnia do 6 miesięcy."
                },
                {
                    header: "Kiedy dostanę pieniądze?",
                    description: "Po pozytywnym rozpatrzeniu naszej interpretacji przez sąd oraz przelewie z banku, otrzymasz od nas środki już w ciągu 14 dni roboczych."
                },
                {
                    header: "Czy będę musiał chodzić po sądach?",
                    description: "Jeżeli zlecisz nam obsługę Twojej sprawy, nasi prawnicy pokryją wszelkie koszta. Także te związane z obecnością w sądzie. Chodzimy także na wezwania do banku, tak abyś mógł być spokojny. Jedyne, czego od Ciebie potrzebujemy, to podpisania umowy na samym początku naszej współpracy."
                }
            ],
        }
    },
    {
        id: "pay",
        inCircle: "3",
        header: "Wypłata",
        color: "var(--uxu-gradient-red-amber)",
        sectionCustomerFaqData: {
            header: "Wypłata środków",
            description: "W sytuacji, gdy otrzymamy korzystną opinię sądu, czekamy na przekazanie nam pieniędzy przez bank. Po otrzymaniu od niego środków przelejemy Ci je na konto już w ciągu najbliższych 14 dni roboczych. Tym samym nasza praca dobiega końca. Ty natomiast nie tylko odzyskujesz swoje pieniądze, ale również spłacasz niższe raty. Jeżeli bowiem wciąż jesteś w trakcie spłacania kredytu, nie musisz już płacić części odsetkowej. Jeśli natomiast Twój kredyt został już spłacony, otrzymujesz wszystkie nienależnie pobrane odsetki oraz prowizję.",
            collapse: [
                {
                    header: "Czy są jakieś ukryte koszta naszej obsługi?",
                    description: "Nie ma żadnych ukrytych kosztów. 50%, które pobieramy z odzyskanych dla Ciebie środków to jedyny koszt i cena za pracę naszych prawników. Jednocześnie nie pobieramy żadnych prowizji z tytułu obniżonych rat."
                },
            ],
        }
    }
]