const glossaryData = {
  "ac": {
    "term": "AC",
    "definition": "Acronimo di \"Actual Cost\", trattasi di una metrica che rappresenta il costo in euro sostenuto fino al momento corrente per svolgere le ore produttive rendicontate."
  },
  "agile": {
    "term": "Agile",
    "definition": "Insieme di principi e metodologie per la gestione e lo sviluppo di progetti, focalizzato sull'adattabilità e la collaborazione. Basato sul Manifesto Agile, enfatizza la flessibilità nei processi, il coinvolgimento continuo degli stakeholder e la capacità di rispondere rapidamente ai cambiamenti, garantendo prodotti di alta qualità e una soddisfazione costante del cliente."
  },
  "analisi-dei-requisiti": {
    "term": "Analisi dei Requisiti",
    "definition": "Processo fondamentale nello sviluppo di un prodotto software, durante il quale vengono identificati e definiti in dettaglio i requisiti che il sistema deve soddisfare. Sebbene non definisca soluzioni tecniche specifiche, tiene conto della fattibilità tecnologica per garantire che i requisiti siano realizzabili. Questo processo è essenziale per ridurre errori nelle fasi successive e per assicurare che il prodotto finale soddisfi le aspettative del proponente."
  },
  "api": {
    "term": "API",
    "definition": "Acronimo di \"Application Programming Interface\", è un insieme di regole e protocolli che consente a diversi software di comunicare e interagire tra loro. Agisce come un ponte, definendo metodi e strutture dati standardizzati per lo scambio di informazioni e funzionalità. Le API permettono alle applicazioni di collaborare in modo efficiente, facilitando l'integrazione e la connessione tra sistemi diversi."
  },
  "api-key": {
    "term": "API Key",
    "definition": "Chiave di autenticazione utilizzata per accedere ai servizi API di Groq, che forniscono elaborazione ad alte prestazioni per modelli di intelligenza artificiale. Questa chiave è necessaria per autenticare le richieste e garantire un accesso sicuro alle risorse e alle funzionalità offerte dalla piattaforma Groq."
  },
  "architettura-esagonale": {
    "term": "Architettura Esagonale",
    "definition": "Pattern architetturale che separa la logica di business dai dettagli di implementazione, utilizzando porte (ports) e adattatori (adapters) per interfacciarsi con sistemi esterni. Garantisce manutenibilità, testabilità e indipendenza tecnologica."
  },
  "attore": {
    "term": "Attore",
    "definition": "Entità esterna al sistema che interagisce con esso per raggiungere uno scopo specifico. Gli attori possono essere principali (comunicano attivamente con il sistema) o secondari (invocati dal sistema per fornire supporto o servizi)."
  },
  "bac": {
    "term": "BAC",
    "definition": "\"Budget At Completion\", è il budget complessivo preventivato all'inizio di un progetto, che rappresenta il costo totale stimato per completare tutte le attività e consegnare il prodotto finale."
  },
  "baseline": {
    "term": "Baseline",
    "definition": "Versione approvata di un prodotto di lavoro che può essere modificato solo attraverso delle procedure formali. Una baseline funge da punto di riferimento per monitorare e confrontare i progressi o le modifiche del progetto nel tempo."
  },
  "best-practices": {
    "term": "Best Practices",
    "definition": "Insieme di metodi o procedure considerate le più efficaci e affidabili per raggiungere determinati obiettivi in un determinato contesto."
  },
  "branch": {
    "term": "Branch",
    "definition": "Linea parallela di sviluppo in un sistema di versionamento, che permette di lavorare a modifiche o nuove funzionalità senza alterare il codice principale di un sistema software. I branch consentono a più sviluppatori di lavorare in modo indipendente e permettono una agevole separazione delle attività."
  },
  "broker": {
    "term": "Broker",
    "definition": "Componente software che funge da intermediario tra sistemi, servizi o altri componenti, facilitando la comunicazione e l’integrazione tra di essi. A seconda del contesto, un broker può gestire il routing dei messaggi, la trasformazione dei dati o la mediazione tra produttori e consumatori di messaggi."
  },
  "bug": {
    "term": "Bug",
    "definition": "Un errore o malfunzionamento nel codice del software che provoca un comportamento inatteso, indesiderato o errato. I bug possono derivare da errori di programmazione, progettazione o implementazione."
  },
  "build": {
    "term": "Build",
    "definition": "Il processo che compone ogni sottoprodotto (eseguibili, documenti, ecc.) a partire da un insieme di parti, come il codice sorgente e le risorse necessarie. Durante questo processo, il codice viene compilato e assemblato per generare una versione eseguibile o distribuita del prodotto, che può essere testata o distribuita. La build include anche la gestione delle dipendenze e, in alcuni casi, l’esecuzione di test automatici per garantire la correttezza e il funzionamento del software."
  },
  "capitolato": {
    "term": "Capitolato",
    "definition": "Documento che definisce le specifiche, i requisiti e le condizioni di un progetto o di un appalto. Fornisce una base solida per la pianificazione e l’esecuzione di un progetto, garantendo che tutte le parti coinvolte comprendano chiaramente le aspettative e i bisogni a cui il progetto deve rispondere, offrendo così una guida chiara per la realizzazione della soluzione."
  },
  "caso-d'uso": {
    "term": "Caso d'Uso",
    "definition": "Rappresenta un'interazione tra il sistema e gli attori, descrivendo le modalità con cui il sistema viene utilizzato e le funzionalità che offre. Si articola in una serie di scenari o sequenze di azioni che condividono un obiettivo finale, permettendo agli utenti di raggiungere uno scopo specifico attraverso l'interazione con il sistema."
  },
  "clickhouse": {
    "term": "ClickHouse",
    "definition": "DBMS open-source progettato per lélaborazione rapida e scalabile di grandi quantità di dati. Utilizza un'architettura column-oriented, ottimizzata per query analitiche ad alta velocità e compressione efficiente dei dati. Questo lo rende ideale per applicazioni che richiedono analisi in tempo reale su grandi dataset."
  },
  "committente": {
    "term": "Committente",
    "definition": "Parte esterna che assegna lésecuzione di un progetto ad un esecutore, definendo i termini contrattuali e le condizioni relative alla sua realizzazione. Nel nostro caso, il prof. Vardanega e il prof. Cardin."
  },
  "container": {
    "term": "Container",
    "definition": "Unità di software che include un'applicazione e tutte le sue dipendenze, come file di sistema, librerie e configurazioni, per eseguirla in un ambiente isolato e autonomo. Nel contesto di strumenti come Docker, i container garantiscono portabilità e consistenza, permettendo all'applicazione di funzionare in modo uniforme su diversi sistemi e piattaforme."
  },
  "continuous-integration": {
    "term": "Continuous Integration",
    "definition": "Abbreviata come CI, è una pratica di sviluppo software che prevede l'integrazione frequente e automatica delle modifiche al codice sorgente in un repository condiviso. Ogni modifica viene validata attraverso test automatici per garantire la stabilità e l'integrità del software. La CI consente di identificare e risolvere rapidamente conflitti o errori di integrazione, riducendo il rischio di difetti nel prodotto finale."
  },
  "cpi": {
    "term": "CPI",
    "definition": "Acronimo di \"Cost Performance Index\", è una metrica che misura léfficienza del progetto, confrontando il valore guadagnato (EV) con il costo effettivo (AC) sostenuto fino al momento corrente. Il CPI inferiore a 1 indica che il progetto sta superando il budget, mentre un CPI superiore a 1 indica che il progetto sta rispettando il budget."
  },
  "cruscotto": {
    "term": "Cruscotto",
    "definition": "Traduzione italiana del termine inglese \"Dashboard\"."
  },
  "cv": {
    "term": "CV",
    "definition": "Acronimo di \"Cost Variance\", è una metrica che rappresenta la differenza in euro tra il valore guadagnato (EV) e il costo effettivo (AC) sostenuto fino al momento corrente."
  },
  "dashboard": {
    "term": "Dashboard",
    "definition": "Interfaccia utente grafica che raccoglie e presenta in modo chiaro e sintetico le informazioni più rilevanti per un utente o un processo specifico. La Dashboard fornisce una panoramica rapida delle metriche e delle prestazioni, utilizzando vari elementi visivi come grafici, tabelle e indicatori."
  },
  "database": {
    "term": "Database",
    "definition": "Sistema organizzato per raccogliere e gestire dati strutturati, con l'obiettivo di consentire un accesso ed unélaborazione efficienti. Grazie alla sua struttura, un database facilita la gestione di grandi quantità di informazioni, rendendole facilmente recuperabili e utilizzabili per vari scopi dagli utenti."
  },
  "dbms": {
    "term": "DBMS",
    "definition": "Acronimo di \"DataBase Management System\", è un software progettato per creare e gestire i database. Fornisce un'interfaccia per gli utenti, consentendo di eseguire operazioni come l'inserimento, la modifica, la cancellazione e l'interrogazione dei dati in modo efficiente e sicuro."
  },
  "design-pattern": {
    "term": "Design Pattern",
    "definition": "Soluzione generale e riutilizzabile a problemi comuni di progettazione software. I design pattern vengono impiegati per strutturare in modo modulare ed efficiente i componenti del sistema, garantendo manutenibilità e scalabilità del codice."
  },
  "discord": {
    "term": "Discord",
    "definition": "Piattaforma di comunicazione utilizzata per le riunioni interne del team. Fornisce strumenti per chat testuali, chiamate vocali e video, facilitando la collaborazione e la condivisione di informazioni tra i membri del progetto."
  },
  "docker": {
    "term": "Docker",
    "definition": "Piattaforma che consente di creare, distribuire ed eseguire applicazioni all'interno di container, ovvero ambienti isolati contenenti tutto il necessario per far funzionare una applicazione. I container garantiscono che l'applicazione funzioni in modo coerente su diversi sistemi, migliorando portabilità e gestione."
  },
  "docker-compose": {
    "term": "Docker Compose",
    "definition": "Strumento che consente di definire e gestire applicazioni multi-container Docker. Permette di configurare un'applicazione complessa con più servizi e le relative dipendenze in un unico file."
  },
  "documentazione": {
    "term": "Documentazione",
    "definition": "Insieme di documenti, manuali e guide che descrivono un prodotto, un sistema o un processo. Ha lo scopo di fornire istruzioni, spiegazioni e dettagli utili per l'uso, la manutenzione e lo sviluppo di un prodotto."
  },
  "eac": {
    "term": "EAC",
    "definition": "Acronimo di \"Estimated at Completion\", è un termine utilizzato nella gestione dei progetti per stimare il costo totale che sarà necessario per il completamento. Viene calcolato durante il corso del progetto per fornire una previsione aggiornata dei costi, tenendo conto delle performance reali rispetto a quanto pianificato inizialmente. Questo valore aiuta il team a monitorare il progresso del progetto e a prendere decisioni ponderate riguardo alla gestione del budget e alle risorse necessarie."
  },
  "efficacia": {
    "term": "Efficacia",
    "definition": "Misura la capacità di raggiungere un obiettivo o un risultato desiderato, indipendentemente dalle risorse utilizzate."
  },
  "efficienza": {
    "term": "Efficienza",
    "definition": "Misura dell'abilità di raggiungere un obiettivo o un risultato desiderato, impiegando le risorse minime indispensabili."
  },
  "etc": {
    "term": "ETC",
    "definition": "Acronimo di \"Estimate to Complete\", è una stima dei costi aggiuntivi necessari per completare un progetto, tenendo conto del budget rimanente e delle risorse necessarie per terminare il lavoro. LÈTC viene utilizzato per determinare l'ammontare di fondi ancora da allocare per completare il progetto entro i termini previsti, basandosi sui progressi fatti fino a quel momento."
  },
  "ev": {
    "term": "EV",
    "definition": "Acronimo di \"Earned Value\", è una metrica che rappresenta il valore in euro delle attività realizzate alla data corrente, ovvero il valore dei deliverable rilasciati fino al momento della misurazione in seguito alle attività svolte."
  },
  "event-driven": {
    "term": "Event-Driven",
    "definition": "Paradigma architetturale in cui il flusso di esecuzione di un sistema è determinato da eventi, come input utente, messaggi da altri servizi o variazioni di stato. Questo approccio consente alta reattività e scalabilità, ed è utilizzato in sistemi distribuiti, microservizi e piattaforme di stream processing."
  },
  "faker": {
    "term": "Faker",
    "definition": "Libreria Python progettata per generare dati falsi in modo casuale, come ad esempio nomi, indirizzi, numeri di telefono e altre informazioni. Viene utilizzata per creare set di dati che simulano la struttura e la variabilità dei dati reali, evitando l'uso di informazioni sensibili durante lo sviluppo e il testing del software."
  },
  "feedback": {
    "term": "Feedback",
    "definition": "Riscontro, positivo o negativo, dato per influenzare il comportamento futuro."
  },
  "flink": {
    "term": "Flink",
    "definition": "Apache Flink è un framework open-source per lélaborazione di stream di dati in tempo reale. Nel nostro progetto, Flink processa i dati di posizionamento trasformandoli in messaggi pubblicitari personalizzati e filtrandoli per evitare ripetizioni."
  },
  "framework": {
    "term": "Framework",
    "definition": "Architettura logica di supporto sulla quale un software può essere progettato e realizzato."
  },
  "git": {
    "term": "Git",
    "definition": "Sistema di controllo versione distribuito (DVCS) progettato per tracciare le modifiche nel codice sorgente durante lo sviluppo del software. È uno strumento essenziale per la gestione delle versioni, che consente ai team di sviluppo di lavorare in modo collaborativo, monitorare le revisioni del codice e gestire le modifiche apportate nel tempo. Git facilita anche il ripristino a versioni precedenti del software, garantendo un controllo preciso delle modifiche."
  },
  "github": {
    "term": "GitHub",
    "definition": "Piattaforma di hosting per il controllo delle versioni basata su Git, utilizzata principalmente per gestire repository di codice sorgente. Tra le sue funzionalità principali ci sono il controllo delle versioni, strumenti di tracciamento per modifiche e problemi (issues) e la gestione dei progetti tramite funzionalità come le bacheche (project boards), facilitando così l'organizzazione e la collaborazione all'interno dei team di sviluppo."
  },
  "github-actions": {
    "term": "GitHub Actions",
    "definition": "Servizio di automazione fornito da GitHub che permette di gestire e automatizzare flussi di lavoro all’interno di un repository. Consente agli sviluppatori di creare, personalizzare e condividere workflow che si attivano in risposta a eventi specifici, come il push di codice o l’apertura di una pull request."
  },
  "google-meet": {
    "term": "Google Meet",
    "definition": "Piattaforma di videoconferenza utilizzata per le riunioni esterne del gruppo con la proponente. Consente comunicazioni audio e video, condivisione dello schermo e collaborazione in tempo reale, facilitando l’interazione con gli stakeholder."
  },
  "grafana": {
    "term": "Grafana",
    "definition": "Piattaforma open-source per la visualizzazione e il monitoraggio dei dati. Permette di creare dashboard interattive e personalizzabili, report e grafici utilizzando dati provenienti da diverse fonti."
  },
  "groq": {
    "term": "Groq",
    "definition": "Azienda nota per la progettazione di unità di elaborazione ad alte prestazioni, ottimizzate per eseguire modelli di deep learning con bassa latenza e alta efficienza. Le sue soluzioni sono utilizzate per applicazioni che richiedono elaborazione in tempo reale, come l'AI generativa e l'analisi di dati su larga scala."
  },
  "ia": {
    "term": "IA",
    "definition": "Acronimo italiano di \"Intelligenza artificiale\", è l'abilità di una macchina di mostrare capacità umane quali il ragionamento, l'apprendimento, la pianificazione e la creatività."
  },
  "ide": {
    "term": "IDE",
    "definition": "Acronimo di \"Integrated Development Environment\", è un ambiente software completo, progettato per agevolare lo sviluppo, la compilazione, il debug e la gestione del codice di programmazione. Esso include una serie di strumenti integrati come un editor di testo, un compilatore, un debugger, un gestore di versioni e altre utilità, offrendo un’interfaccia unificata per gli sviluppatori."
  },
  "ieee": {
    "term": "IEEE",
    "definition": "Acronimo di \"Institute of Electrical and Electronics Engineers\", è un'organizzazione internazionale dedicata all'avanzamento della tecnologia in diversi ambiti, fra cui l'informatica. L'IEEE è noto per la pubblicazione di standard tecnici che definiscono specifiche e linee guida per garantire interoperabilità, qualità, sicurezza e prestazioni nei dispositivi e nei sistemi."
  },
  "inspection": {
    "term": "Inspection",
    "definition": "Tecnica di analisi statica utilizzata per individuare errori attraverso una lettura mirata. Durante l'inspection, il verificatore segue una sequenza di passaggi prestabiliti per assicurare la conformità agli standard e la qualità del prodotto."
  },
  "issue": {
    "term": "Issue",
    "definition": "Strumento di tracciamento utilizzato per segnalare e gestire problemi, bug, richieste di funzionalità o altre attività relative a un progetto. Le issue permettono di descrivere, assegnare e discutere vari aspetti di un progetto, come ad esempio errori o nuove funzionalità, con l'aiuto di strumenti come i commenti, le etichette e le milestone."
  },
  "its": {
    "term": "ITS",
    "definition": "Acronimo di \"Issue Tracking System\", sono dei software utilizzati per gestire e tenere traccia di problemi, bug, richieste di funzionalità e altre attività correlate nel ciclo di sviluppo del software. Questi sistemi forniscono un'infrastruttura organizzativa che supporta la gestione delle problematiche, permettendo a sviluppatori, team di supporto e stakeholder di documentare e risolvere le questioni che emergono durante lo sviluppo del progetto."
  },
  "json": {
    "term": "JSON",
    "definition": "JSON è un formato leggero per lo scambio di dati, strutturato come coppie chiave-valore. Nel nostro progetto, JSON viene utilizzato per formattare e serializzare i messaggi scambiati tra i diversi componenti del sistema, facilitando la comunicazione tra Kafka, Flink e le altre applicazioni."
  },
  "kafka": {
    "term": "Kafka",
    "definition": "Piattaforma distribuita open-source, progettata per la gestione di flussi di dati in tempo reale. Utilizza un'architettura basata su messaggi pubblicati e sottoscritti (pub-sub), consentendo la raccolta e lélaborazione di grandi quantità di dati. È comunemente usata per applicazioni di streaming, analisi di eventi e integrazione tra sistemi."
  },
  "kafka-poisoning": {
    "term": "Kafka Poisoning",
    "definition": "Un tipo di attacco informatico in cui vengono inviati dati dannosi o manipolati ai topic di Apache Kafka, compromettendo l'integrità del flusso di informazioni."
  },
  "kappa-architecture": {
    "term": "Kappa Architecture",
    "definition": "Architettura progettata per lélaborazione di dati in tempo reale, eliminando la distinzione tra batch e streaming. Utilizza un unico flusso di dati continuo per semplificare la gestione e migliorare la scalabilità."
  },
  "latex": {
    "term": "LaTeX",
    "definition": "Linguaggio di marcatura basato su comandi che permettono di formattare il testo e produrre documenti. Viene spesso utilizzato in ambito accademico, scientifico e tecnico per la scrittura di articoli, libri, tesi e presentazioni."
  },
  "llm": {
    "term": "LLM",
    "definition": "Acronimo di \"Large Language Model\", è un tipo di modello linguistico notevole per essere in grado di ottenere la comprensione e la generazione di linguaggio di ambito generale. Gli LLM acquisiscono questa capacità adoperando enormi quantità di dati per apprendere miliardi di parametri nell'addestramento."
  },
  "marker": {
    "term": "Marker",
    "definition": "Un marker identifica una posizione su una mappa tramite un'immagine standard, per esempio un cerchio, un quadrato o un triangolo."
  },
  "merge": {
    "term": "Merge",
    "definition": "Operazione in un sistema di versionamento che combina le modifiche provenienti da diversi rami (branches) di sviluppo in un unico ramo, unificando il codice o la documentazione, senza perdere il lavoro svolto separatamente."
  },
  "microservizio": {
    "term": "Microservizio",
    "definition": "Un approccio per sviluppare e organizzare l'architettura dei software secondo cui questi ultimi sono composti di servizi indipendenti di piccole dimensioni che comunicano tra loro tramite API ben definite. Le architetture basate su microservizi permettono di scalare e sviluppare le applicazioni in modo più semplice e rapido, facilitando eventuali cambiamenti e miglioramenti."
  },
  "milestone": {
    "term": "Milestone",
    "definition": "Data di riferimento che fissa un punto di avanzamento previsto nel tempo all'interno di un progetto. Viene utilizzata per monitorare i progressi e assicurare che il progetto rispetti la pianificazione stabilita. Il raggiungimento degli obiettivi associati a una milestone viene sostanziato attraverso lo sviluppo di una baseline."
  },
  "mvp": {
    "term": "MVP",
    "definition": "Acronimo di \"Minimum Viable Product\", è una versione di un prodotto software che include solo le funzionalità essenziali per soddisfare i bisogni principali degli utenti. L'obiettivo di un MVP è quello di testare il prodotto, raccogliendo feedback degli utenti per migliorarlo e svilupparlo ulteriormente."
  },
  "norme": {
    "term": "Norme",
    "definition": "Insieme di regole, linee guida o standard che stabiliscono comportamenti e procedure da seguire in un determinato contesto o settore. Il loro scopo principale è garantire la sicurezza, la qualità, léfficienza e léfficacia delle attività svolte, assicurando che vengano rispettati determinati criteri e pratiche operative."
  },
  "pannello": {
    "term": "Pannello",
    "definition": "È un elemento visuale all'interno di una dashboard, progettato per rappresentare specifici dati o metriche attraverso grafici, tabelle, numeri singoli o altri tipi di visualizzazione. Ogni pannello è configurabile per interrogare una o più fonti dati, applicare trasformazioni e presentare le informazioni in modo chiaro e significativo per il monitoraggio e l'analisi."
  },
  "pb": {
    "term": "PB",
    "definition": "Acronimo di \"Product Baseline\", è una tappa chiave nello sviluppo di un progetto, durante la quale viene verificata e dimostrata la solidità dell'architettura definita nella fase precedente (RTB). È la seconda revisione di avanzamento del progetto didattico, corrispondente alla presentazione dell'MVP."
  },
  "percorso": {
    "term": "Percorso",
    "definition": "Un percorso è lo spostamento che un utente sta compiendo con un mezzo, nel contesto del nostro progetto, è quello compiuto dall'utente con la bicicletta noleggiata."
  },
  "poc": {
    "term": "PoC",
    "definition": "Acronimo di \"Proof of Concept\", è un prototipo iniziale realizzato per dimostrare la fattibilità tecnologica di un prodotto atteso, permettendo di delineare il suo potenziale di realizzazione."
  },
  "poi": {
    "term": "PoI",
    "definition": "Un Punto di Interesse è una localizzazione geografica rilevante all'interno del sistema. Nel nostro progetto, i PoI vengono utilizzati per identificare posizioni specifiche, ossia le attività che offrono dei servizi."
  },
  "processo": {
    "term": "Processo",
    "definition": "Insieme di attività collegate tra loro, finalizzate al raggiungimento di un obiettivo specifico, utilizzando risorse e seguendo regole prestabilite. Deve essere condotto in modo sistematico, disciplinato e misurabile."
  },
  "progetto": {
    "term": "Progetto",
    "definition": "Insieme di attività coordinate e pianificate, con risorse limitate, finalizzate al raggiungimento di un obiettivo a partire da determinate specifiche. Ha una data d'inizio e una data di fine fissate."
  },
  "prompt": {
    "term": "Prompt",
    "definition": "Input testuale fornito a un modello linguistico per generare una risposta. Utilizzato per creare messaggi pubblicitari personalizzati basati su contesto e preferenze."
  },
  "proponente": {
    "term": "Proponente",
    "definition": "Léntità che avanza una proposta per la realizzazione di un progetto. Il proponente definisce i requisiti e gli obiettivi finali del progetto, garantendo che il risultato finale risponda alle sue necessità. Nel caso del nostro progetto, il proponente è l'azienda SyncLab."
  },
  "protocollo": {
    "term": "Protocollo",
    "definition": "Insieme di regole e convenzioni che definiscono come deve avvenire la comunicazione o l'interazione tra due o più entità, siano esse dispositivi, software o persone. I protocolli garantiscono che lo scambio di informazioni avvenga in modo standardizzato, sicuro ed efficiente, evitando malintesi o incompatibilità."
  },
  "pull-request": {
    "term": "Pull Request",
    "definition": "Richiesta da parte di un membro del team, solitamente effettuata tramite una piattaforma come GitHub per integrare le modifiche fatte in un branch nel repository principale. Le PR sono uno strumento fondamentale per la revisione del codice, consentendo agli altri membri del team di collaborare, commentare e approvare le modifiche prima che esse siano integrate nel progetto con un merge."
  },
  "pv": {
    "term": "PV",
    "definition": "Acronimo di \"Planned Value\", è una metrica che rappresenta il valore in euro delle attività pianificate alla data corrente, ovvero il valore dei deliverable che dovrebbero essere stati completati fino al momento della misurazione in base alla pianificazione iniziale."
  },
  "python": {
    "term": "Python",
    "definition": "Linguaggio di programmazione ad alto livello, semplice e versatile. Supporta più paradigmi di programmazione, tra cui quello ad oggetti e quello funzionale. Grazie alla sua sintassi, viene utilizzato in una vasta gamma di applicazioni, tra cui sviluppo software, automazione, analisi dei dati e intelligenza artificiale."
  },
  "query": {
    "term": "Query",
    "definition": "Istruzione formale utilizzata per interagire con i sistemi di gestione dei database. Solitamente scritta in linguaggi come SQL, è uno strumento fondamentale per gestire e analizzare grandi quantità di informazioni in modo strutturato."
  },
  "repository": {
    "term": "Repository",
    "definition": "Archivio digitale centralizzato utilizzato per conservare, organizzare e gestire file, dati o codice sorgente. Facilita la condivisione, il controllo delle versioni e l'accesso collaborativo, ottimizzando la gestione e lo sviluppo di un progetto."
  },
  "requisito": {
    "term": "Requisito",
    "definition": "Doppio significato: la competenza necessaria per un utente affinché possa risolvere un problema o raggiungere un obiettivo (lato bisogno), ma anche la capacità che un sistema deve possedere per soddisfare un'aspettativa (lato soluzione)."
  },
  "rischio": {
    "term": "Rischio",
    "definition": "Problema che potrebbe causare perdite o minacciare l'avanzamento del progetto, influendo sui costi o sul successo tecnico. L'Analisi dei Rischi identifica e gestisce tali rischi, prevenendo le perdite e definendo misure per mitigare eventuali danni."
  },
  "rsi": {
    "term": "RSI",
    "definition": "Acronimo di \"Requirements Stability Index\", è una metrica che misura la percentuale di stabilità dei requisiti nel ciclo di vita di un progetto."
  },
  "rtb": {
    "term": "RTB",
    "definition": "Acronimo di \"Requirements and Technology Baseline\", è la prima revisione di avanzamento del progetto didattico. Fissa i requisiti da soddisfare in accordo con il proponente; motiva le tecnologie, i framework, le librerie adottate dimostrandone sia l'adeguatezza sia la compatibilità tramite il Proof of Concept (PoC)."
  },
  "sal": {
    "term": "SAL",
    "definition": "Acronimo di \"Stato Avanzamento Lavori\", è un incontro in cui il team si riunisce per controllare il progresso degli obiettivi pianificati. Durante questo incontro, si discute cosa è stato completato, cosa è ancora in corso e cosa potrebbe ostacolare il progetto."
  },
  "scrum": {
    "term": "Scrum",
    "definition": "Framework per la gestione dei progetti che promuove il lavoro di squadra e il progresso iterativo verso obiettivi definiti. Basato sull'adattabilità, Scrum incoraggia a partire da ciò che è noto, monitorare continuamente i progressi e apportare modifiche in base alle necessità, garantendo flessibilità e miglioramento continuo durante il ciclo di sviluppo. Comprende quattro eventi chiave, usati per pianificare e porre in retrospettiva il team di sviluppo: Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective."
  },
  "sistema": {
    "term": "Sistema",
    "definition": "Insieme organizzato di componenti interconnesse e interagenti, che lavorano insieme per raggiungere un obiettivo comune o eseguire specifiche funzioni."
  },
  "sprint": {
    "term": "Sprint",
    "definition": "Periodo di tempo dalle 2 alle 4 settimane, in cui un team di sviluppo si concentra sul completamento di un insieme ristretto di attività. Ogni sprint è seguito da una review per verificare il progresso raggiunto e da una retrospettiva per adottare ulteriori miglioramenti."
  },
  "sprint-retrospective": {
    "term": "Sprint Retrospective",
    "definition": "Incontro che si tiene alla fine di ogni sprint, subito dopo la review. Durante questa riunione, il team di sviluppo riflette sullo sprint appena concluso, discutendo cosa è andato bene, cosa potrebbe essere migliorato e quali azioni concrete debbano essere adottate per migliorare i successivi sprint."
  },
  "sprint-review": {
    "term": "Sprint Review",
    "definition": "Incontro che si tiene alla fine di uno sprint, in cui il team di sviluppo presenta il lavoro completato. Durante questa sessione, il team mostra le funzionalità sviluppate e raccoglie feedback per verificare se i requisiti sono stati soddisfatti e se ci sono modifiche da apportare."
  },
  "sql": {
    "term": "SQL",
    "definition": "Acronimo di \"Structured Query Language\", è un linguaggio di programmazione specifico utilizzato per gestire e manipolare i dati all'interno di un sistema di gestione di database relazionali (RDBMS)."
  },
  "stakeholder": {
    "term": "Stakeholder",
    "definition": "Può essere una persona, un gruppo o un'organizzazione che ha influenza sul prodotto e sul progetto. Può includere i clienti, i dipendenti, i fornitori ed eventuali regolatori."
  },
  "stream-processing": {
    "term": "Stream Processing",
    "definition": "Tecnica di elaborazione dei dati in tempo reale, in cui i flussi di dati vengono processati in modo continuo man mano che vengono generati, senza necessità di memorizzazione preventiva. È utilizzata per analisi in tempo reale, monitoraggio e rilevamento di eventi."
  },
  "sv": {
    "term": "SV",
    "definition": "Acronimo di \"Schedule Variance\", trattasi di una metrica che rappresenta la differenza in euro tra il valore guadagnato (EV) e il valore pianificato (PV) fino al momento corrente."
  },
  "synclab": {
    "term": "synclab",
    "definition": "Azienda italiana attenta ai paradigmi della trasformazione digitale che realizza prodotti e soluzioni per diversi mercati quali: Sanità, Industria, Energia, Telco, Finanza e Trasporti & Logistica. Offre anche consulenze per diversi temi come: GDPR, Big Data, Cloud Computing, IoT, Mobile e Cyber Security."
  },
  "teamwork": {
    "term": "Teamwork",
    "definition": "Collaborazione tra membri di un gruppo per raggiungere obiettivi comuni, in modo efficace ed efficiente. Richiede il rispetto di regole condivise e l'adozione di best practices per ottimizzare il lavoro, come la condivisione dei rischi, l'assunzione di responsabilità o la comunicazione aperta e trasparente."
  },
  "test": {
    "term": "Test",
    "definition": "Un processo o un'attività finalizzata a verificare il funzionamento di un software o di un sistema informatico, con lo scopo di identificare eventuali difetti o problemi. Esistono diverse tipologie di test, ciascuna con un obiettivo specifico."
  },
  "topic": {
    "term": "Topic",
    "definition": "In Apache Kafka, è una categoria che consente di organizzare e suddividere i flussi di messaggi. I topic sono essenziali nel modello di pubblicazione/sottoscrizione di Kafka, dove i produttori inviano messaggi a specifici topic e i consumatori si sottoscrivono a tali topic per ricevere i messaggi di loro interesse."
  },
  "uml": {
    "term": "UML",
    "definition": "Acronimo di \"Unified Modeling Language\", è un linguaggio di modellazione visuale utilizzato per analizzare, progettare e documentare sistemi software complessi. Consente di rappresentare in modo chiaro e standardizzato la struttura del sistema, il comportamento delle sue componenti e le interazioni tra gli attori e il sistema stesso, facilitando la comunicazione tra i membri del team di sviluppo e gli stakeholder."
  },
  "user-story": {
    "term": "User story",
    "definition": "Descrizione concisa di una funzionalità o di un requisito del sistema, espressa dal punto di vista dell'utente. Viene utilizzata per definire i requisiti di un prodotto in modo semplice e comprensibile, per questo è solitamente scritta in linguaggio naturale."
  },
  "versionamento": {
    "term": "Versionamento",
    "definition": "Il processo di \"version control\" consente di stabilire la storia cronologica delle azioni eseguite per una certa attività, tracciando tutti i cambiamenti effettuati e fornendo la possibilità di ritornare a uno stadio precedente se necessario. Il versionamento è fondamentale per mantenere il controllo sulle modifiche, evitare perdite di dati e permettere una gestione efficace delle versioni in progetti complessi."
  },
  "walkthrough": {
    "term": "Walkthrough",
    "definition": "Tecnica di verifica di un documento o di un codice in modo approfondito e senza ricorrere a una checklist predefinita. Durante questa revisione, l'attenzione è focalizzata sul contenuto per individuare e correggere errori, evidenziando aspetti critici e identificando potenziali problematiche, senza aderire a parametri di valutazione rigidi."
  },
  "way-of-working": {
    "term": "Way of Working",
    "definition": "Insieme delle metodologie, dei processi, degli strumenti e dei comportamenti che devono essere adottati da un team o un'organizzazione per svolgere le proprie attività allo stato dell'arte."
  },
  "zookeeper": {
    "term": "Zookeeper",
    "definition": "Servizio di coordinamento distribuito utilizzato nel progetto per garantire la gestione affidabile dei nodi e la sincronizzazione tra le componenti del sistema. Nel contesto della nostra architettura, viene impiegato per supportare Apache Kafka, gestendo i broker, mantenendo metadati di configurazione e coordinando le operazioni di leader election. Questo assicura unélevata disponibilità e tolleranza ai guasti nella gestione dello streaming dei dati."
  }
};
