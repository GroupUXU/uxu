/* eslint-disable @typescript-eslint/no-unnecessary-condition -- Disabling false positive due to valid optional chaining usage */
import type { ReactElement } from 'react';
import type { SearchEngineConfig } from "utils";
import { useSiteConfig } from "../hooks/useSiteConfig";
import { useSeoConfig } from "../hooks/useSeoConfig";
import { Link } from '../components/atoms/link';
import { LayoutStaticText } from '../components/layout/layoutStaticText';
import { CrumbleMenu } from '../components/molecules/crumbleMenu';
import type { FooterProps } from "../components/templates/footer/types";
import type { SearchSuggestionContentDetails } from "../components/organisms/searchEngine/searchEngineInModal/types";

type PrivacyPolicyProps = {
  footer: FooterProps,
  headerMenu: Array<{ href: string, title: string }>,
  defaultSuggestions: SearchEngineConfig<Array<SearchSuggestionContentDetails>>
}

export function PrivacyPolicy ( {footer, headerMenu, defaultSuggestions}: PrivacyPolicyProps ): ReactElement {
  const {config} = useSiteConfig ();
  const company = config.admin?.company;
  const mainEmail = company?.contact.pl?.email?.find(contact => contact.type === 'main')?.email;
  const seo = useSeoConfig ( {title: `Polityka Prywatności - ${config.site?.domain || ""}`} );

  return (
    <LayoutStaticText
      footer={footer}
      headerMenu={headerMenu}
      searchEngineConfig={defaultSuggestions}
      seo={seo}
      topElement={
        <CrumbleMenu data={[{title: "home", href: "/"}, { title: 'polityka prywatności', href: '/privacy-policy' }]}/>
      }
    >
      <h1>Polityka Prywatności</h1>
      <p>Poniżej przedstawiamy informacje dotyczące przetwarzania Państwa danych osobowych w związku z korzystaniem z
        naszego serwisu internetowego na stronie {config.site?.domain || ""} („Serwis”). Dbamy o ochronę bezpieczeństwa
        Państwa
        danych osobowych. Wykorzystujemy te dane wyłącznie z prawnie uzasadnionych celach, które określono w niniejszej
        polityce prywatności („Polityka prywatności”). W dokumencie wyjaśniono, w jaki sposób Państwa dane są zbierane,
        wykorzystywane, przekazywane i ujawniane przez {config.admin?.company?.name || ""}</p>
      <h3>ADMINISTRATOR DANYCH OSOBOWYCH</h3>
      <p>Administratorem danych serwisu {config.site?.domain || ""} jest {config.admin?.company?.name || ""} (dalej
        Administrator), z siedzibą
        przy {config.admin?.company?.street || ""}, {config.admin?.company?.city || ""} {config.admin?.company?.postCode || ""}.</p>
      <h3>JAK DBAMY O PAŃSTWA DANE</h3>
      <p>Administrator zbiera dane dla oznaczonych, zgodnych z prawem celów, przetwarza je zgodnie z prawem i nie
        poddaje dalszemu przetwarzaniu niezgodnemu z tymi celami. Dane są zbieranie jedynie w adekwatnym, niezbędnym i
        koniecznym zakresie w stosunku do celów, w jakich są przetwarzane.</p>
      <p>Administrator nie przetwarza szczególnych kategorii danych. Administrator dokłada wszelkich starań, aby chronić
        dane przed nieuprawnionym dostępem osób trzecich i w tym zakresie stosuje organizacyjne i techniczne środki
        bezpieczeństwa na wysokim poziomie. Administrator nie udostępnia danych żadnym nieuprawnionym do tego zgodnie z
        bezwzględnie obowiązującymi w tym zakresie przepisami prawa odbiorcom.</p>
      <p>Naszym priorytetem jest zapewnienie bezpieczeństwa Państwa danych osobowych i podejmujemy wszelkie starania w
        celu ich ochrony. W szczególności dbamy, aby dane były:</p>
      <ul>
        <li>
          <p>przetwarzane zgodnie z prawem, rzetelnie i w sposób przejrzysty dla użytkowników Serwisu;</p>
        </li>
        <li>
          <p>zbierane w konkretnych, wyraźnych i prawnie uzasadnionych celach i nieprzetwarzane dalej w sposób niezgodny
            z tymi celami;</p>
        </li>
        <li>
          <p>adekwatne, stosowne oraz ograniczone do tego, co niezbędne do realizacji celów, w których są
            przetwarzane;</p>
        </li>
        <li>
          <p>prawidłowe i w razie potrzeby uaktualniane;</p>
        </li>
        <li>
          <p>przechowywane w formie umożliwiającej identyfikację naszych Klientów, przez okres nie dłuższy, niż jest to
            niezbędne do celów, w których dane te są przetwarzane;</p>
        </li>
        <li>
          <p>przetwarzane w sposób zapewniający odpowiednie bezpieczeństwo danych osobowych, w tym ochronę przed
            niedozwolonym lub niezgodnym z prawem przetwarzaniem oraz przypadkową utratą, zniszczeniem lub uszkodzeniem,
            za pomocą odpowiednich środków technicznych lub organizacyjnych.</p>
        </li>
      </ul>
      <h3>PODSTAWY PRAWNE PRZETWARZANIA PAŃSTWA DANYCH OSOBOWYCH</h3>
      <p>Państwa dane osobowe są przetwarzane zgodnie z przepisami regulującymi przetwarzanie danych osobowych, w tym w
        szczególności z rozporządzeniem (UE) 2016/679 Parlamentu Europejskiego i Rady z dnia 27 kwietnia 2016 r. w
        sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
        takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) (Dziennik Urzędowy
        Unii Europejskiej nr 119, s. 1), w dalszej części zwanym „RODO” oraz ustawą z dnia 10 maja 2018 r. o ochronie
        danych osobowych (tekst jedn. Dz. U. z 2019 r. poz. 1781).</p>
      <p>Podstawy prawne przetwarzania Państwa danych osobowych są następujące:</p>
      <ul>
        <li>
          <p>przetwarzanie jest niezbędne do celów wynikających z prawnie uzasadnionych interesów realizowanych przez
            Administratora, wobec których charakteru nadrzędnego nie mają przysługujące Państwu prawa. Na tej podstawie
            Państwa dane są przetwarzane w szczególności: w celu rozwoju naszej działalności i poprawy zadowolenia
            naszych Klientów, w celach marketingu bezpośredniego, udzielania odpowiedzi na pytania przesłane za
            pośrednictwem formularza kontaktowego, jak również dla naszych celów analitycznych i statystycznych oraz w
            celu ustalenia, dochodzenia lub obrony roszczeń (art. 6 ust. 1 lit. f) RODO);</p>
        </li>
        <li>
          <p>Państwa zgoda na przetwarzanie danych osobowych. Na tej podstawie Państwa dane są przetwarzane w
            szczególności: w celu założenia Konta i zarejestrowania jako użytkownika Serwisu (art. 6 ust. 1 lit. a)
            RODO). Mają Państwo prawo w dowolnym momencie wycofać swoją zgodę i korzystać z Serwisu w zakresie
            funkcjonalności dostępnych użytkownikom niezalogowanym</p>
        </li>
        <li>
          <p>przetwarzanie danych jest niezbędne do wypełnienia obowiązku prawnego, któremu podlegamy, na przykład
            obowiązków wynikających z prawa podatkowego (art. 6 ust. 1 lit. c) RODO)</p>
        </li>
      </ul>
      <p>Cele przetwarzania Państwa danych osobowych, podstawy prawne przetwarzania oraz rodzaje danych osobowych
        podlegających przetwarzaniu.</p>
      <div className="wrapperTable">
        <table>
          <thead style={{backgroundColor: "var(--uxu-color-primary-accent1)"}}>
          <tr>
            <td>Cele przetwarzania</td>
            <td>Podstawa prawna przetwarzania</td>
            <td>Rodzaje danych osobowych podlegających przetwarzaniu</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>utworzenie konta i zarejestrowanie jako naszego nowego Klienta</td>
            <td>Artykuł 6 ust. 1 lit. a) RODO (zgoda)</td>
            <td>adres e-mail, oraz historia klikania, publikowania, przeglądania i aktywności wobec treści (w związku z
              plikami cookie i dla realizacji programu)
            </td>
          </tr>
          <tr>
            <td>udzielanie odpowiedzi na przesłane przez Klienta pytania za pośrednictwem formularza kontaktowego</td>
            <td>Artykuł 6 ust. 1 lit. f) RODO (prawnie uzasadnione interesy realizowane przez Administratora –
              prowadzenie
              i rozwój działalności gospodarczej, dbanie o relacje z Klientem)
            </td>
            <td>Imię, nazwisko, adres e-mail</td>
          </tr>
          <tr>
            <td>newsletter</td>
            <td>Artykuł 6 ust. 1 lit. a) RODO (zgoda)</td>
            <td>imię, nazwisko, adres e-mail</td>
          </tr>
          <tr>
            <td>administracja, rozwój, ochrona naszej działalności oraz doskonalenie naszych usług i produktów</td>
            <td>Artykuł 6 ust. 1 lit. f) RODO (prawnie uzasadnione interesy realizowane przez Administratora –
              prowadzenie
              i rozwój działalności gospodarczej, ulepszanie produktów)
            </td>
            <td>historia kliknięć, przeglądania i aktywności wobec treści (w związku z plikami cookie)</td>
          </tr>
          <tr>
            <td>analiza Państwa aktywności w Serwisie w celu jego udoskonalania oraz wyświetlania reklam przez naszych
              Partnerów zaufanych; wszystkie dane wykorzystywane do tych celów podlegają pseudonimizacji
            </td>
            <td>Artykuł 6 ust. 1 lit. f) RODO (prawnie uzasadnione interesy realizowane przez Administratora –
              prowadzenie
              i rozwój działalności gospodarczej, udoskonalanie naszych produktów i strony internetowej)
            </td>
            <td>szczegóły dotyczące Państwa urządzenia, adres IP, typ i wersja przeglądarki, lokalizacja, system
              operacyjny, informacje o Państwa aktywności w naszym Serwisie, takie jak sposób korzystania z niego,
              przeglądane treści
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <h3>PROFILOWANIE</h3>
      <p>W Serwisie możemy stosować profilowanie. Profilowanie polega na zautomatyzowanym przetwarzaniu danych osobowych
        w celu rekomendacji dopasowanych treści. Nie wywołuje to żadnych skutków prawnych w stosunku do Państwa i
        podobnie nie wpływa na Państwa sytuację. Podejmowanie decyzji w oparciu o profilowanie jest dozwolone, gdy dana
        osoba udzieliła wyraźnej zgody (która może zostać wycofana w dowolnym momencie), jest dopuszczone prawem lub
        konieczne do zawarcia lub wykonania umowy.</p>
      <h3>OKRES PRZECHOWYWANIA DANYCH OSOBOWYCH</h3>
      <p>Państwa dane osobowe będą przechowywane tylko przez określony czas i jedynie w zakresie, w jakim jest to
        konieczne do celów, dla których zostały dostarczone.</p>
      <p>Dane osobowe przetwarzane w celu zawarcia i wykonania umowy będą przechowywane tak długo, jak długo obowiązuje
        ta umowa, a po jej wygaśnięciu przez okres niezbędny do zabezpieczenia lub dochodzenia roszczeń oraz do
        wypełnienia wszelkich obowiązków prawnych.</p>
      <p>Jeżeli przetwarzanie Państwa danych osobowych odbywa się na podstawie Państwa zgody, mogą one być przechowywane
        do czasu wycofania zgody lub sprzeciwu wobec przetwarzania lub do czasu, gdy nie będą już potrzebne do
        realizacji celu, na który udzielono zgody.</p>
      <h3>KATEGORIE ODBIORCÓW PAŃSTWA DANYCH OSOBOWYCH</h3>
      <p>Państwa zaufanie jest dla nas sprawą kluczową. Nie sprzedajemy żadnych Państwa danych osobowych jakimkolwiek
        osobom trzecim. W celu dostarczenia Państwu naszych produktów i usług oraz prowadzenia naszej działalności,
        możemy ujawnić i udostępnić Państwa dane następującym kategoriom odbiorców:</p>
      <p>partnerom biznesowym, którzy wspierają nas w prowadzeniu naszej działalności, takim jak:</p>
      <ul>
        <li>
          <p>dostawcy usług technicznych, którym powierzamy dostarczanie systemów informatycznych, oprogramowania i
            hosting naszej strony internetowej;</p>
        </li>
        <li>
          <p>przedsiębiorstwa, które umożliwiają realizację Państwa zamówienia, takie jak: dostawcy usług płatniczych
            online, firmy kurierskie;</p>
        </li>
        <li>
          <p>bank prowadzący nasz rachunek bankowy;</p>
        </li>
        <li>
          <p>podmioty świadczące usługi w zakresie komunikacji marketingowej i reklamy;</p>
        </li>
        <li>
          <p>przedsiębiorstwa świadczące w naszym imieniu usługi w zakresie wysyłania e-maili, wiadomości tekstowych i
            przesyłek pocztowych,</p>
        </li>
        <li>
          <p>naszym doradcom, w tym prawnikom, księgowym, rewidentom, którzy świadczą na naszą rzecz profesjonalne
            usługi,</p>
        </li>
      </ul>
      <p>organom władzy, jeżeli jesteśmy zobowiązani do ujawnienia Państwa danych osobowych w celu zachowania zgodności
        z wszelkimi przepisami prawa,</p>
      <p>Proszę pamiętać, że wiele z tych podmiotów otrzymujących dane ma niezależne prawo lub obowiązek przetwarzania
        Państwa danych osobowych. Dlatego też zalecamy zapoznanie się z politykami prywatności tych podmiotów.</p>
      <h3>PRZEKAZYWANIE DANYCH OSOBOWYCH ODBIORCOM Z PAŃSTW TRZECICH</h3>
      <p>Gromadzone przez nas dane osobowe mogą być przekazywane i przechowywane w krajach spoza Europejskiego Obszaru
        Gospodarczego („EOG”). Dzieje się tak zazwyczaj, gdy podmiot współpracujący z nami świadczy swoje usługi poza
        EOG. Każde takie przekazanie Państwa danych osobowych będzie dokonywane zgodnie z obowiązującymi przepisami
        prawa. Mają Państwo prawo do otrzymania kopii swoich danych osobowych przekazanych do państwa trzeciego.
        Zapewnimy odpowiedni poziom ochrony Państwa danych osobowych. Może to również obejmować stosowanie standardowych
        klauzul umownych dotyczących przekazywania danych osobowych, przyjętych przez Komisję Europejską, które
        zapewniają odpowiednią ochronę danych osobowych.</p>
      <p>Ponadto Komisja Europejska przyjęła decyzję wdrażającą porozumienie Privacy Shield, w której stwierdzono, że
        Stany Zjednoczone zapewniają odpowiedni poziom ochrony danych osobowych przekazywanych z UE.
      </p>
      <p>Korzystamy także z narzędzi Google Analytics, Yandex Metrica, Microsoft Advertising w celu analizowania sposobu
        korzystania z naszej strony internetowej. Tutaj można uzyskać więcej informacji na temat polityki
        prywatności:</p>
      <ul>
        <li>
          <p>Google <Link href="https://policies.google.com/privacy?hl=pl"
                          title="Google">https://policies.google.com/privacy?hl=pl</Link></p>
        </li>
        <li>
          <p>Yandex <Link href="https://yandex.com/legal/confidential/?lang=en"
                          title="Yandex">https://yandex.com/legal/confidential/?lang=en</Link></p>
        </li>
        <li>
          <p>Microsoft <Link href="https://privacy.microsoft.com/pl-pl/privacystatement"
                             title="Microsoft">https://privacy.microsoft.com/pl-pl/privacystatement</Link></p>
        </li>
      </ul>
      <h3>PRZYSŁUGUJĄCE PAŃSTWU PRAWA</h3>
      <p>Zgodnie z przepisami o ochronie danych osobowych i wskazanymi w nich ograniczeniami, przysługują Państwu
        następujące prawa:</p>
      <ul>
        <li>
          <p>prawo dostępu do Państwa danych osobowych – mają Państwo prawo dostępu do swoich danych osobowych oraz do
            otrzymania kopii przechowywanych przez nas danych osobowych, a także szczegółowych informacji o sposobie ich
            przetwarzania;</p>
        </li>
        <li>
          <p>prawo do sprostowania Państwa danych osobowych – mają Państwo prawo do sprostowania swoich danych
            osobowych, jeśli są one niedokładne lub niekompletne;</p>
        </li>
        <li>
          <p>prawo do usunięcia Państwa danych osobowych (prawo do bycia zapomnianym) – mają Państwo prawo zażądać od
            nas usunięcia swoich danych osobowych, jeżeli nie ma powodu do ich dalszego przez nas przetwarzania. Jednak
            nie zawsze możemy całkowicie usunąć Państwa dane osobowe, na przykład wtedy, gdy są nam one nadal potrzebne
            do wypełnienia obowiązków prawnych lub do rozpatrzenia roszczeń. O takiej sytuacji zostaną Państwo
            powiadomieni w odpowiedzi na Państwa żądanie. Usunięcie konta jest możliwe poprzez skorzystanie z
            funkcjonalności dostępnej w ustawieniach konta.</p>
        </li>
        <li>
          <p>prawo do ograniczenia przetwarzania Państwa danych osobowych – uprawnia do żądania ograniczenia
            przetwarzania danych osobowych w pewnych sytuacjach, na przykład, gdy zakwestionowali Państwo prawdziwość
            swoich danych osobowych lub sprzeciwili się przetwarzaniu przez nas Państwa danych, ograniczenie to
            obowiązuje przez okres umożliwiający Administratorowi sprawdzenie prawidłowości danych osobowych;</p>
        </li>
        <li>
          <p>prawo do sprzeciwu wobec przetwarzania danych osobowych – mają Państwo prawo do sprzeciwu wobec
            przetwarzania Państwa danych osobowych w dowolnym momencie, z powodów związanych z Państwa szczególną
            sytuacją. W takim przypadku nie jesteśmy już uprawnieni do przetwarzania Państwa danych osobowych, chyba że
            wykażemy istnienie ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Państwa
            interesów, praw i wolności, lub podstaw do ustalenia, dochodzenia lub obrony roszczeń. Mają Państwo również
            prawo do sprzeciwu wobec przetwarzania Państwa danych osobowych w celach marketingu bezpośredniego;</p>
        </li>
        <li>
          <p>prawo do złożenia skargi – w przypadku jakichkolwiek skarg dotyczących sposobu przetwarzania przez nas
            Państwa danych, mają Państwo prawo do złożenia skargi do organu nadzorczego. W Polsce właściwym organem jest
            Prezes Urzędu Ochrony Danych Osobowych.</p>
        </li>
      </ul>
      <p>Odpowiemy na Państwa żądania bez zbędnej zwłoki, najpóźniej w ciągu jednego miesiąca od daty jego otrzymania.
        Okres ten może zostać w razie potrzeby przedłużony o dwa kolejne miesiące, biorąc pod uwagę złożoność i liczbę
        wniosków. Powiadomimy Państwa o każdym takim przedłużeniu w ciągu jednego miesiąca od otrzymania Państwa wniosku
        wraz z podaniem przyczyn opóźnienia.</p>
      <h3>ODMOWA PODANIA DANYCH OSOBOWYCH</h3>
      <p>Podanie danych osobowych w naszym Serwisie jest dobrowolne, jednak konieczne w celu korzystania z rozszerzonych
        funkcjonalności naszego Serwisu, w szczególności dodawania i aktywności wobec treści.</p>
      <h3>PLIKI COOKIE I INNE TECHNOLOGIE</h3>
      <p>Serwis korzysta z plików cookie. Pliki cookie są małymi plikami z informacjami, które pozwalają naszej stronie
        internetowej rozpoznać urządzenie użytkownika i są pobierane na urządzenie użytkownika podczas jego wizyty na
        naszej stronie internetowej, jeśli użytkownik wyrazi na to zgodę. Pliki cookie są następnie wysyłane z powrotem
        na naszą stronę internetową przy każdej kolejnej wizycie lub na inną stronę, która rozpoznaje te pliki.</p>
      <p>Uzyskiwanie i przechowywanie informacji za pomocą plików cookie jest możliwe na podstawie Państwa zgody.
        Podczas pierwszej wizyty na naszej stronie internetowej przedstawiamy Państwu informacje na temat korzystania z
        plików cookie i prosimy o ich akceptację.
      </p>
      <p>Dzięki plikom cookie korzystanie ze stron internetowych jest znacznie łatwiejsze, przyjemniejsze, a ich
        zawartość dostosowana do oczekiwań i preferencji ich użytkowników.</p>
      <p>Pliki cookie wykorzystujemy do następujących celów:</p>
      <ul>
        <li>
          <p>aby dostosować zawartość naszej strony internetowej do Państwa preferencji i zoptymalizować korzystanie z
            naszej strony;</p>
        </li>
        <li>
          <p>w celu rozpoznania urządzenia użytkownika i utrzymania sesji po zalogowaniu się użytkownika,</p>
        </li>
        <li>
          <p>w celu tworzenia statystyk, które pozwolą nam rozwijać nasz Serwis</p>
        </li>
        <li>
          <p>w celu wyświetlania reklam przez naszych partnerów reklamowych</p>
        </li>
      </ul>
      <p>Na naszej stronie internetowej stosujemy dwa podstawowe rodzaje plików cookie: cookie sesyjne i trwałe.</p>
      <ul>
        <li>
          <p>Sesyjne pliki cookie to pliki tymczasowe, które są przechowywane na urządzeniu użytkownika do momentu
            wylogowania się lub zakończenia sesji.</p>
        </li>
        <li>
          <p>Trwałe pliki cookie są przechowywane na urządzeniu użytkownika przez okres określony w parametrach pliku
            lub do momentu ich usunięcia. Oznacza to, że jego informacje będą przekazywane do serwera za każdym razem,
            gdy użytkownik odwiedzi Serwis.</p>
        </li>
      </ul>
      <p>Poza plikami cookie, które należą do naszej domeny, nasz Serwis może również korzystać z plików cookie osób
        trzecich. Wynika to z faktu, że osoby trzecie udostępniają nam pewne funkcje niezbędne do prawidłowego
        funkcjonowania naszej strony internetowej. Korzystamy z usług Zaufanych Partnerów, przedstawionych na liście:
        lista będzie opublikowana, którzy używają plików cookie na naszej stronie internetowej.</p>
      <p>Przeglądarki internetowe zazwyczaj domyślnie pozwalają na zapisywanie plików cookie na urządzeniu użytkownika.
        W każdej chwili można zarządzać korzystaniem z plików cookie, w tym blokowaniem i usuwaniem, korzystając z
        ustawień prywatności na naszej stronie internetowej lub w Państwa przeglądarce. Mogą Państwo również zablokować
        tylko pliki cookie osób trzecich, akceptując pliki cookies używane bezpośrednio przez Administratora. Należy
        pamiętać, że wyłączenie lub ograniczenie korzystania z plików cookies może spowodować trudności w korzystaniu z
        naszej strony internetowej i wpłynąć na niektóre dostępne funkcje.</p>
      <h3>GOOGLE ANALYTICS / YANDEX METRICA / MICROSOFT ADVERTISING</h3>
      <p>Jak wspomniano powyżej, korzystamy z Google Analytics, Yandex Metrica i Microsoft Advertising do analizy
        korzystania z naszej strony internetowej. Usługi te gromadzą informacje o Państwa lokalizacji (na podstawie
        Państwa adresu IP) i Państwa zachowaniu podczas dostępu do naszego Serwisu (na podstawie plików cookie) poprzez
        użycie przez nas powyższego narzędzia. Usługi te generuje dane statystyczne i inne informacje dotyczące
        korzystania z naszej strony internetowej za pomocą analitycznych plików cookie. Dzięki temu rozwiązaniu jesteśmy
        w stanie lepiej zrozumieć potrzeby naszych Klientów i dostosować naszą ofertę do tych potrzeb.</p>
      <h3>WTYCZKI MEDIÓW SPOŁECZNOŚCIOWYCH</h3>
      <p>Nasz Serwis korzysta z wtyczek najpopularniejszych mediów społecznościowych. Wtyczki te łączą Państwa
        bezpośrednio z naszymi profilami w mediach społecznościowych oraz mogą służyć do logowania w naszym serwisie.
        Aby uzyskać bardziej szczegółowe informacje, zalecamy zapoznanie się z polityką prywatności poszczególnych
        portali społecznościowych. Należy pamiętać, że nie ponosimy odpowiedzialności za te polityki.</p>
      <h3>ZMIANY POLITYKI PRYWATNOŚCI</h3>
      <p>Niniejsza wersja Polityki obowiązuje od 01 stycznia 2023 r.</p>
      <p>Niniejsza Polityka prywatności może być zmieniana stosownie do potrzeb, na przykład w celu dostosowania się do
        nowych wymogów nałożonych przez obowiązujące prawo, w szczególności biorąc pod uwagę ochronę danych osobowych
        lub praw konsumentów lub z powodu wymogów technicznych. Aktualna wersja Polityki prywatności umieszczona jest
        zawsze w naszym Serwisie.</p>
      <h3>DANE KONTAKTOWE</h3>
      <p>W sprawach dotyczących ochrony danych osobowych oraz korzystania z praw związanych z przetwarzaniem tych
        danych, w tym w szczególności w związku z chęcią usunięcia konta i zaprzestania przetwarzania danych) mogą się
        Państwo kontaktować poprzez następujące kanały komunikacji:</p>
      <ul>
        <li>
          <p>pocztą tradycyjną na
            adres: {config.admin?.company?.name || ""} ul. {config.admin?.company?.street || ""}, {config.admin?.company?.city || ""} {config.admin?.company?.postCode || ""}</p>
        </li>
        <li>poczta elektroniczna: Adres email: {mainEmail || ""}</li>
      </ul>
    </LayoutStaticText>
  )
}

