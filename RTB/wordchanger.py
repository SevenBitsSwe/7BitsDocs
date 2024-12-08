import re #libreria per lavorare con le sottostringhe

parole=["Analisi-dei-Requisiti","baseline","branch","docker","ia","issue","latex","LLM","merge","milestone","PR","retrospettiva","review","RTB","SAL","sprint","synclab"]

with open("Piano_Progetto.tex","r+") as file:

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
        for parola in parole:
            p=parola+"$_G$"
            pattern=r'\b'+re.escape(parola)+r'\b(?![\w$])'
            #re.findall(pattern,linea,flags=re.IGNORECASE)
            linea=re.sub(pattern,p,linea,flags=re.IGNORECASE)
        nuovo_contenuto=nuovo_contenuto+linea
    #print(nuovo_contenuto)

    file.seek(0)
    file.write(nuovo_contenuto)
    file.truncate()
