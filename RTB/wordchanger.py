import re #libreria per lavorare con le sottostringhe

def change_word(testo,parola,sostituto):
    pattern=r'(?<!\S)\b'+re.escape(parola)+r'\b(?![\w$-])'
    testo=re.sub(pattern,sostituto,testo,flags=re.IGNORECASE)

    return testo

def add_g(testo,parola):
    sostituto=parola+"$_G$"

    return change_word(testo,parola,sostituto)

def add_g_comp(testo,parola):
    termine='-'.join(parola.split())
    sostituto=termine+"$_G$"

    return change_word(testo,parola,sostituto)
    

parole=[
    "Agile","API","Attore",
    "BAC","Baseline","Branch","Bug","Build",
    "Capitolato","ClickHouse","Committente","Container","Cruscotto","CI",
    "Dashboard","Database","DBMS","Documentazione","Docker",
    "EAC","efficacia","efficienza","ETC",
    "faker","framework","feedback",
    "Git","GitHub","Grafana",
    "IA","IEEE","Inspection","Issue","ITS",
    "Kafka",
    "latex","LLM",
    "Marker","Merge","Microservizio","Microservizi","Milestone","MVP",
    "Norme","Overleaf",
    "PB","Percorso","Percorsi","PoC","Processo","Processi","Progetto","PR","Proponente","Protocollo","Python",
    "Query",
    "Repository","Requisito","Requisiti","Rischio","Rischi","RTB",
    "SAL","Scrum","Sistema","Sprint","SQL","Stakeholder","Synclab",
    "Teamwork","Test","Topic",
    "UML",
    "Versionamento",
    "Walkthrough"
]

parole_composte=[
    "Analisi dei Requisiti",
    "Best Practices",
    "Caso d'uso","Casi d'uso","Ciclo di vita","Continuous Integration",
    "Docker Compose",
    "Sprint retrospective","Sprint review",
    "User Story",
    "Way of Working"
]

with open("Analisi_dei_Requisiti.tex","r+") as file:

    linee=file.readlines()
    nuovo_contenuto=""

    #variabile booleana che serve a capire quando iniziare a mettere i G a pedice.
    #noi vogliamo che li metta dopo la titlepage
    start=False
    for linea in linee:
        if(linea=="\\end{titlepage}\n"):
            start=True
        
        if(start==True):
            for parola in parole_composte:
                linea=add_g_comp(linea,parola)

            for parola in parole:
                linea=add_g(linea,parola)
        nuovo_contenuto=nuovo_contenuto+linea
    #print(nuovo_contenuto)

    file.seek(0)
    file.write(nuovo_contenuto)
    file.truncate()
