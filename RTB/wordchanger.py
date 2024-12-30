import re #libreria per lavorare con le sottostringhe

def add_g(testo,parola):
    sostituto=parola+"$_G$"
    pattern=r'(?<!-)\b'+re.escape(parola)+r'\b(?![\w$-])'
    testo=re.sub(pattern,sostituto,testo,flags=re.IGNORECASE)

    return testo

def add_g_comp(testo,parola):
    termine='-'.join(parola.split())
    sostituto=termine+"$_G$"
    pattern=r'(?<!-)\b'+re.escape(parola)+r'\b(?![\w$-])'
    testo=re.sub(pattern,sostituto,testo,flags=re.IGNORECASE)

    return testo
    

parole=[
    "Agile","API","Attore",
    "BAC","Baseline","Branch","Build",
    "Capitolato","ClickHouse","Committente","Container","Cruscotto","CI",
    "Dashboard","Database","DBMS","Documentazione","Docker",
    "EAC","efficacia","efficienza","ETC",
    "faker","framework","feedback",
    "Git","GitHub",
    "IA","IEEE","Issue","ITS",
    "Kafka",
    "latex","LLM",
    "Merge","Milestone","MVP",
    "Norme","Overleaf",
    "PB","PoC","Progetto","PR","Proponente","Protocollo","Python",
    "Query",
    "Repository","Requisito","Requisiti","RTB",
    "SAL","Scrum","Sprint","SQL","Stakeholder","Synclab",
    "Teamwork","Test",
    "UML",
    "Versionamento"
]

parole_composte=[
    "Analisi dei Requisiti",
    "Best Practices",
    "Caso d'uso","Casi d'uso","Ciclo di vita","Continuous Integration",
    "Sprint retrospective","Sprint review",
    "User Story",
    "Way of Working"
]

with open("Analisi_dei_Requisiti.tex","r+") as file:

    linee=file.readlines()
    nuovo_contenuto=""

    #senza regex
    #legge ogni linea
    #for linea in linee:
    #    #legge ogni parola della linea
    #    for word in linea.split():
    #        #ripeto questo ciclo per ogni parola presente nella lista parole
    #        for parola in parole:
    #            p=parola+"$_G$"
    #            pattern=r'\b'+re.escape(p)+r'.*'
    #            #controlla se la parola è presente nella word che sta leggendo
    #            if parola in word:
    #                #se è presente controlla se ha la G a pedice e se non la ha la inserisce
    #                if p not in word:
    #                    print(word)
    #                    word=word.replace(parola,parola+"$_G$")
    #        nuovo_contenuto=nuovo_contenuto+" "+word
    #    nuovo_contenuto=nuovo_contenuto+"\n"

    #con regex
    for linea in linee:
        for parola in parole_composte:
            linea=add_g_comp(linea,parola)
        for parola in parole:
            linea=add_g(linea,parola)
        nuovo_contenuto=nuovo_contenuto+linea
    #print(nuovo_contenuto)

    file.seek(0)
    file.write(nuovo_contenuto)
    file.truncate()
