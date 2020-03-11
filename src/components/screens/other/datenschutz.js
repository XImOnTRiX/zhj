import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';


class Datenschutz extends Component {
  componentDidMount() {
    if(this.props.history.action === "PUSH") {
      setTimeout(() => {
        window.scrollTo(0,1);
      },500)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimension)
  }

  render() {
    return (
      <div className="container-fullWidth">
        <Helmet>
          <title>Datenschutzerklärung - ZHJ</title>
          <meta name="description" content=""/>
          <meta name="subject" content="Datenschutzerklärung" />

          <meta name="og:title" content="ZHJ | Datenschutzerklärung"/>
          <meta name="og:type" content="Website"/>
          <meta name="og:url" content="https://www.zhj.at/datenschutz"/>
          <meta name="og:image" content="https://www.zhj.at/xyz"/>
          <meta name="og:site_name" content="Datenschutzerklärung - ZHJ"/>
          <meta name="og:description" content=""/>

          <link rel="canonical" href="https://www.zhj.at/datenschutzerklärung" />
        </Helmet>
        <div className="hh2"></div>
        <div className="container">
          <h1 className="light">
            Datenschutz
          </h1>
          <p>
            Wir haben diese Datenschutzerklärung (Fassung 16.01.2020-211113060) verfasst, um Ihnen gemäß der Vorgaben der <a href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679&tid=211113172">Datenschutz-Grundverordnung (EU) 2016/679</a> zu erklären, welche Informationen wir sammeln, wie wir Daten verwenden und welche Entscheidungsmöglichkeiten Sie als Besucher dieser Webseite haben.

            Leider liegt es in der Natur der Sache, dass diese Erklärungen sehr technisch klingen, wir haben uns bei der Erstellung jedoch bemüht die wichtigsten Dinge so einfach und klar wie möglich zu beschreiben.
          </p>
          <h5 className="light pt">Automatische Datenspeicherung</h5>
          <p>
            Wenn Sie heutzutage Webseiten besuchen, werden gewisse Informationen automatisch erstellt und gespeichert, so auch auf dieser Webseite.

            Wenn Sie unsere Webseite so wie jetzt gerade besuchen, speichert unser Webserver (Computer auf dem diese Webseite gespeichert ist) automatisch Daten wie
            <br /><br />
          </p>

          <ul className="dtlist">
            <li>die Adresse (URL) der aufgerufenen Webseite</li>
            <li>Browser und Browserversion</li>
            <li>das verwendete Betriebssystem</li>
            <li>die Adresse (URL) der zuvor besuchten Seite (Referrer URL)</li>
            <li>den Hostname und die IP-Adresse des Geräts von welchem aus zugegriffen wird</li>
            <li>Datum und Uhrzeit</li><br /><br />
          </ul>
          <p>
            in Dateien (Webserver-Logfiles).


            In der Regel werden Webserver-Logfiles zwei Wochen gespeichert und danach automatisch gelöscht. Wir geben diese Daten nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.
          </p>
          <h5 className="light pt">Cookies </h5>
          <p>
            Unsere Webseite verwendet HTTP-Cookies, um nutzerspezifische Daten zu speichern.
            Im Folgenden erklären wir, was Cookies sind und warum Sie genutzt werden, damit Sie die folgende Datenschutzerklärung besser verstehen.
          </p>
          <h6 className="bold pt">
            Was genau sind Cookies?
          </h6>
          <p>
            Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser. Bekannte Browser sind beispielsweise Chrome, Safari, Firefox, Internet Explorer und Microsoft Edge. Die meisten Webseiten speichern kleine Text-Dateien in Ihrem Browser. Diese Dateien nennt man Cookies.
          </p>
          <p>
            Eines ist nicht von der Hand zu weisen: Cookies sind echt nützliche Helferlein. Fast alle Webseiten verwenden Cookies. Genauer gesprochen sind es HTTP-Cookies, da es auch noch andere Cookies für andere Anwendungsbereiche gibt. HTTP-Cookies sind kleine Dateien, die von unserer Webseite auf Ihrem Computer gespeichert werden. Diese Cookie-Dateien werden automatisch im Cookie-Ordner, quasi dem „Hirn“ Ihres Browsers, untergebracht. Ein Cookie besteht aus einem Namen und einem Wert. Bei der Definition eines Cookies müssen zusätzlich ein oder mehrere Attribute angegeben werden.
          </p><br />
          <p>
            Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder persönliche Seiteneinstellungen. Wenn Sie unsere Seite wieder aufrufen, übermittelt Ihr Browser die „userbezogenen“ Informationen an unsere Seite zurück. Dank der Cookies weiß unsere Webseite, wer Sie sind und bietet Ihnen die Einstellung, die Sie gewohnt sind. In einigen Browsern hat jedes Cookie eine eigene Datei, in anderen wie beispielsweise Firefox sind alle Cookies in einer einzigen Datei gespeichert.<br /><br />
          </p>
          <p>
            Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies. Erstanbieter-Cookies werden direkt von unserer Seite erstellt, Drittanbieter-Cookies werden von Partner-Webseiten (z.B. Google Analytics) erstellt. Jedes Cookie ist individuell zu bewerten, da jedes Cookie andere Daten speichert. Auch die Ablaufzeit eines Cookies variiert von ein paar Minuten bis hin zu ein paar Jahren. Cookies sind keine Software-Programme und enthalten keine Viren, Trojaner oder andere „Schädlinge“. Cookies können auch nicht auf Informationen Ihres PCs zugreifen.<br /><br />
          </p>
          <p>
            So können zum Beispiel Cookie-Daten aussehen:<br /><br />
          </p>
          <p>
            <span className="bold">Name:</span> _ga <br />
            <span className="bold">Wert:</span> GA1.2.1326744211.152211113060-6<br />
            <span className="bold">Verwendungszweck:</span> Unterscheidung der Webseitenbesucher<br />
            <span className="bold">Ablaufdatum:</span> nach 2 Jahren<br /><br />
          </p>
          <p>
            Diese Mindestgrößen sollte ein Browser unterstützen können:
          </p> <br />
          <ul className="dtlist">
            <li>Mindestens 4096 Bytes pro Cookie</li>
            <li>Mindestens 50 Cookies pro Domain</li>
            <li>Mindestens 3000 Cookies insgesamt</li>
          </ul>

          <h6 className="bold pt">Welche Arten von Cookies gibt es?</h6>
          <p>
            Die Frage welche Cookies wir im Speziellen verwenden, hängt von den verwendeten Diensten ab und wird in den folgenden Abschnitten der Datenschutzerklärung geklärt.
            An dieser Stelle möchten wir kurz auf die verschiedenen Arten von HTTP-Cookies eingehen. <br /><br />
          </p>
          <p>
            Man kann 4 Arten von Cookies unterscheiden:<br /><br />
          </p>
          <p>
            <span className="bold">Unerlässliche Cookies</span> <br />
            Diese Cookies sind nötig, um grundlegende Funktionen der Webseite sicherzustellen. Zum Beispiel braucht
            es diese Cookies, wenn ein User ein Produkt in den Warenkorb legt, dann auf anderen Seiten weitersurft und
            später erst zur Kasse geht. Durch diese Cookies wird der Warenkorb nicht gelöscht, selbst wenn der User sein Browserfenster schließt.<br /><br />
          </p>
          <p>
            <span className="bold">Zweckmäßige Cookies</span> <br />
            Diese Cookies sammeln Infos über das Userverhalten und ob der User etwaige Fehlermeldungen bekommt. Zudem werden mithilfe dieser Cookies auch die
            Ladezeit und das Verhalten der Webseite bei verschiedenen Browsern gemessen.<br /><br />
          </p>
          <p>
            <span className="bold">Zielorientierte Cookies</span> <br />
            Diese Cookies sorgen für eine bessere Nutzerfreundlichkeit. Beispielsweise werden eingegebene Standorte, Schriftgrößen oder Formulardaten gespeichert.<br /><br />
          </p>
          <p>
            <span className="bold">Werbe-Cookies</span> <br />
            Diese Cookies werden auch Targeting-Cookies genannt. Sie dienen dazu dem User individuell angepasste Werbung zu liefern. Das kann sehr praktisch, aber auch sehr nervig sein.<br /><br />
          </p>
          <p>
            Üblicherweise werden Sie beim erstmaligen Besuch einer Webseite gefragt, welche dieser Cookiearten Sie zulassen möchten. Und natürlich wird diese Entscheidung auch in einem Cookie gespeichert.
          </p>
          <h6 className="bold pt">
            Wie kann ich Cookies löschen?
          </h6>
          <p>
            Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabhängig von welchem Service oder welcher Webseite die Cookies stammen, haben Sie immer die
            Möglichkeit Cookies zu löschen, zu deaktivieren oder nur teilweise zuzulassen. Zum Beispiel können Sie Cookies von Drittanbietern blockieren, aber alle anderen Cookies zulassen.<br /><br />
          </p>
          <p>
            Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser gespeichert wurden, wenn Sie Cookie-Einstellungen ändern oder löschen wollen, können Sie
            dies in Ihren Browser-Einstellungen finden:<br /><br />
          </p>
          <p>
            <a href="https://support.google.com/chrome/answer/95647?tid=211113172"><span className="bold">Chrome:</span> Cookies in Chrome löschen, aktivieren und verwalten<br /></a>

            <a href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=211113172"><span className="bold">Safari:</span> Verwalten von Cookies und Websitedaten mit Safari<br /></a>

            <a href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=211113172"><span className="bold">Firefox:</span> Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben<br /></a>

            <a href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=211113172"><span className="bold">Internet Explorer:</span> Löschen und Verwalten von Cookies<br /></a>

            <a href="https://support.microsoft.com/de-at/help/4027947/microsoft-edge-delete-cookies?tid=211113172"><span className="bold">Microsoft Edge:</span> Löschen und Verwalten von Cookies<br /><br/></a>
          </p>
          <p>Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass er Sie immer informiert, wenn ein Cookie gesetzt werden soll.
            So können Sie bei jedem einzelnen Cookie entscheiden, ob Sie das Cookie erlauben oder nicht. Die Vorgangsweise ist je nach Browser verschieden. Am besten Sie suchen
            die Anleitung in Google mit dem Suchbegriff “Cookies löschen Chrome” oder „Cookies deaktivieren Chrome“ im Falle eines Chrome Browsers.
          </p>
          <h6 className="bold pt">
            Wie sieht es mit meinem Datenschutz aus?
          </h6>
          <p>
            Seit 2009 gibt es die sogenannten „Cookie-Richtlinien“. Darin ist festgehalten, dass das Speichern von Cookies eine Einwilligung des von Ihnen verlangt.
            Innerhalb der EU-Länder gibt es allerdings noch sehr unterschiedliche Reaktionen auf diese Richtlinien. In Österreich erfolgte aber die Umsetzung dieser
            Richtlinie in § 96 Abs. 3 des Telekommunikationsgesetzes (TKG).<br /><br />
          </p>
          <p>
            Wenn Sie mehr über Cookies wissen möchten und vor technischen Dokumentationen nicht zurückscheuen, empfehlen wir <a href="https://tools.ietf.org/html/rfc6265">https://tools.ietf.org/html/rfc6265</a>, dem Request for
            Comments der Internet Engineering Task Force (IETF) namens „HTTP State Management Mechanism“.
          </p>
          <h5 className="light pt">
            Rechte laut Datenschutzgrundverordnung
          </h5>
          <p>
            Ihnen stehen laut den Bestimmungen der DSGVO und des österreichischen <a href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001597&tid=211113172">Datenschutzgesetzes (DSG)</a> grundsätzlich die folgende Rechte zu:<br /><br />
          </p>
          <ul className="dtlist">
            <li>Recht auf Berichtigung (Artikel 16 DSGVO)</li>
            <li>Recht auf Löschung („Recht auf Vergessenwerden“) (Artikel 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</li>
            <li>Recht auf Benachrichtigung – Mitteilungspflicht im Zusammenhang mit der Berichtigung oder Löschung personenbezogener Daten oder der Einschränkung der Verarbeitung (Artikel 19 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</li>
            <li>Widerspruchsrecht (Artikel 21 DSGVO)</li>
            <li>Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden (Artikel 22 DSGVO)</li><br /><br />
          </ul>
          <p>
            Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt
            worden sind, können Sie sich bei der Aufsichtsbehörde beschweren, welche in Österreich die Datenschutzbehörde ist, deren Webseite Sie unter <a href="https://www.dsb.gv.at/">https://www.dsb.gv.at/</a> finden.
          </p>
          <h5 className="light pt">
            TLS-Verschlüsselung mit https
          </h5>
          <p>
            Wir verwenden https um Daten abhörsicher im Internet zu übertragen (Datenschutz durch Technikgestaltung Artikel 25 Absatz 1 DSGVO). Durch den Einsatz von TLS (Transport Layer Security), einem Verschlüsselungsprotokoll zur sicheren Datenübertragung im Internet können wir den Schutz vertraulicher Daten sicherstellen. Sie erkennen die Benutzung dieser Absicherung der Datenübertragung am kleinen Schlosssymbol links oben im Browser und der Verwendung des Schemas https (anstatt http) als Teil unserer Internetadresse.
          </p>
          <h5 className="light pt">
            Google Maps Datenschutzerklärung
          </h5>
          <p>
            Wir benützen auf unserer Website Google Maps der Firma Google Inc. (1600 Amphitheatre Parkway Mountain View, CA 94043, USA). Mit Google Maps können wir Ihnen Standorte besser zeigen und damit unser Service an Ihre Bedürfnisse anpassen. Durch die Verwendung von Google Maps werden Daten an Google übertragen und auf den Google-Servern gespeichert. Hier wollen wir nun genauer darauf eingehen, was Google Maps ist, warum wir diesen Google-Dienst in Anspruch nehmen, welche Daten gespeichert werden und wie Sie dies unterbinden können.
          </p>
          <h6 className="bold pt">
            Was ist Google Maps?
          </h6>
          <p>
            Google Maps ist ein Internet-Kartendienst der Firma Google Inc. Mit Google Maps können Sie online über einen PC, ein Tablet oder eine App genaue Standorte von Städten, Sehenswürdigkeiten, Unterkünften oder Unternehmen suchen. Wenn Unternehmen auf Google My Business vertreten sind, werden neben dem Standort noch weitere Informationen über die Firma angezeigt. Um die Anfahrtsmöglichkeit anzuzeigen, können Kartenausschnitte eines Standorts mittels HTML-Code in eine Website eingebunden werden. Google Maps zeigt die Erdoberfläche als Straßenkarte oder als Luft- bzw. Satellitenbild. Dank der Street View Bilder und den hochwertigen Satellitenbildern sind sehr genaue Darstellungen möglich.
          </p>
          <h6 className="bold pt">
            Warum verwenden wir Google Maps auf unserer Webseite?
          </h6>
          <p>
            All unsere Bemühungen auf dieser Seite verfolgen das Ziel, Ihnen eine nützliche und sinnvolle Zeit auf unserer Webseite zu bieten. Durch die Einbindung von Google Maps können wir Ihnen die wichtigsten Informationen zu diversen Standorten liefern. Sie sehen auf einen Blick wo wir unseren Firmensitz haben. Die Wegbeschreibung zeigt Ihnen immer den besten bzw. schnellsten Weg zu uns. Sie können den Anfahrtsweg für Routen mit dem Auto, mit öffentlichen Verkehrsmitteln, zu Fuß oder mit dem Fahrrad abrufen. Für uns ist die Bereitstellung von Google Maps Teil unseres Kundenservice.
          </p>
          <h6 className="bold pt">
            Welche Daten werden von Google Maps gespeichert?
          </h6>
          <p>
            Damit Google Maps ihren Dienst vollständig anbieten kann, muss das Unternehmen Daten von Ihnen aufnehmen und speichern. Dazu zählen unter anderem die eingegebenen Suchbegriffe, Ihre IP-Adresse und auch die Breiten- bzw. Längenkoordinaten. Benutzen Sie die Routenplaner-Funktion wird auch die eingegebene Startadresse gespeichert. Diese Datenspeicherung passiert allerdings auf den Webseiten von Google Maps. Wir können Sie darüber nur informieren, aber keinen Einfluss nehmen. Da wir Google Maps in unsere Webseite eingebunden haben, setzt Google mindestens ein Cookie (Name: NID) in Ihrem Browser.
            Dieses Cookie speichert Daten über Ihr Userverhalten. Google nutzt diese Daten in erster Linie, um eigene Dienste zu
            optimieren und individuelle, personalisierte Werbung für Sie bereitzustellen. <br /><br />
          </p>
          <p>
            Folgendes Cookie wird aufgrund der Einbindung von Google Maps in Ihrem Browser gesetzt:<br /><br />
          </p>
          <p>
            <span className="bold">Name:</span> NID<br />
            <span className="bold">Wert:</span> 188=h26c1Ktha7fCQTx8rXgLyATyITJ211113060-5<br />
            <span className="bold">Verwendungszweck:</span> NID wird von Google verwendet, um Werbeanzeigen an Ihre
            Google-Suche anzupassen. Mit Hilfe des Cookies „erinnert“ sich Google an Ihre am häufigsten eingegebenen
            Suchanfragen oder Ihre frühere Interaktion mit Anzeigen. So bekommen Sie immer maßgeschneiderte Werbeanzeigen.
            Das Cookie enthält eine einzigartige ID, die Google benutzt, um Ihre persönlichen Einstellungen für Werbezwecke zu sammeln.<br />
            <span className="bold">Ablaufdatum:</span> nach 6 Monaten<br /><br />
          </p>
          <p>
            <span className="bold">Anmerkung:</span>
            Wir können bei den Angaben der gespeicherten Daten keine Vollständigkeit
            gewährleisten. Speziell bei der Verwendung von Cookies sind Veränderungen
            nie auszuschließen. Um das Cookie NID zu identifizieren, wurde eine eigene
            Testseite angelegt, wo ausschließlich Google Maps eingebunden war.
          </p>
          <h6 className="bold pt">
            Wie lange und wo werden die Daten gespeichert?
          </h6>
          <p>
            Die Google-Server stehen in Rechenzentren auf der ganzen Welt.
            Die meisten Server befinden sich allerdings in Amerika. Aus diesem Grund werden
            Ihre Daten auch vermehrt in den USA gespeichert. Hier können Sie genau nachlesen wo sich die
            Google-Rechenzentren befinden: <a href="https://www.google.com/about/datacenters/inside/locations/?hl=de">Link</a><br /><br />
          </p>
          <p>
            Die Daten verteilt Google auf verschiedenen Datenträgern. Dadurch sind die Daten schneller abrufbar und werden
            vor etwaigen Manipulationsversuchen besser geschützt. Jedes Rechenzentrum hat auch spezielle Notfallprogramme.
            Wenn es zum Beispiel Probleme bei der Google-Hardware gibt oder eine Naturkatastrophe die Server lahm legt,
            bleiben die Daten ziemlich sicher trotzdem geschützt.<br /><br />
          </p>
          <p>
            Manche Daten speichert Google für einen festgelegten Zeitraum. Bei anderen Daten bietet Google lediglich die Möglichkeit, diese manuell zu löschen. Weiters anonymisiert das Unternehmen auch Informationen (wie zum Beispiel Werbedaten) in Serverprotokollen, indem es einen Teil der IP-Adresse und Cookie-Informationen nach 9 bzw.18 Monaten löscht.
          </p>
          <h6 className="bold pt">
            Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?
          </h6>
          <p>
            Mit der 2019 eingeführten automatischen Löschfunktion von Standort- und Aktivitätsdaten werden Informationen zur
            Standortbestimmung und Web-/App-Aktivität – abhängig von Ihrer Entscheidung – entweder 3 oder 18 Monate gespeichert
            und dann gelöscht. Zudem kann man diese Daten über das Google-Konto auch jederzeit manuell aus dem Verlauf löschen.
            Wenn Sie Ihre Standorterfassung vollständig verhindern wollen, müssen Sie im Google-Konto die Rubrik „Web- und
            App-Aktivität“ pausieren. Klicken Sie „Daten und Personalisierung“ und dann auf die Option „Aktivitätseinstellung“.
            Hier können Sie die Aktivitäten ein- oder ausschalten.<br /><br />
          </p>
          <p>
            In Ihrem Browser können Sie weiters auch einzelne Cookies deaktivieren, löschen oder verwalten.
            Je nach dem welchen Browser Sie verwenden, funktioniert dies immer etwas anders. Die folgenden Anleitungen
            zeigen, wie Sie Cookies in Ihrem Browser verwalten:<br /><br />
          </p>
          <p>
            Chrome: Cookies in Chrome löschen, aktivieren und verwalten<br />

            Safari: Verwalten von Cookies und Websitedaten mit Safari<br />

            Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben<br />

            Internet Explorer: Löschen und Verwalten von Cookies<br />

            Microsoft Edge: Löschen und Verwalten von Cookies<br /><br />
          </p>
          <p>
            Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass er Sie immer
            informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen Cookie entscheiden, ob
            Sie es erlauben oder nicht. <br /><br />
          </p>
          <p>
            Google ist aktiver Teilnehmer beim EU-U.S. Privacy Shield Framework, wodurch der korrekte und sichere Datentransfer
            persönlicher Daten geregelt wird. Mehr Informationen dazu finden Sie auf https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI. Wenn Sie mehr über die Datenverarbeitung von Google erfahren wollen, empfehlen wir Ihnen die hauseigene Datenschutzerklärung des Unternehmens unter https://policies.google.com/privacy?hl=de.
          </p>
          <h5 className="light pt">
            Google Fonts Datenschutzerklärung
          </h5>
          <p>
            Auf unserer Webseite verwenden wir Google Fonts. Das sind die „Google-Schriften“ der Firma Google Inc.
            (1600 Amphitheatre Parkway Mountain View, CA 94043, USA). <br /><br />
          </p>
          <p>
            Für die Verwendung von Google-Schriftarten müssen Sie sich nicht anmelden bzw. ein Passwort hinterlegen. Weiters werden auch keine Cookies in Ihrem Browser gespeichert. Die Dateien (CSS, Schriftarten/Fonts) werden über die Google-Domains fonts.googleapis.com und fonts.gstatic.com angefordert. Laut Google sind die Anfragen nach CSS und Schriften vollkommen getrennt von allen anderen Google-Diensten. Wenn Sie ein Google-Konto haben, brauchen Sie keine Sorge haben, dass Ihre Google-Kontodaten, während der Verwendung von Google Fonts, an Google übermittelt werden. Google erfasst die Nutzung von
            CSS (Cascading Style Sheets) und der verwendeten Schriftarten und speichert diese Daten sicher. Wie die
            Datenspeicherung genau aussieht, werden wir uns noch im Detail ansehen.<br /> <br /><br />
          </p>
          <h6 classname="bold">
            Was sind Google Fonts?
          </h6>
          <p>
            Google Fonts (früher Google Web Fonts) ist ein Verzeichnis mit über 800 Schriftarten, die die <a href="https://de.wikipedia.org/wiki/Google_LLC?tid=211113172">Google LLC</a> Ihren
            Nutzern kostenlos zu Verfügung stellen.<br /><br />
          </p>
          <p>
            Viele dieser Schriftarten sind unter der SIL Open Font License veröffentlicht, während andere unter der Apache-Lizenz veröffentlicht wurden. Beides sind freie Software-Lizenzen.
          </p>
          <h6 className="bold pt">
            Warum verwenden wir Google Fonts auf unserer Webseite?
          </h6>
          <p>
            Mit Google Fonts können wir auf der eigenen Webseite Schriften nutzen, und müssen sie nicht auf unserem eigenen Server hochladen. Google Fonts ist ein wichtiger Baustein, um die Qualität unserer Webseite hoch zu halten. Alle Google-Schriften sind automatisch für das Web optimiert und dies spart Datenvolumen und ist speziell für die Verwendung bei mobilen Endgeräten ein großer Vorteil. Wenn Sie unsere Seite besuchen, sorgt die niedrige Dateigröße für eine schnelle Ladezeit. Des Weiteren sind Google Fonts sichere Web Fonts. Unterschiedliche Bildsynthese-Systeme (Rendering) in verschiedenen Browsern, Betriebssystemen und mobilen Endgeräten können zu Fehlern führen. Solche Fehler können teilweise Texte bzw. ganze Webseiten optisch verzerren. Dank des schnellen Content Delivery Network (CDN) gibt es mit Google Fonts keine plattformübergreifenden Probleme. Google Fonts unterstützt alle gängigen Browser (Google Chrome, Mozilla Firefox, Apple Safari, Opera) und funktioniert zuverlässig auf den meisten modernen mobilen Betriebssystemen, einschließlich Android 2.2+ und iOS 4.2+ (iPhone, iPad, iPod). Wir verwenden die Google Fonts also, damit wir unser gesamtes Online-Service so schön und einheitlich wie möglich darstellen können.
          </p>
          <h6 className="bold pt">
            Welche Daten werden von Google gespeichert?
          </h6>
          <p>
            Wenn Sie unsere Webseite besuchen, werden die Schriften über einen Google-Server nachgeladen. Durch diesen externen Aufruf werden Daten an die Google-Server übermittelt. So erkennt Google auch, dass Sie bzw. Ihre IP-Adresse unsere Webseite besucht. Die Google Fonts API wurde entwickelt, um Verwendung, Speicherung und Erfassung von Endnutzerdaten auf das zu reduzieren, was für eine ordentliche Bereitstellung von Schriften nötig ist. API steht übrigens für „Application Programming Interface“ und dient unter anderem als Datenübermittler im Softwarebereich.<br /><br />
          </p>
          <p>
            Google Fonts speichert CSS- und Schrift-Anfragen sicher bei Google und ist somit geschützt. Durch die gesammelten Nutzungszahlen kann Google feststellen, wie gut die einzelnen Schriften ankommen. Die Ergebnisse veröffentlicht Google auf internen Analyseseiten, wie beispielsweise Google Analytics. Zudem verwendet Google auch Daten des eigenen Web-Crawlers, um festzustellen, welche Webseiten Google-Schriften verwenden. Diese Daten werden in der BigQuery-Datenbank von Google Fonts veröffentlicht. Unternehmer und Entwickler nützen das Google-Webservice BigQuery, um große Datenmengen
            untersuchen und bewegen zu können.<br /><br />
          </p>
          <p>
            Zu bedenken gilt allerdings noch, dass durch jede Google Font Anfrage auch Informationen wie Spracheinstellungen, IP-Adresse, Version des Browsers, Bildschirmauflösung des Browsers und Name des Browsers automatisch an die Google-Server übertragen werden. Ob diese Daten auch gespeichert werden, ist nicht klar feststellbar bzw. wird von Google nicht eindeutig kommuniziert.
          </p>
          <h6 className="bold pt">
            Wie lange und wo werden die Daten gespeichert?
          </h6>
          <p>
            Anfragen für CSS-Assets speichert Google einen Tag lang auf Ihren Servern, die
            hauptsächlich außerhalb der EU angesiedelt sind. Das ermöglicht uns, mithilfe eines
            Google-Stylesheets die Schriftarten zu nutzen. Ein Stylesheet ist eine Formatvorlage,
            über die man einfach und schnell z.B. das Design bzw. die Schriftart einer Webseite ändern kann.<br /><br />
          </p>
          <p>
            Die Font-Dateien werden bei Google ein Jahr gespeichert. Google verfolgt damit das Ziel, die Ladezeit von Webseiten grundsätzlich zu verbessern. Wenn Millionen von Webseiten auf die gleichen Schriften verweisen, werden sie nach dem ersten Besuch zwischengespeichert und erscheinen sofort auf allen anderen später besuchten Webseiten wieder. Manchmal aktualisiert Google Schriftdateien, um die Dateigröße zu reduzieren, die Abdeckung von Sprache zu erhöhen und das Design zu verbessern.
          </p>
          <h6 className="bold pt">
            Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?
          </h6>
          <p>
            Jene Daten, die Google für einen Tag bzw. ein Jahr speichert können nicht einfach gelöscht werden. Die Daten werden
            beim Seitenaufruf automatisch an Google übermittelt. Um diese Daten vorzeitig löschen zu können,
            müssen Sie den Google-Support auf <a href="https://support.google.com/?hl=de&tid=211113060">https://support.google.com/?hl=de&tid=211113060</a> kontaktieren.
            Datenspeicherung verhindern Sie in diesem Fall nur, wenn Sie unsere Seite nicht besuchen.<br /><br />
          </p>
          <p>
            Anders als andere Web-Schriften erlaubt uns Google uneingeschränkten Zugriff auf alle Schriftarten. Wir können also unlimitiert auf ein Meer an Schriftarten zugreifen und so das
            Optimum für unsere Webseite rausholen. Mehr zu Google Fonts und weiteren Fragen finden Sie auf
            <a href="https://developers.google.com/fonts/faq?tid=211113060">https://developers.google.com/fonts/faq?tid=211113060</a>. Dort geht zwar Google auf datenschutzrelevante Angelegenheiten ein,
            doch wirklich detaillierte Informationen über Datenspeicherung sind nicht enthalten. Es ist relativ schwierig, von Google wirklich
            präzise Informationen über gespeicherten Daten zu bekommen. <br /><br />
          </p>
          <p>
            Welche Daten grundsätzlich von Google erfasst werden und wofür diese Daten verwendet werden, können Sie auch auf <a href="https://www.google.com/intl/de/policies/privacy/">Link</a> nachlesen.
          </p>
          <h5 className="light pt">
            Google reCAPTCHA Datenschutzerklärung
          </h5>
          <p>
            Unser oberstes Ziel ist es, unsere Webseite für Sie und für uns bestmöglich zu sichern und zu schützen. Um das zu gewährleisten, verwenden wir Google reCAPTCHA der Firma Google Inc. (1600 Amphitheatre Parkway Mountain View, CA 94043, USA). Mit reCAPTCHA können wir feststellen, ob Sie auch wirklich ein Mensch aus Fleisch und Blut sind und kein Roboter oder eine andere Spam-Software. Unter Spam verstehen wir jede, auf elektronischen Weg, unerwünschte Information, die uns ungefragter Weise zukommt. Bei den klassischen CAPTCHAS mussten Sie zur Überprüfung meist Text- oder Bildrätsel lösen. Mit reCAPTCHA von Google müssen wir Sie meist nicht mit solchen Rätseln belästigen. Hier reicht es in den meisten Fällen, wenn Sie einfach ein Häkchen setzen und so bestätigen, dass Sie kein Bot sind. Mit der neuen Invisible reCAPTCHA Version müssen Sie nicht mal mehr ein Häkchen setzen. Wie das genau funktioniert und vor allem welche Daten dafür verwendet werden, erfahren Sie im Verlauf dieser Datenschutzerklärung.
          </p>
          <h6 className="bold pt">
            Was ist reCAPTCHA?
          </h6>
          <p>
            reCAPTCHA ist ein freier Captcha-Dienst von Google, der Webseiten vor Spam-Software und den Missbrauch durch nicht-menschliche Besucher schützt. Am häufigsten wird dieser Dienst verwendet, wenn Sie Formulare im Internet ausfüllen. Ein Captcha-Dienst ist eine Art automatischer Turing-Test, der sicherstellen soll, dass eine Handlung im Internet von einem Menschen und nicht von einem Bot vorgenommen wird. Im klassischen Turing-Test (benannt nach dem Informatiker Alan Turing) stellt ein Mensch die Unterscheidung zwischen Bot und Mensch fest. Bei Captchas übernimmt das auch der Computer bzw. ein Softwareprogramm. Klassische Captchas arbeiten mit kleinen Aufgaben, die für Menschen leicht zu lösen sind, doch für Maschinen erhebliche Schwierigkeiten aufweisen. Bei reCAPTCHA müssen Sie aktiv keine Rätsel mehr lösen. Das Tool verwendet moderne Risikotechniken, um Menschen von Bots zu unterscheiden. Hier müssen Sie nur noch das Textfeld „Ich bin kein Roboter“ ankreuzen bzw. bei Invisible reCAPTCHA ist selbst das nicht mehr nötig. Bei reCAPTCHA wird ein JavaScript-Element in den Quelltext eingebunden und dann läuft das Tool im Hintergrund und analysiert Ihr Benutzerverhalten. Aus diesen Useraktionen berechnet die Software einen sogenannten Captcha-Score. Google berechnet mit diesem Score schon vor der Captcha-Eingabe wie hoch die Wahrscheinlichkeit ist, dass Sie ein Mensch sind. reCAPTCHA bzw. Captchas im Allgemeinen kommen immer dann zum Einsatz, wenn Bots gewisse Aktionen (wie z.B. Registrierungen, Umfragen usw.) manipulieren oder missbrauchen könnten.
          </p>
          <h6 className="bold pt">
            Warum verwenden wir reCAPTCHA auf unserer Webseite?
          </h6>
          <p>
            Wir wollen nur Menschen aus Fleisch und Blut auf unserer Seite begrüßen. Bots oder Spam-Software unterschiedlichster Art dürfen getrost zuhause bleiben. Darum setzen wir alle Hebel in Bewegung, uns zu schützen und die bestmögliche Benutzerfreundlichkeit für Sie anzubieten. Aus diesem Grund verwenden wir Google reCAPTCHA der Firma Google. So können wir uns ziemlich sicher sein, dass wir eine „botfreie“ Webseite bleiben. Durch die Verwendung von reCAPTCHA werden Daten an Google übermittelt, um festzustellen, ob Sie auch wirklich ein Mensch sind. reCAPTCHA dient also der Sicherheit unserer Webseite und in weiterer Folge damit auch Ihrer Sicherheit. Zum Beispiel könnte es ohne reCAPTCHA passieren, dass bei einer Registrierung ein Bot möglichst viele E-Mail-Adressen registriert, um im Anschluss Foren oder Blogs mit unerwünschten Werbeinhalten „zuzuspamen“. Mit reCAPTCHA können wir solche Botangriffe vermeiden.
          </p>
          <h6 className="bold pt">
            Welche Daten werden von reCAPTCHA gespeichert?
          </h6>
          <p>
            reCAPTCHA sammelt personenbezogene Daten von Usern, um festzustellen, ob die Handlungen auf unserer Webseite auch wirklich von Menschen stammen. Es kann also die IP-Adresse und andere Daten, die Google für den reCAPTCHA-Dienst benötigt, an Google versendet werden. IP-Adressen werden innerhalb der Mitgliedstaaten der EU oder anderer Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum fast immer zuvor gekürzt, bevor die Daten auf einem Server in den USA landen. Die IP-Adresse wird nicht mit anderen Daten von Google kombiniert, sofern Sie nicht während der Verwendung von reCAPTCHA mit
            Ihrem Google-Konto angemeldet sind. Zuerst prüft der reCAPTCHA-Algorithmus, ob auf Ihrem Browser schon
            Google-Cookies von anderen Google-Diensten (YouTube. Gmail usw.) platziert sind. Anschließend setzt
            reCAPTCHA ein zusätzliches Cookie in Ihrem Browser und erfasst einen Schnappschuss Ihres Browserfensters. <br /><br />
          </p>
          <p>
            Die folgende Liste von gesammelten Browser- und Userdaten, hat nicht den Anspruch auf Vollständigkeit.
            Vielmehr sind es Beispiele von Daten, die nach unserer Erkenntnis, von Google verarbeitet werden.<br /><br />
          </p>
          <ul className="dtlist">
            <li>Referrer URL (die Adresse der Seite von der der Besucher kommt)</li>
            <li>IP-Adresse (z.B. 256.123.123.1)</li>
            <li>Infos über das Betriebssystem (die Software, die den Betrieb Ihres Computers ermöglicht. Bekannte Betriebssysteme sind Windows, Mac OS X oder Linux)</li>
            <li>Cookies (kleine Textdateien, die Daten in Ihrem Browser speichern)</li>
            <li>Maus- und Keyboardverhalten (jede Aktion, die Sie mit der Maus oder der Tastatur ausführen wird gespeichert)</li>
            <li>Datum und Spracheinstellungen (welche Sprache bzw. welches Datum Sie auf Ihrem PC voreingestellt haben wird gespeichert)</li>
            <li>Alle Javascript-Objekte (JavaScript ist eine Programmiersprache, die Webseiten ermöglicht, sich an den User anzupassen. JavaScript-Objekte können alle möglichen Daten unter einem Namen sammeln)</li>
            <li>Bildschirmauflösung (zeigt an aus wie vielen Pixeln die Bilddarstellung besteht)</li><br /><br />
          </ul>
          <p>
            Unumstritten ist, dass Google diese Daten verwendet und analysiert noch bevor Sie auf das Häkchen
            „Ich bin kein Roboter“ klicken. Bei der Invisible reCAPTCHA-Version fällt sogar das Ankreuzen weg und der ganze
            Erkennungsprozess läuft im Hintergrund ab. Wie viel und welche Daten Google genau speichert, erfährt man von
            Google nicht im Detail.<br /><br />
          </p>
          <p>
            Folgende Cookies werden von reCAPTCHA verwendet: Hierbei beziehen wir uns auf die reCAPTCHA Demo-Version
            von Google unter <a href="https://www.google.com/recaptcha/api2/demo">Link</a>. All diese Cookies benötigen zu Trackingzwecken
            eine eindeutige Kennung. Hier ist eine Liste an Cookies, die Google reCAPTCHA auf der Demo-Version gesetzt hat:<br /><br />
          </p>
          <p>
            <span className="bold">Name:</span> IDE<br />
            <span className="bold">Wert:</span> WqTUmlnmv_qXyi_DGNPLESKnRNrpgXoy1K-pAZtAkMbHI-211113060-8<br />
            <span className="bold">Verwendungszweck:</span> Dieses Cookie wird von der Firma DoubleClick (gehört auch Google) gesetzt, um die Aktionen eines Users auf der Webseite im Umgang mit Werbeanzeigen zu registrieren und zu melden. So kann die Werbewirksamkeit gemessen und entsprechende Optimierungsmaßnahmen getroffen werden. IDE wird in Browsern unter der Domain doubleclick.net gespeichert.<br />
            <span className="bold">Ablaufdatum:</span> nach einem Jahr<br /><br />

            <span className="bold">Name:</span> 1P_JAR<br />
            <span className="bold">Wert:</span> 2019-5-14-12<br />
            <span className="bold">Verwendungszweck:</span> Dieses Cookie sammelt Statistiken zur Webseite-Nutzung und misst Conversions. Eine Conversion entsteht z.B., wenn ein User zu einem Käufer wird. Das Cookie wird auch verwendet, um Usern relevante Werbeanzeigen einzublenden. Weiters kann man mit dem Cookie vermeiden, dass ein User dieselbe Anzeige mehr als einmal zu Gesicht bekommt.<br />
            <span className="bold">Ablaufdatum:</span> nach einem Monat<br /><br />

            <span className="bold">Name:</span> ANID<br />
            <span className="bold">Wert:</span> U7j1v3dZa2111130600xgZFmiqWppRWKOr<br />
            <span className="bold">Verwendungszweck:</span> Viele Infos konnten wir über dieses Cookie nicht in Erfahrung bringen. In der Datenschutzerklärung von Google wird das Cookie im Zusammenhang mit „Werbecookies“ wie z. B. „DSID“, „FLC“, „AID“, „TAID“ erwähnt. ANID wird unter Domain google.com gespeichert.<br />
            <span className="bold">Ablaufdatum:</span> nach 9 Monaten<br /><br />

            <span className="bold">Name:</span> CONSENT<br />
            <span className="bold">Wert:</span> YES+AT.de+20150628-20-0<br />
            <span className="bold">Verwendungszweck:</span> Das Cookie speichert den Status der Zustimmung eines Users zur Nutzung unterschiedlicher Services von Google. CONSENT dient auch der Sicherheit, um User zu überprüfen, Betrügereien von Anmeldeinformationen zu verhindern und Userdaten vor unbefugten Angriffen zu schützen.<br />
            <span className="bold">Ablaufdatum:</span> nach 19 Jahren<br /><br />

            <span className="bold">Name:</span> NID<br />
            <span className="bold">Wert:</span> 0WmuWqy211113060zILzqV_nmt3sDXwPeM5Q<br />
            <span className="bold">Verwendungszweck:</span> NID wird von Google verwendet, um Werbeanzeigen an Ihre Google-Suche anzupassen. Mit Hilfe des Cookies „erinnert“ sich Google an Ihre meist eingegebenen Suchanfragen oder Ihre frühere Interaktion mit Anzeigen. So bekommen Sie immer maßgeschneiderte Werbeanzeigen. Das Cookie enthält eine einzigartige ID, um persönliche Einstellungen des Users für Werbezwecke zu sammeln.<br />
            <span className="bold">Ablaufdatum:</span> nach 6 Monaten<br /><br />

            <span className="bold">Name:</span> DV<br />
            <span className="bold">Wert:</span> gEAABBCjJMXcI0dSAAAANbqc211113060-4<br />
            <span className="bold">Verwendungszweck:</span> Sobald Sie das „Ich bin kein Roboter“-Häkchen angekreuzt haben, wird dieses Cookie gesetzt. Das Cookie wird von Google Analytics für personalisierte Werbung verwendet. DV sammelt Informationen in anonymisierter Form und wird weiters benutzt, um User-Unterscheidungen zu treffen.<br />
            <span className="bold">Ablaufdatum:</span> nach 10 Minuten<br /><br />

            <span className="bold">Anmerkung:</span> Diese Aufzählung kann keinen Anspruch auf Vollständigkeit erheben, da Google erfahrungsgemäß die Wahl ihrer Cookies immer wieder auch verändert. <br /><br />
          </p>
          <h6 className="boldpt">
            Wie lange und wo werden die Daten gespeichert?
          </h6>
          <p>
            Durch das Einfügen von reCAPTCHA werden Daten von Ihnen auf den Google-Server übertragen. Wo genau diese Daten gespeichert werden, stellt Google, selbst nach wiederholtem Nachfragen, nicht klar dar. Ohne eine Bestätigung von Google erhalten zu haben, ist davon auszugehen, dass Daten wie Mausinteraktion, Verweildauer auf der Webseite oder Spracheinstellungen auf den europäischen oder amerikanischen Google-Servern gespeichert werden. Die IP-Adresse, die Ihr Browser an Google übermittelt, wird grundsätzlich nicht mit anderen Google-Daten aus weiteren Google-Diensten zusammengeführt. Wenn Sie allerdings während der Nutzung des reCAPTCHA-Plug-ins bei Ihrem Google-Konto angemeldet sind, werden die Daten zusammengeführt. Dafür gelten die abweichenden Datenschutzbestimmungen der Firma Google.
          </p>
          <h6 className="bold pt">
            Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?
          </h6>
          <p>
            Wenn Sie wollen, dass über Sie und über Ihr Verhalten keine Daten an Google übermittelt werden, müssen Sie sich, bevor Sie unsere Webseite besuchen bzw. die reCAPTCHA-Software verwenden, bei Google vollkommen ausloggen und alle Google-Cookies löschen. Grundsätzlich werden die Daten sobald Sie unsere Seite aufrufen automatisch an Google übermittelt. Um diese Daten wieder zu löschen, müssen Sie den Google-Support auf  <a href="https://support.google.com/?hl=de&tid=211113060">https://support.google.com/?hl=de&tid=211113060</a> kontaktieren.
            <br /><br/>
            Wenn Sie also unsere Webseite verwenden, erklären Sie sich einverstanden, dass Google LLC und deren Vertreter automatisch Daten erheben, bearbeiten und nutzen.
            <br /><br/>
            Etwas mehr über reCAPTCHA erfahren Sie auf der Webentwickler-Seite von Google auf <a href="https://developers.google.com/recaptcha/">https://developers.google.com/recaptcha/</a>. Google geht hier zwar auf die technische Entwicklung der reCAPTCHA näher ein, doch genaue Informationen über Datenspeicherung und datenschutzrelevanten Themen sucht man auch dort vergeblich. Eine gute Übersicht über die grundsätzliche Verwendung von Daten bei Google finden Sie in der hauseigenen Datenschutzerklärung auf <a href="https://www.google.com/intl/de/policies/privacy/.">Link</a>
            <br /><br/>
            Quelle: Erstellt mit dem <a href="https://www.firmenwebseiten.at/datenschutz-generator/">Datenschutz Generator von firmenwebseiten.at</a> in Kooperation mit wallentin.cc
          </p>
        </div>

      </div>
    );
  }
}

export default Datenschutz;
