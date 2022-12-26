import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
  initial: 'Deutsch',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('Deutsch').create({
      // Menu
      menu_header: "Anleitungen",
      start: "Begrüßung",
      wolo_subgroup: "Ansicht Klient*in",
      sozi_subgroup: "Ansicht Sozialarbeiter*in",

      // Start page
      subheader_start: "Die Cloud für wohnungslose Menschen",
      subsubheader_start: "Wie Du sie bedienst",
      text_start: "Herzlich willkommen! Du hast Zugriff auf die Cloud für wohnungslose Menschen bekommen,<br>möchtest Dich anmelden oder hast Fragen, wie Du sie bedienst?<br><br><b>Dann bist Du hier genau richtig!</b><br><br>Auf der linken Seite findest Du Anleitungen, wie Du alle Funktionen der Cloud nutzt.<br>Dein Cloud-Team.",

      // Misc
      how_its_done: "So wird's gemacht",

      // Wolo tasks
      w_task_1_title: "Anmeldung / Login",
      w_task_1_step_1: "daten-oase.org in der Adressleiste des Browsers eingeben und ENTER auf der Tastatur drücken.",
      w_task_1_step_2: "Den hinterlegten Anmeldenamen eingeben.",
      w_task_1_step_3: "Das gewählte Passwort eingeben <br>Hinweis: Das Augensymbol zeigt die Eingabe zur Selbstkontrolle.",
      w_task_1_step_4: "Klick auf Anmelden.",

      w_task_2_title: "Abmeldung / Logout",
      w_task_2_step_1: "Oben rechts auf „Abmelden“ klicken.",

      // w_task_3_title: "Passwort zurücksetzen",
      // w_task_3_step_1: "",

      w_task_4_title: "Passwort ändern",
      w_task_4_step_1: "Rechts oben auf „Profil“ klicken.",
      w_task_4_step_2: "In das entsprechende Feld das aktuelle Passwort eingeben.",
      w_task_4_step_3: "Ein neues Passwort in das Feld darunter eintragen.",
      w_task_4_step_4: "Das neue Passwort zur Bestätigung erneut in das unterste Feld eingeben <br>Hinweis: Durch einen Klick auf das Auge wird die Eingabe zur Selbstkontrolle angezeigt.",
      w_task_4_step_5: "Auf „Passwort ändern“ klicken.",

      w_task_5_title: "Ordner anlegen",
      w_task_5_step_1: "Klicke oben rechts auf „Ordner erstellen“.",
      w_task_5_step_2: "Einen Namen für den Ordner in das Feld eintragen.",
      w_task_5_step_3: "Auf „Erstellen“ klicken.",

      w_task_6_title: "Dokument hochladen",
      w_task_6_step_1: "OPTION 1: Auf „Hochladen“ oben rechts klicken.",
      w_task_6_step_2: "Auf „Dokument(e) auswählen“ klicken.",
      w_task_6_step_3: "Ein oder mehrere Dokument(e) von Gerät auswählen und das Fenster bestätigen („Öffnen“).",
      w_task_6_step_4: "Auf „Hochladen“ klicken.",
      w_task_6_step_5: "OPTION 2: Eine Datei auf die Webseite ziehen, um sie direkt hochzuladen.",
      w_task_6_step_6: "Mauszeiger auf dem Desktop auf eine Datei bewegen.",
      w_task_6_step_7: "Maus links klicken und gedrückt halten.",
      w_task_6_step_8: "Mauszeiger mit Dokument auf die Webseite ziehen.",
      w_task_6_step_9: "Maustaste loslassen.",

      w_task_7_title: "Dokument / Ordner an Einrichtung freigeben",
      w_task_7_step_1: "Bei dem freizugebenden Dokument / Ordner rechts auf das Schloss klicken.",
      w_task_7_step_2: "Klick auf „An Einrichtung freigeben.“",
      w_task_7_step_3: "Name der Einrichtung in das Feld eingeben und aus der Liste auswählen.",
      w_task_7_step_4: "Mit dem Kästchen kann festgelegt werden, ob die/der Sozialarbeiter*in Dokumente hochladen und bearbeiten darf oder nicht (Wenn es sich um einen freigegebenen Ordner handelt).",
      w_task_7_step_5: "Auf „Freigeben“ klicken.",

      w_task_8_title: "Dokument / Ordner per E-Mail freigeben",
      w_task_8_step_1: "Bei dem freizugebenden Dokument / Ordner rechts auf das Schloss klicken.",
      w_task_8_step_2: "Klick auf „Freigabe-E-Mail erstellen“.",
      w_task_8_step_3: "E-Mail-Adresse der Person, welche das Dokument / den Ordner erhalten soll, in das Feld eingeben.",
      w_task_8_step_4: "Auf „Freigeben“ klicken.",

      w_task_9_title: "Dokument / Ordner per Link freigeben",
      w_task_9_step_1: "Bei dem freizugebenden Dokument / Ordner rechts auf das Schloss klicken.",
      w_task_9_step_2: "Klick auf „Freigabe-Link erstellen.“",
      w_task_9_step_3: "Der Link wurde erstellt und wird oben in dem Fenster angezeigt. Kann per Klick auf die beiden Blätter neben dem Link kopiert werden, um ihn zu versenden.",

      w_task_10_title: "Berechtigung der Freigabe Dokument / Ordner ändern",
      w_task_10_step_1: "Neben der zu ändernden Freigabe auf das Stift-Symbol klicken.",
      w_task_10_step_2: "Das Häkchen neben „Darf Dokumente hochladen und bearbeiten“ entweder entfernen oder setzen.",
      w_task_10_step_3: "Auf „Schließen“ klicken.",

      w_task_11_title: "Freigabe Dokument / Ordner mit Zeitbeschränkung versehen",
      w_task_11_step_1: "Bei dem Dokument / Ordner rechts auf das Schloss klicken.",
      w_task_11_step_2: "Neben der zu ändernden Freigabe auf das Uhr-Symbol klicken.",
      w_task_11_step_3: "Im Kalender ein Datum auswählen, an dem die Freigabe beendet werden soll.",
      w_task_11_step_4: "Auf „Schließen“ klicken.",
      w_task_11_step_5: "Zeitbeschränkung aufheben:<br>Neben der zu ändernden Freigabe auf das Uhr-Symbol klicken.",
      w_task_11_step_6: "Auf „Datum entfernen“ klicken.",
      w_task_11_step_7: "Auf „Schließen“ klicken.",

      w_task_12_title: "Freigabe Dokument / Ordner mit Passwort schützen",
      w_task_12_step_1: "Bei dem Dokument / Ordner rechts auf das Schloss klicken.",
      w_task_12_step_2: "Neben der zu ändernden Freigabe auf das Schlüssel-Symbol klicken.",
      w_task_12_step_3: "Ein Passwort in das Feld eingeben. Es muss mindestens 10 Zeichen haben.",
      w_task_12_step_4: "Auf „Speichern“ klicken.",
      w_task_12_step_5: "Freigabepasswort entfernen:<br>Neben der zu ändernden Freigabe auf das Schlüssel-Symbol klicken.",
      w_task_12_step_6: "Auf „Passwort entfernen“ klicken.",

      w_task_13_title: "Dokument verschieben",
      w_task_13_step_1: "Bei dem zu verschiebenden Dokument / Ordner auf die drei Punkte links neben dem Schloss klicken.",
      w_task_13_step_2: "In dem sich öffnenden Menü auf „Verschieben“ klicken.<br>Oben wird nun angezeigt, dass man sich im Verschieben-Modus befindet.",
      w_task_13_step_3: "An den Ort navigieren, an den das Dokument / der Ordner verschoben werden soll.",
      w_task_13_step_4: "Oben auf „Hierhin verschieben“ klicken. Das Dokument / der Ordner wurde nun an den Ort verschoben, an dem man sich in der Ordnerstruktur befindet.",

      w_task_14_title: "Dokument / Ordner löschen",
      w_task_14_step_1: "Bei dem zu löschenden Dokument / Ordner auf die drei Punkte links neben dem Schloss klicken.",
      w_task_14_step_2: "In dem sich öffnenden Menü auf „Löschen“ klicken.",
      w_task_14_step_3: "Im sich öffnenden Bestätigungsfenster auf „Löschen“ klicken.",

      w_task_15_title: "Dokument / Ordner umbenennen",
      w_task_15_step_1: "Bei dem umzubenennenden Dokument / Ordner auf die drei Punkte links neben dem Schloss klicken.",
      w_task_15_step_2: "In dem sich öffnenden Menü auf „Umbenennen“ klicken.",
      w_task_15_step_3: "In das Feld einen neuen Namen eingeben.",
      w_task_15_step_4: "Auf „Speichern“ klicken.",

      w_task_16_title: "Dokument herunterladen",
      w_task_16_step_1: "Bei herunterzuladenden Dokument auf den Pfeil nach unten mit einer Linie klicken (links neben den drei Punkten)<br>Hinweis: Wenn der Pfeil nicht angezeigt wird, handelt es sich vermutlich um einen Ordner. Ordner können nicht heruntergeladen werden. Nur einzelne Dokumente.",
      w_task_16_step_2: "Der Download beginnt.<br>Hinweis: Der Standard-Speicherort ist bei den meisten Geräten der Ordner „Downloads“",

      w_task_17_title: "Dokument anzeigen",
      w_task_17_step_1: "Zu dem anzuzeigenden Dokument navigieren.",
      w_task_17_step_2: "Auf den Dokumentennamen klicken.<br>Die Vorschau wird automatisch geöffnet.",

      // Sozi tasks
      s_task_4_title: "Passwort ändern",
      s_task_4_step_1: "Rechts oben auf „Profil“ klicken.",
      s_task_4_step_2: "In das entsprechende Feld das aktuelle Passwort eingeben.",
      s_task_4_step_3: "Ein neues Passwort in das Feld darunter eingeben.",
      s_task_4_step_4: "Das neue Passwort zur Bestätigung erneut in das unterste Feld eingeben.<br>Hinweis: Durch einen Klick auf das Auge wird die Eingabe zur Selbstkontrolle angezeigt",
      s_task_4_step_5: "Auf „Passwort ändern“ klicken.",

      s_task_5_title: "Neue*n Klient*in anlegen",
      s_task_5_step_1: "Oben rechts auf „Neue*n Klient*in anlegen“ klicken.",
      s_task_5_step_2: "Den Anmeldenamen und E-Mail-Adresse der/des Klient*in eingeben<br>Hinweis: Der Anmeldename sollte nach folgendem Schema formatiert sein:Vorname.Nachname.Geburtsjahr",
      s_task_5_step_3: "(optional) Sollte die/der Klient*in es wünschen, kann direkt ein Passwort vergeben werden. Dazu das Häkchen bei „Passwort direkt festlegen“ setzen. Das Passwort eingeben und darunter zur Bestätigung erneut eintragen.<br>Hinweis: Das Passwort muss mindestens 10 Zeichen haben.",
      s_task_5_step_4: "Auf „Account erstellen“ klicken.",

      s_task_6_title: "Account einer/eines Klient*in bearbeiten",
      s_task_6_step_1: "Bei der/dem zu bearbeitenden Klient*in auf das Zahnrad klicken.",
      s_task_6_step_2: "Auf „Account Bearbeiten“ klicken.",
      s_task_6_step_3: "Nun können Name, E-Mail-Adresse und/oder Passwort geändert werden.",
      s_task_6_step_4: "Auf „Speichern“ klicken.",

      s_task_7_title: "Willkommens-E-Mail erneut an eine*r Klient*in senden",
      s_task_7_step_1: "Bei der/dem entsprechenden Klient*in auf das Zahnrad klicken.",
      s_task_7_step_2: "Auf „Willkommens-E-Mail erneut senden“ klicken.",
      s_task_7_step_3: "Die Willkommens-E-Mail wurde erneut versendet.",

      // s_task_8_title: "Neuen Ordner in freigegebenem Ordner anlegen ",
      // s_task_8_step_1: "",
      // s_task_8_step_2: "",
      // s_task_8_step_3: "",
      // s_task_8_step_4: "",

      s_task_9_title: "Dokument in freigegebenen Ordner hochladen",
      s_task_9_step_1: "In der Klient*innenliste auf die entsprechende Person klicken.",
      s_task_9_step_2: "Auf den Ordner klicken, in welchen ein oder mehrere Dokument(e) hochgeladen werden soll.",
      s_task_9_step_3: "OPTION 1: Auf „Hochladen“ oben rechts klicken.",
      s_task_9_step_4: "Auf „Dokument(e) auswählen“ klicken.",
      s_task_9_step_5: "Ein oder mehrere Dokument(e) von Gerät auswählen und das Fenster bestätigen („Öffnen“).",
      s_task_9_step_6: "Auf „Hochladen“ klicken.",
      s_task_9_step_7: "OPTION 2: Eine Datei auf die Webseite ziehen, um sie direkt hochzuladen.",
      s_task_9_step_8: "Mauszeiger auf dem Desktop auf eine Datei bewegen.",
      s_task_9_step_9: "Maus links klicken und gedrückt halten.",
      s_task_9_step_10: "Mauszeiger mit Dokument auf die Webseite ziehen.",
      s_task_9_step_11: "Maustaste loslassen.",

      // s_task_10_title: "Dokument / Ordner innerhalb eines freigegebenen Ordners verschieben",
      // s_task_10_step_1: "In der Klient*innenliste auf die entsprechende Person klicken.",
      // s_task_10_step_2: "Auf den Ordner klicken, in welchem ein Dokument verschoben werden soll.",
      // s_task_10_step_3: "Bei dem zu verschiebenden Dokument / Ordner auf die drei Punkte auf der rechten Seite klicken.",
      // s_task_10_step_4: "In dem sich öffnenden Menü auf „Verschieben“ klicken. Oben wird nun angezeigt, dass man sich im Verschieben-Modus befindet.",
      // s_task_10_step_5: "An den Ort navigieren, an den das Dokument / der Ordner verschoben werden soll.",
      // s_task_10_step_6: "Oben auf „Hierhin verschieben“ klicken. Das Dokument / der Ordner wurde nun an den Ort verschoben, an dem man sich in der Ordnerstruktur befindet.",

      // s_task_11_title: "Freigegebenes Dokument / Ordner löschen",
      // s_task_11_step_1: "",
      // s_task_11_step_2: "",
      // s_task_11_step_3: "",
      // s_task_11_step_4: "",
      // s_task_11_step_5: "",

      // s_task_12_title: "Freigegebenes Dokument / Ordner umbenennen",
      // s_task_12_step_1: "In der Klient*innenliste auf die entsprechende Person klicken.",
      // s_task_12_step_2: "Auf den Ordner klicken, in welchem ein Dokument umbenannt werden soll.",
      // s_task_12_step_3: "Bei dem umzubenennenden Dokument / Ordner auf die drei Punkte auf der rechten Seite klicken.",
      // s_task_12_step_4: "In dem sich öffnenden Menü auf „Umbenennen“ klicken.",
      // s_task_12_step_5: "In das Feld einen neuen Namen eingeben.",
      // s_task_12_step_6: "Auf „Speichern“ klicken.",

      s_task_13_title: "Freigegebenes Dokument herunterladen",
      s_task_13_step_1: "In der Klient*innenliste auf die entsprechende Person klicken.",
      s_task_13_step_2: "Zu dem Dokument navigieren, welches heruntergeladen werden soll.",
      s_task_13_step_3: "Bei herunterzuladenden Dokument auf den Pfeil nach unten mit einer Linie klicken (links neben den drei Punkten).<br>Hinweis: Wenn der Pfeil nicht angezeigt wird, handelt es sich vermutlich um einen Ordner. Ordner können nicht heruntergeladen werden. Nur einzelne Dokumente.",
      s_task_13_step_4: "Der Download beginnt.",

      s_task_14_title: "Freigegebenes Dokument anzeigen",
      s_task_14_step_1: "In der Klient*innenliste auf die entsprechende Person klicken.",
      s_task_14_step_2: "Auf den Ordner klicken, in welchem ein Dokument angesehen werden soll.",
      s_task_14_step_3: "Zu dem anzuzeigenden Dokument navigieren.",
      s_task_14_step_4: "Auf den Dokumentennamen klicken. Die Vorschau wird automatisch geöffnet.",
    }),

    new MLanguage('English').create({
      // Menu
      menu_header: "Instructions",
      start: "Welcome",
      wolo_subgroup: "Client view",
      sozi_subgroup: "Social worker view",

      // Start page
      subheader_start: "The cloud for homeless people",
      subsubheader_start: "How to use it",
      text_start: "Welcome! You have been given access to the Cloud for homeless people,<br>want to sign up or have questions about how to use it?<br><br><b>You have come to the right place!</b><br><br>On the left side of the page you will find instructions on how to use all the features of the Cloud.<br>Your Cloud Team.",

      // Misc
      how_its_done: "How it's done",

      // Wolo tasks
      w_task_1_title: "Login.",
      w_task_1_step_1: "Enter daten-oase.org in the address bar of the browser and press ENTER on the keyboard",
      w_task_1_step_2: "Enter your personal login name.",
      w_task_1_step_3: "Enter your password <br>Note: The eye symbol shows the entry for self-checking purposes.",
      w_task_1_step_4: "Click Log In.",

      w_task_2_title: "Logout.",
      w_task_2_step_1: "Click on 'Logout' at the top right.",

      // w_task_3_title: "Reset password",
      // w_task_3_step_1: "",

      w_task_4_title: "Change password",
      w_task_4_step_1: "Click on „Profile“ at the top right.",
      w_task_4_step_2: "Enter the current password in the corresponding field.",
      w_task_4_step_3: "Enter a new password in the field below.",
      w_task_4_step_4: "Re-enter the new password in the lowest field for confirmation <br>Note: Clicking on the eye will display the entry for self-checking purposes.",
      w_task_4_step_5: "Click on „Change password“.",

      w_task_5_title: "Create folder",
      w_task_5_step_1: "Click on „Create Folder“ in the top right-hand corner.",
      w_task_5_step_2: "Enter a name for the folder in the text field.",
      w_task_5_step_3: "Click on „Create“.",

      w_task_6_title: "Upload document",
      w_task_6_step_1: "OPTION 1: Click on „Upload“ at the top right.",
      w_task_6_step_2: "Click on „Select document(s)“.",
      w_task_6_step_3: "Select one or more document(s) from device and confirm window („Open“).",
      w_task_6_step_4: "Click on „Upload“.",
      w_task_6_step_5: "OPTION 2: Drag a file to the web page to upload it directly.",
      w_task_6_step_6: "Move mouse pointer to a file on the desktop.",
      w_task_6_step_7: "Left click and hold the mouse button.",
      w_task_6_step_8: "Drag the mouse pointer onto the web page.",
      w_task_6_step_9: "Release the mouse button.",

      w_task_7_title: "Share document / folder with facility",
      w_task_7_step_1: "Click on the lock on the right of the document / folder to be shared.",
      w_task_7_step_2: "Click on „Share to institution“.",
      w_task_7_step_3: "Enter name of facility in field and select from list.",
      w_task_7_step_4: "The box can be used to specify whether or not the social worker is allowed to upload and edit documents (If it is a shared folder).",
      w_task_7_step_5: "Click on „Share“.",

      w_task_8_title: "Share document / folder via email",
      w_task_8_step_1: "Click on the lock on the right of the document / folder to be shared.",
      w_task_8_step_2: "Click on „Create sharing email“.",
      w_task_8_step_3: "Enter the email address of the person who is to receive the document / folder in the field.",
      w_task_8_step_4: "Click on „Share“.",

      w_task_9_title: "Share document / folder via link",
      w_task_9_step_1: "Click on the lock on the right of the document / folder to be shared.",
      w_task_9_step_2: "Click on „Create share link“.",
      w_task_9_step_3: "The link has been created and is displayed at the top of the window. It can be copied by clicking on the two sheets next to the link to send it.",

      w_task_10_title: "Change permission of shared document / folder",
      w_task_10_step_1: "Click on the pencil icon next to the share to be changed.",
      w_task_10_step_2: "Either uncheck or check the box next to „Allowed to upload and edit documents“.",
      w_task_10_step_3: "Click on „Close“.",

      w_task_11_title: "Add time limit to shared document / folder",
      w_task_11_step_1: "Click on the lock at the document / folder on the right.",
      w_task_11_step_2: "Click on the clock icon next to the share to be changed.",
      w_task_11_step_3: "In the calendar, select a date on which the share is to be ended.",
      w_task_11_step_4: "Click on „Close“.",
      w_task_11_step_5: "Remove time restriction:<br>Click on the clock symbol next to the share to be changed.",
      w_task_11_step_6: "Click on „Remove date“.",
      w_task_11_step_7: "Click on „Close“.",

      w_task_12_title: "Protect shared document / folder with password",
      w_task_12_step_1: "Click on the lock on the right side of the document / folder.",
      w_task_12_step_2: "Click on the key icon next to the share to be changed.",
      w_task_12_step_3: "Enter a password in the field. It must have at least 10 characters.",
      w_task_12_step_4: "Click on „Save“.",
      w_task_12_step_5: "Remove share password:<br>Click the key icon next to the share you want to change.",
      w_task_12_step_6: "Click on „Remove password“.",

      // w_task_13_title: "Move document",
      // w_task_13_step_1: "Click on the three dots to the left of the lock on the document / folder to be moved.",
      // w_task_13_step_2: "In the menu that opens, click on „Move“.<br>You will now see at the top that you are in move mode.",
      // w_task_13_step_3: "Navigate to the location where the document / folder is to be moved.",
      // w_task_13_step_4: "Click on „Move here“ at the top. The document / folder has now been moved to the place where you are in the folder structure.",

      w_task_14_title: "Delete document / folder",
      w_task_14_step_1: "Click on the three dots to the left of the lock on the document / folder to be deleted.",
      w_task_14_step_2: "Click on „Delete“ in the menu that opens.",
      w_task_14_step_3: "Click on „Delete“ in the confirmation window that opens.",

      // w_task_15_title: "Rename document / folder",
      // w_task_15_step_1: "Click on the three dots to the left of the lock on the document/folder to be renamed.",
      // w_task_15_step_2: "Click on „Rename“ in the menu that opens.",
      // w_task_15_step_3: "Enter a new name in the field.",
      // w_task_15_step_4: "Click on „Save“.",

      w_task_16_title: "Download document",
      w_task_16_step_1: "For a document to be downloaded, click on the down arrow with a line (to the left of the three dots)<br>Note: If the arrow does not appear, it is probably a folder. Folders cannot be downloaded. Only individual documents.",
      w_task_16_step_2: "The download will begin.<br>Note: The default location for most devices is the Downloads folder.",

      w_task_17_title: "Display document",
      w_task_17_step_1: "Navigate to the document to be displayed.",
      w_task_17_step_2: "Click on the document name.<br>The preview will open automatically.",

      // soc tasks
      s_task_4_title: "Change password",
      s_task_4_step_1: "Click on „Profile“ at the top right.",
      s_task_4_step_2: "Enter the current password in the corresponding field.",
      s_task_4_step_3: "Enter a new password in the field below.",
      s_task_4_step_4: "Enter the new password again in the lowest field for confirmation.<br>Note: Clicking on the eye will display the entry for self-checking purposes.",
      s_task_4_step_5: "Click on „Change password“.",

      s_task_5_title: "Create a new client",
      s_task_5_step_1: "Click on „Create new client“ in the top right-hand corner",
      s_task_5_step_2: "Enter a login name for the client and their email address", //<br>Note: The login name should be formatted according to the following scheme:First name.Last name.Year of birth",
      s_task_5_step_3: "(optional) If the client wishes, a password can be assigned directly. To do this, check the box „Set password directly“. Enter the password and enter it again below to confirm.<br>Note: The password must have at least 10 characters.",
      s_task_5_step_4: "Click on „Create account“.",

      s_task_6_title: "Edit a client's account",
      s_task_6_step_1: "Click on the cogwheel on the right hand side of the client you want to edit",
      s_task_6_step_2: "Click on „Edit account“.",
      s_task_6_step_3: "Now the name, email address and/or password can be changed.",
      s_task_6_step_4: "Click on „Save“.",

      s_task_7_title: "Resend welcome email to a client",
      s_task_7_step_1: "Click on the cogwheel for the corresponding client",
      s_task_7_step_2: "Click on „Resend welcome email“.",
      s_task_7_step_3: "The welcome email has been resent.",

      // s_task_8_title: "Create new folder in shared folder ",
      // s_task_8_step_1: "",
      // s_task_8_step_2: "",
      // s_task_8_step_3: "",
      // s_task_8_step_4: "",

      s_task_9_title: "Upload document to shared folder",
      s_task_9_step_1: "Click on the corresponding person in the client list",
      s_task_9_step_2: "Click on the folder to which one or more documents are to be uploaded",
      s_task_9_step_3: "OPTION 1: Click on „Upload“ at the top right.",
      s_task_9_step_4: "Click on „Select document(s)“.",
      s_task_9_step_5: "Select one or more document(s) from device and confirm window („Open“).",
      s_task_9_step_6: "Click on „Upload“.",
      s_task_9_step_7: "OPTION 2: Drag a file to the web page to upload it directly.",
      s_task_9_step_8: "Move mouse pointer to a file on the desktop.",
      s_task_9_step_9: "Left click and hold the mouse button.",
      s_task_9_step_10: "Drag the mouse pointer onto the web page.",
      s_task_9_step_11: "Release the mouse button.",

      s_task_10_title: "Move document / folder within a shared folder",
      s_task_10_step_1: "Click on the corresponding person in the client list",
      s_task_10_step_2: "Click on the folder in which a document is to be moved",
      s_task_10_step_3: "Click on the three dots on the right side of the document / folder to be moved.",
      s_task_10_step_4: "Click on „Move“ in the menu that opens. At the top it is now indicated that you are in move mode.",
      s_task_10_step_5: "Navigate to the location where the document / folder is to be moved.",
      s_task_10_step_6: "Click on „Move here“ at the top. The document / folder has now been moved to the place where you are in the folder structure.",

      // s_task_11_title: "Delete shared document / folder",
      // s_task_11_step_1: "",
      // s_task_11_step_2: "",
      // s_task_11_step_3: "",
      // s_task_11_step_4: "",
      // s_task_11_step_5: "",

      s_task_12_title: "Rename shared document / folder",
      s_task_12_step_1: "Click on the corresponding person in the client list",
      s_task_12_step_2: "Click on the folder in which a document / folder is to be renamed",
      s_task_12_step_3: "Click on the three dots on the right side of the document / folder to be renamed.",
      s_task_12_step_4: "Click on „Rename“ in the menu that opens.",
      s_task_12_step_5: "Enter a new name in the text field.",
      s_task_12_step_6: "Click on „Save“.",

      s_task_13_title: "Download shared document",
      s_task_13_step_1: "Click on the corresponding person in the client list",
      s_task_13_step_2: "Navigate to the document to be downloaded",
      s_task_13_step_3: "For download the document, click on the down arrow with a line (to the left of the three dots).<br>Note: If the arrow does not appear, it is probably a folder. Folders cannot be downloaded. Only individual documents.",
      s_task_13_step_4: "The download is starting.",

      s_task_14_title: "Display shared document",
      s_task_14_step_1: "Click on the relevant person in the client list",
      s_task_14_step_2: "Click on the folder in which a document is to be viewed",
      s_task_14_step_3: "Navigate to the document to be viewed.",
      s_task_14_step_4: "Click on the document name. The preview opens automatically.",
    }),

    new MLanguage('Français').create({
      // Menu
      menu_header : "Instructions",
      start : "Accueil",
      wolo_subgroup : "Vue client",
      sozi_subgroup : "Vue travailleur social",

      // Start page
      subheader_start : "Le cloud pour les personnes sans domicile fixe",
      subsubheader_start : "Comment l'utiliser",
      text_start : "Bienvenue ! Tu as obtenu l'accès au Cloud pour les sans-abri,<br>tu souhaites t'inscrire ou tu as des questions sur la manière de l'utiliser?<br><br><b>Tu es au bon endroit!</b><br>Sur la gauche, tu trouveras des instructions sur la manière d'utiliser toutes les fonctions du Cloud.<br>Ton équipe Cloud",

      // Misc
      how_its_done : "Voici comment faire",

      // Wolo tasks
      w_task_1_title : "Connexion / Login",
      w_task_1_step_1 : "saisir daten-oase.org dans la barre d'adresse du navigateur et appuyer sur ENTER sur le clavier",
      w_task_1_step_2 : "Saisir le nom de connexion enregistré",
      w_task_1_step_3 : "Saisir le mot de passe choisi <br>Remarque : le symbole de l'œil indique la saisie pour l'autocontrôle",
      w_task_1_step_4 : "Cliquez sur Connexion",

      w_task_2_title : "Déconnexion / Logout",
      w_task_2_step_1 : "Cliquez en haut à droite sur 'Déconnexion'",

      // w_task_3_title : "Réinitialiser le mot de passe",
      // w_task_3_step_1 : "",

      w_task_4_title : "Modifier le mot de passe",
      w_task_4_step_1 : "Cliquez en haut à droite sur „Profil“",
      w_task_4_step_2 : "Saisir le mot de passe actuel dans le champ correspondant",
      w_task_4_step_3 : "Saisir un nouveau mot de passe dans le champ en dessous",
      w_task_4_step_4 : "Saisir à nouveau le nouveau mot de passe dans le champ du bas pour le confirmer <br>Remarque : en cliquant sur l'œil, la saisie s'affiche pour l'autocontrôle",
      w_task_4_step_5 : "Cliquer sur „Modifier le mot de passe“",

      w_task_5_title : "Créer un dossier",
      w_task_5_step_1 : "Cliquez sur „Créer un dossier“ en haut à droite",
      w_task_5_step_2 : "Saisir un nom pour le dossier dans le champ",
      w_task_5_step_3 : "Cliquer sur „Créer“",

      w_task_6_title : "Télécharger le document",
      w_task_6_step_1 : "OPTION 1 : Cliquer sur „Télécharger“ en haut à droite",
      w_task_6_step_2 : "Cliquer sur „Sélectionner un ou des documents“",
      w_task_6_step_3 : "Sélectionner un ou plusieurs document(s) de l'appareil et confirmer la fenêtre („Ouvrir“)",
      w_task_6_step_4 : "Cliquer sur „Télécharger“",
      w_task_6_step_5 : "OPTION 2 : Faire glisser un fichier sur la page web pour le télécharger directement",
      w_task_6_step_6 : "Déplacer le curseur de la souris sur un fichier sur le bureau",
      w_task_6_step_7 : "Cliquer sur la souris à gauche et la maintenir enfoncée",
      w_task_6_step_8 : "Déplacer le curseur de la souris avec document sur la page web",
      w_task_6_step_9 : "Relâcher le bouton de la souris",

      w_task_7_title : "Partager un document / dossier avec l'établissement",
      w_task_7_step_1 : "Pour le document / dossier à partager, cliquer sur le cadenas à droite",
      w_task_7_step_2 : "Cliquer sur „Partager avec l'établissement.“",
      w_task_7_step_3 : "Saisir le nom de l'établissement dans le champ et le sélectionner dans la liste",
      w_task_7_step_4 : "La case permet de définir si l'assistant(e) social(e) peut ou non télécharger et modifier des documents (S'il s'agit d'un dossier partagé)",
      w_task_7_step_5 : "Cliquer sur „Partager“",

      w_task_8_title : "Partager un document / dossier par e-mail",
      w_task_8_step_1 : "Pour le document / dossier à partager, cliquer à droite sur le cadenas",
      w_task_8_step_2 : "Cliquer sur „Créer un e-mail de partage“",
      w_task_8_step_3 : "Saisir dans le champ l'adresse e-mail de la personne qui doit recevoir le document/dossier",
      w_task_8_step_4 : "Cliquer sur „Partager“",

      w_task_9_title : "Partager le document / dossier par lien",
      w_task_9_step_1 : "Pour le document / dossier à partager, cliquer à droite sur le cadenas",
      w_task_9_step_2 : "Cliquer sur „Créer un lien de partage“",
      w_task_9_step_3 : "Le lien a été créé et s'affiche en haut de la fenêtre. Peut être copié en cliquant sur les deux feuilles à côté du lien pour l'envoyer",

      w_task_10_title : "Modifier l'autorisation du partage document / dossier",
      w_task_10_step_1 : "Cliquer sur l'icône en forme de crayon à côté du partage à modifier",
      w_task_10_step_2 : "Décocher ou cocher la case à côté de „Autorisé à télécharger et modifier des documents“",
      w_task_10_step_3 : "Cliquer sur „Fermer“",

      w_task_11_title : "Attribuer une limite de temps au partage de document / dossier",
      w_task_11_step_1 : "Pour le document / dossier à droite, cliquer sur le cadenas",
      w_task_11_step_2 : "A côté du partage à modifier, cliquer sur le symbole de l'horloge",
      w_task_11_step_3 : "Sélectionner dans le calendrier une date à laquelle le partage doit être terminé",
      w_task_11_step_4 : "Cliquer sur „Fermer“",
      w_task_11_step_5 : "Annuler la restriction de temps:<br>Cliquer sur l'icône de l'horloge à côté du partage à modifier",
      w_task_11_step_6 : "Cliquer sur „Supprimer la date“",
      w_task_11_step_7 : "Cliquer sur „Fermer“",

      w_task_12_title : "Protéger le document / dossier partagé par un mot de passe",
      w_task_12_step_1 : "Pour le document / dossier, cliquer sur le cadenas à droite",
      w_task_12_step_2 : "A côté du partage à modifier, cliquer sur l'icône de la clé",
      w_task_12_step_3 : "Saisir un mot de passe dans le champ. Il doit comporter au moins 10 caractères",
      w_task_12_step_4 : "Cliquer sur „Enregistrer“",
      w_task_12_step_5 : "Supprimer le mot de passe de partage:<br>Cliquer sur l'icône de la clé à côté du partage à modifier",
      w_task_12_step_6 : "Cliquer sur „Supprimer le mot de passe“",

      w_task_13_title : "Déplacer un document",
      w_task_13_step_1 : "Pour le document / dossier à déplacer, cliquer sur les trois points à gauche du cadenas",
      w_task_13_step_2 : "Dans le menu qui s'ouvre, cliquer sur „Déplacer“.<br>Il est maintenant indiqué en haut que l'on se trouve en mode Déplacer",
      w_task_13_step_3 : "Naviguer vers l'endroit où le document / dossier doit être déplacé",
      w_task_13_step_4 : "Cliquer en haut sur „Déplacer ici“. Le document / le dossier a maintenant été déplacé à l'endroit où l'on se trouve dans l'arborescence des dossiers",

      w_task_14_title : "Supprimer le document / dossier",
      w_task_14_step_1 : "Pour le document / dossier à supprimer, cliquer sur les trois points à gauche du cadenas",
      w_task_14_step_2 : "Dans le menu qui s'ouvre, cliquer sur „Supprimer“",
      w_task_14_step_3 : "Cliquer sur „Supprimer“ dans la fenêtre de confirmation qui s'ouvre",

      w_task_15_title : "Renommer un document / dossier",
      w_task_15_step_1 : "Pour le document / dossier à renommer, cliquer sur les trois points à gauche du cadenas",
      w_task_15_step_2 : "Dans le menu qui s'ouvre, cliquer sur „Renommer“",
      w_task_15_step_3 : "Saisir un nouveau nom dans le champ",
      w_task_15_step_4 : "Cliquer sur „Enregistrer“",

      w_task_16_title : "Télécharger le document",
      w_task_16_step_1 : "Pour le document à télécharger, cliquer sur la flèche vers le bas avec une ligne (à gauche des trois points)<br>Remarque : si la flèche n'apparaît pas, il s'agit probablement d'un dossier. Les dossiers ne peuvent pas être téléchargés. Seulement des documents individuels",
      w_task_16_step_2 : "Le téléchargement commence.<br>Remarque : l'emplacement par défaut est le dossier „Téléchargements“ sur la plupart des appareils",

      w_task_17_title : "Afficher le document",
      w_task_17_step_1 : "Naviguer vers le document à afficher",
      w_task_17_step_2 : "Cliquer sur le nom du document.<br>L'aperçu s'ouvre automatiquement",

      // Tâches sociales
      s_task_4_title : "Modifier le mot de passe",
      s_task_4_step_1 : "Cliquez en haut à droite sur „Profil“",
      s_task_4_step_2 : "Saisir le mot de passe actuel dans le champ correspondant",
      s_task_4_step_3 : "Saisir un nouveau mot de passe dans le champ en dessous",
      s_task_4_step_4 : "Saisir à nouveau le nouveau mot de passe dans le champ du bas pour le confirmer.<br>Note : en cliquant sur l'œil, la saisie s'affiche pour l'autocontrôle",
      s_task_4_step_5 : "Cliquer sur „Modifier le mot de passe“",

      s_task_5_title : "Créer un nouveau client",
      s_task_5_step_1 : "Cliquer en haut à droite sur „Créer un nouveau client“",
      s_task_5_step_2 : "Saisir le nom d'inscription et l'adresse e-mail du client<br>Note : le nom d'inscription doit être formaté selon le schéma suivant:Prénom.Nom.Année de naissance",
      s_task_5_step_3 : " (optionnel) Si le/la client(e) le souhaite, il est possible d'attribuer directement un mot de passe. Pour cela, cocher la case „Définir directement le mot de passe“. Saisir le mot de passe et le retaper en dessous pour confirmation.<br>Remarque : le mot de passe doit comporter au moins 10 caractères",
      s_task_5_step_4 : "Cliquer sur „Créer un compte“",

      s_task_6_title : "Modifier le compte d'un(e) client(e)",
      s_task_6_step_1 : "Cliquer sur la roue dentée du client à modifier",
      s_task_6_step_2 : "Cliquer sur „Modifier le compte“",
      s_task_6_step_3 : "Maintenant, le nom, l'adresse e-mail et/ou le mot de passe peuvent être modifiés",
      s_task_6_step_4 : "Cliquer sur „Enregistrer“",

      s_task_7_title : "Envoyer à nouveau l'e-mail de bienvenue à un client",
      s_task_7_step_1 : "Cliquer sur la roue dentée pour le/la client(e) concerné(e)",
      s_task_7_step_2 : "Cliquer sur „Renvoyer l'e-mail de bienvenue“",
      s_task_7_step_3 : "L'e-mail de bienvenue a été envoyé à nouveau",

      // s_task_8_title : "Créer un nouveau dossier dans le dossier partagé ",
      // s_task_8_step_1 : "",
      // s_task_8_step_2 : "",
      // s_task_8_step_3 : "",
      // s_task_8_step_4 : "",

      s_task_9_title : "Télécharger le document dans le dossier partagé",
      s_task_9_step_1 : "Dans la liste des clients, cliquer sur la personne correspondante",
      s_task_9_step_2 : "Cliquer sur le dossier dans lequel un ou plusieurs documents doivent être téléchargés",
      s_task_9_step_3 : "OPTION 1 : Cliquer sur „Télécharger“ en haut à droite",
      s_task_9_step_4 : "Cliquer sur „Sélectionner le(s) document(s)“",
      s_task_9_step_5 : "Sélectionner un ou plusieurs document(s) de l'appareil et confirmer la fenêtre („Ouvrir“)",
      s_task_9_step_6 : "Cliquer sur „Télécharger“",
      s_task_9_step_7 : "OPTION 2 : Faire glisser un fichier sur la page web pour le télécharger directement",
      s_task_9_step_8 : "Déplacer le curseur de la souris sur un fichier sur le bureau",
      s_task_9_step_9 : "Cliquer sur la souris à gauche et la maintenir enfoncée",
      s_task_9_step_10 : "Déplacer le curseur de la souris avec document sur la page web",
      s_task_9_step_11 : "Relâcher le bouton de la souris",

      // s_task_10_title : "Déplacer un document / dossier dans un dossier partagé",
      // s_task_10_step_1 : "Dans la liste des clients, cliquer sur la personne correspondante",
      // s_task_10_step_2 : "Cliquer sur le dossier dans lequel un document doit être déplacé",
      // s_task_10_step_3 : "Sur le document / dossier à déplacer, cliquer sur les trois points à droite",
      // s_task_10_step_4 : "Dans le menu qui s'ouvre, cliquer sur „Déplacer“. En haut, il est maintenant indiqué que l'on se trouve en mode Déplacer",
      // s_task_10_step_5 : "Naviguer vers l'endroit où le document / le dossier doit être déplacé",
      // s_task_10_step_6 : "Cliquer en haut sur „Déplacer vers ici“. Le document / le dossier a maintenant été déplacé à l'endroit où l'on se trouve dans l'arborescence des dossiers",

      // s_task_11_title : "Supprimer un document / dossier partagé",
      // s_task_11_step_1 : "",
      // s_task_11_step_2 : "",
      // s_task_11_step_3 : "",
      // s_task_11_step_4 : "",
      // s_task_11_step_5 : "",

      // s_task_12_title : "Renommer un document partagé / un dossier",
      // s_task_12_step_1 : "Dans la liste des clients, cliquer sur la personne correspondante",
      // s_task_12_step_2 : "Cliquer sur le dossier dans lequel un document doit être renommé",
      // s_task_12_step_3 : "Sur le document / dossier à renommer, cliquer sur les trois points à droite",
      // s_task_12_step_4 : "Dans le menu qui s'ouvre, cliquer sur „Renommer“",
      // s_task_12_step_5 : "Saisir un nouveau nom dans le champ",
      // s_task_12_step_6 : "Cliquer sur „Enregistrer“",

      s_task_13_title : "Télécharger le document partagé",
      s_task_13_step_1 : "Dans la liste des clients, cliquer sur la personne correspondante",
      s_task_13_step_2 : "Naviguer vers le document qui doit être téléchargé",
      s_task_13_step_3 : "Pour le document à télécharger, cliquer sur la flèche vers le bas avec une ligne (à gauche des trois points).<br>Remarque : si la flèche n'apparaît pas, il s'agit probablement d'un dossier. Les dossiers ne peuvent pas être téléchargés. Seulement des documents individuels",
      s_task_13_step_4 : "Le téléchargement commence",

      s_task_14_title : "Afficher le document partagé",
      s_task_14_step_1 : "Dans la liste des clients, cliquer sur la personne correspondante",
      s_task_14_step_2 : "Cliquer sur le dossier dans lequel un document doit être consulté",
      s_task_14_step_3 : "Naviguer vers le document à afficher",
      s_task_14_step_4 : "Cliquer sur le nom du document. L'aperçu s'ouvre automatiquement",
    }),

    new MLanguage('Türkçe').create({
      // Menü
      menu_header: "Talimatlar",
      start: "Hoşgeldiniz",
      wolo_subgroup: "Müşteri görünümü",
      sozi_subgroup: "Sosyal çalışanı görüntüle",

      // Başlangıç sayfası
      subheader_start: "Evsiz insanlar için bulut",
      subsubheader_start: "Nasıl kullanılır",
      text_start: "Hoş geldiniz! Evsizler için Bulut'a erişiminiz var,<br>kayıt olmak mı istiyorsunuz yoksa nasıl kullanacağınız hakkında sorularınız mı var?<br><br><b>Doğru yere geldiniz!</b><br><br>Sayfanın sol tarafında Bulut'un tüm özelliklerini nasıl kullanacağınıza dair talimatlar bulacaksınız.<br>Bulut Ekibiniz.",

      // Misc
      how_its_done: "Bu iş böyle yapılır.",

      // Wolo görevleri
      w_task_1_title: "Kayıt / Giriş.",
      w_task_1_step_1: "tarayıcının adres çubuğuna daten-oase.org yazın ve klavyede ENTER tuşuna basın",
      w_task_1_step_2: "Saklanan oturum açma adını girin.",
      w_task_1_step_3: "Seçilen şifreyi girin<br>Not: Göz sembolü otomatik kontrol için girişi gösterir.",
      w_task_1_step_4: "Oturum Aç'a tıklayın.",

      w_task_2_title: "Oturumu Kapat / Oturumu Kapat.",
      w_task_2_step_1: "Sağ üstteki 'Oturumu Kapat'a tıklayın.",

      // w_task_3_title: "Parolayı Sıfırla."
      // w_task_3_step_1: "",

      w_task_4_title: "Şifreyi değiştir",
      w_task_4_step_1: "Sağ üst köşedeki „Profil “e tıklayın.",
      w_task_4_step_2: "Geçerli şifreyi ilgili alana girin.",
      w_task_4_step_3: "Aşağıdaki alana yeni bir şifre girin.",
      w_task_4_step_4: "Onay için en alttaki alana yeni şifreyi tekrar girin <br>Not: Göze tıklamak, kendi kendini kontrol etme amacıyla girişi görüntüleyecektir.",
      w_task_4_step_5: "Şifreyi değiştir seçeneğine tıklayın.",

      w_task_5_title: "Klasör oluştur",
      w_task_5_step_1: "Sağ üst köşedeki „Klasör Oluştur “a tıklayın.",
      w_task_5_step_2: "Alana klasör için bir ad girin.",
      w_task_5_step_3: "Oluştur üzerine tıklayın.",

      w_task_6_title: "Belge yükle",
      w_task_6_step_1: "SEÇENEK 1: Sağ üstteki „Yükle“ seçeneğine tıklayın.",
      w_task_6_step_2: "„Belge(ler) seç “e tıklayın.",
      w_task_6_step_3: "Cihazdan bir veya daha fazla belge(ler) seçin ve pencereyi onaylayın („Aç“).",
      w_task_6_step_4: "Yükle seçeneğine tıklayın.",
      w_task_6_step_5: "SEÇENEK 2: Doğrudan yüklemek için bir dosyayı web sayfasına sürükleyin.",
      w_task_6_step_6: "Fare işaretçisini masaüstündeki bir dosyaya taşı.",
      w_task_6_step_7: "Fareye sol tıklayın ve basılı tutun.",
      w_task_6_step_8: "Fare işaretçisini belge ile web sayfasına sürükleyin.",
      w_task_6_step_9: "Fare düğmesini bırakın.",

      w_task_7_title: "Belgeyi / klasörü tesise bırak",
      w_task_7_step_1: "Serbest bırakılacak belgenin/klasörün sağındaki kilide tıklayın.",
      w_task_7_step_2: "Kuruma bırak seçeneğine tıklayın.",
      w_task_7_step_3: "Tesisin adını alana girin ve listeden seçin.",
      w_task_7_step_4: "Kutu, sosyal çalışmacının belgeleri yüklemesine ve düzenlemesine izin verilip verilmediğini belirtmek için kullanılabilir (Paylaşılan bir klasör ise).",
      w_task_7_step_5: "Paylaş üzerine tıklayın.",

      w_task_8_title: "Belgeyi / klasörü e-posta ile paylaş",
      w_task_8_step_1: "Paylaşılacak belgenin/klasörün sağındaki kilide tıklayın.",
      w_task_8_step_2: "„Serbest bırakma e-postası oluştur“ seçeneğine tıklayın.",
      w_task_8_step_3: "Belgeyi / klasörü alacak kişinin e-posta adresini alana girin.",
      w_task_8_step_4: "Paylaş üzerine tıklayın.",

      w_task_9_title: "Belgeyi / klasörü bağlantı yoluyla paylaş",
      w_task_9_step_1: "Paylaşılacak belgenin/klasörün sağındaki kilide tıklayın.",
      w_task_9_step_2: "Paylaşım bağlantısı oluştur seçeneğine tıklayın.",
      w_task_9_step_3: "Bağlantı oluşturuldu ve pencerenin üst kısmında görüntüleniyor. Göndermek için bağlantının yanındaki iki sayfaya tıklayarak kopyalanabilir.",

      w_task_10_title: "Belge / klasör paylaşma iznini değiştir",
      w_task_10_step_1: "Değiştirilecek paylaşımın yanındaki kalem simgesine tıklayın.",
      w_task_10_step_2: "Belgeleri yükleme ve düzenleme izni var„ seçeneğinin yanındaki kutunun işaretini kaldırın ya da işaretleyin.“,",
      w_task_10_step_3: "Kapat üzerine tıklayın.",

      w_task_11_title: "Belge/klasör paylaşımına zaman sınırı ekle",
      w_task_11_step_1: "Sağdaki belge / klasördeki kilide tıklayın.",
      w_task_11_step_2: "Değiştirilecek paylaşımın yanındaki saat simgesine tıklayın.",
      w_task_11_step_3: "Takvimde, paylaşımın sonlandırılacağı bir tarih seçin.",
      w_task_11_step_4: "Kapat üzerine tıklayın.",
      w_task_11_step_5: "Zaman kısıtlamasını kaldır:<br>Değiştirilecek paylaşımın yanındaki saat sembolüne tıklayın.",
      w_task_11_step_6: "Tarihi kaldır seçeneğine tıklayın.",
      w_task_11_step_7: "Kapat'a tıklayın.",

      w_task_12_title: "Paylaşım belgesini / klasörünü parola ile koru",
      w_task_12_step_1: "Sağdaki belge / klasördeki kilide tıklayın.",
      w_task_12_step_2: "Değiştirilecek paylaşımın yanındaki anahtar simgesine tıklayın.",
      w_task_12_step_3: "Alana bir parola girin. En az 10 karakterden oluşmalıdır.",
      w_task_12_step_4: "Kaydet üzerine tıklayın.",
      w_task_12_step_5: "Paylaşım parolasını kaldır:<br>Değiştirmek istediğiniz paylaşımın yanındaki anahtar simgesine tıklayın.",
      w_task_12_step_6: "Parolayı kaldır seçeneğine tıklayın.",

      w_task_13_title: "Belgeyi taşı",
      w_task_13_step_1: "Taşınacak belge/klasör üzerindeki kilidin solundaki üç noktaya tıklayın.",
      w_task_13_step_2: "Açılan menüde „Taşı “ya tıklayın.<br>Şimdi en üstte taşıma modunda olduğunuzu göreceksiniz.",
      w_task_13_step_3: "Belgenin/klasörün taşınacağı konuma gidin.",
      w_task_13_step_4: "En üstteki „Buraya taşı“ seçeneğine tıklayın. Belge/klasör artık klasör yapısında bulunduğunuz yere taşınmıştır.",

      w_task_14_title: "Belgeyi / klasörü sil",
      w_task_14_step_1: "Silinecek belge/klasör üzerindeki kilidin solundaki üç noktaya tıklayın.",
      w_task_14_step_2: "Açılan menüde „Sil“ seçeneğine tıklayın.",
      w_task_14_step_3: "Açılan onay penceresinde „Sil“ üzerine tıklayın.",

      w_task_15_title: "Belgeyi / klasörü yeniden adlandır",
      w_task_15_step_1: "Yeniden adlandırılacak belge/klasör üzerindeki kilidin solundaki üç noktaya tıklayın.",
      w_task_15_step_2: "Açılan menüde „Yeniden Adlandır “a tıklayın.",
      w_task_15_step_3: "Alana yeni bir isim girin.",
      w_task_15_step_4: "Kaydet üzerine tıklayın.",

      w_task_16_title: "Belge indir",
      w_task_16_step_1: "İndirilecek belge için, bir çizgi ile aşağı oka tıklayın (üç noktanın solunda)<br>Not: Ok görünmezse, muhtemelen bir klasördür. Klasörler indirilemez. Sadece bireysel belgeler.",
      w_task_16_step_2: "İndirme işlemi başlayacaktır.<br>Not: Çoğu cihaz için varsayılan konum İndirilenler klasörüdür.",

      w_task_17_title: "Belgeyi görüntüle",
      w_task_17_step_1: "Görüntülenecek belgeye gidin.",
      w_task_17_step_2: "Belge adına tıklayın.<br>Önizleme otomatik olarak açılacaktır.",

      // toplumsal görevler
      s_task_4_title: "Şifreyi değiştir",
      s_task_4_step_1: "Sağ üstteki „Profil “e tıklayın.",
      s_task_4_step_2: "Geçerli şifreyi ilgili alana girin.",
      s_task_4_step_3: "Aşağıdaki alana yeni bir şifre girin.",
      s_task_4_step_4: "Onay için en alttaki alana yeni şifreyi tekrar girin.<br>Not: Göze tıklamak, kendi kendini kontrol etmek için girişi görüntüleyecektir",
      s_task_4_step_5: "Şifreyi değiştir seçeneğine tıklayın.",

      s_task_5_title: "Yeni bir müşteri oluşturun",
      s_task_5_step_1: "Sağ üst köşedeki „Yeni müşteri oluştur“ seçeneğine tıklayın",
      s_task_5_step_2: "Müşterinin oturum açma adını ve e-posta adresini girin<br>Not: Oturum açma adı aşağıdaki şemaya göre biçimlendirilmelidir: Adı.Soyadı.Doğum yılı",
      s_task_5_step_3: "(isteğe bağlı) Müşteri isterse, doğrudan bir parola atanabilir. Bunu yapmak için „Doğrudan şifre belirle“ kutusunu işaretleyin. Şifreyi girin ve onaylamak için aşağıya tekrar girin.<br>Not: Şifre en az 10 karakterden oluşmalıdır.",
      s_task_5_step_4: "Hesap oluştur seçeneğine tıklayın.",

      s_task_6_title: "Bir müşterinin hesabını düzenleyin",
      s_task_6_step_1: "Düzenlemek istediğiniz müşterinin dişli çarkına tıklayın",
      s_task_6_step_2: "Hesabı düzenle seçeneğine tıklayın.",
      s_task_6_step_3: "Artık ad, e-posta adresi ve/veya şifre değiştirilebilir.",
      s_task_6_step_4: "Kaydet üzerine tıklayın.",

      s_task_7_title: "Bir müşteriye tekrar hoş geldiniz e-postası gönder",
      s_task_7_step_1: "İlgili istemci için dişli çark üzerine tıklayın",
      s_task_7_step_2: "Hoş geldiniz e-postasını yeniden gönder seçeneğine tıklayın.",
      s_task_7_step_3: "Hoş geldiniz e-postası yeniden gönderildi.",

      // s_task_8_title: "Paylaşılan klasörde yeni klasör oluştur ",
      // s_task_8_step_1: "",
      // s_task_8_step_2: "",
      // s_task_8_step_3: "",
      // s_task_8_step_4: "",

      s_task_9_title: "Belgeyi paylaşılan klasöre yükle",
      s_task_9_step_1: "Müşteri listesinde ilgili kişiye tıklayın",
      s_task_9_step_2: "Bir veya daha fazla belgenin yükleneceği klasöre tıklayın",
      s_task_9_step_3: "SEÇENEK 1: Sağ üst köşedeki „Yükle“ seçeneğine tıklayın.",
      s_task_9_step_4: "„Belge(ler) seç “e tıklayın.",
      s_task_9_step_5: "Cihazdan bir veya daha fazla belge(ler) seçin ve pencereyi onaylayın („Aç“).",
      s_task_9_step_6: "Yükle seçeneğine tıklayın.",
      s_task_9_step_7: "SEÇENEK 2: Doğrudan yüklemek için bir dosyayı web sayfasına sürükleyin.",
      s_task_9_step_8: "Fare işaretçisini masaüstündeki bir dosyaya taşı.",
      s_task_9_step_9: "Fareye sol tıklayın ve basılı tutun.",
      s_task_9_step_10: "Fare işaretçisini belge ile web sayfasına sürükleyin.",
      s_task_9_step_11: "Fare düğmesini bırakın.",

      // s_task_10_title: "Belgeyi / klasörü paylaşılan bir klasör içinde taşı",
      // s_task_10_step_1: "Müşteri listesinde ilgili kişiye tıklayın,
      // s_task_10_step_2: "Bir belgenin taşınacağı klasöre tıklayın,
      // s_task_10_step_3: "Taşınacak belge/klasörün sağ tarafındaki üç noktaya tıklayın.",
      // s_task_10_step_4: "Açılan menüde „Taşı“ seçeneğine tıklayın. En üstte artık hareket modunda olduğunuzu göreceksiniz."
      // s_task_10_step_5: "Belgenin / klasörün taşınacağı konuma gidin.",
      // s_task_10_step_6: "En üstteki „Buraya taşı“ seçeneğine tıklayın. Belge/klasör artık klasör yapısında bulunduğunuz yere taşınmıştır."

      // s_task_11_title: "Paylaşılan belgeyi / klasörü sil",
      // s_task_11_step_1: "",
      // s_task_11_step_2: "",
      // s_task_11_step_3: "",
      // s_task_11_step_4: "",
      // s_task_11_step_5: "",

      // s_task_12_title: "Paylaşılan belgeyi / klasörü yeniden adlandır",
      // s_task_12_step_1: "Müşteri listesinde ilgili kişiye tıklayın.",
      // s_task_12_step_2: "Bir belgenin yeniden adlandırılacağı klasöre tıklayın,
      // s_task_12_step_3: "Yeniden adlandırılacak belgenin/klasörün sağ tarafındaki üç noktaya tıklayın.",
      // s_task_12_step_4: "Açılan menüde „Yeniden Adlandır “a tıklayın."
      // s_task_12_step_5: "Alana yeni bir isim girin.",
      // s_task_12_step_6: "Kaydet'e tıklayın.",

      s_task_13_title: "Paylaşılan belgeyi indir",
      s_task_13_step_1: "Müşteri listesinde ilgili kişiye tıklayın",
      s_task_13_step_2: "İndirilecek belgeye gidin",
      s_task_13_step_3: "İndirilecek belge için, bir çizgi ile aşağı oka tıklayın (üç noktanın solunda).<br>Not: Ok görünmezse, muhtemelen bir klasördür. Klasörler indirilemez. Sadece bireysel belgeler.",
      s_task_13_step_4: "İndirme işlemi başlıyor.",

      s_task_14_title: "Yayımlanan belgeyi görüntüle",
      s_task_14_step_1: "Müşteri listesinde ilgili kişiye tıklayın",
      s_task_14_step_2: "Bir belgenin görüntüleneceği klasöre tıklayın",
      s_task_14_step_3: "Görüntülenecek belgeye gidin.",
      s_task_14_step_4: "Belge adına tıklayın. Önizleme otomatik olarak açılır.",
    }),
  ]
})