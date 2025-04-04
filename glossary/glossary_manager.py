import re
import os
import json

def clean_latex_text(text):
    """Pulisce il testo LaTeX rimuovendo comandi e caratteri speciali"""
    # Gestisci i casi speciali
    if text == '\\LaTeX':
        return 'LaTeX'
    
    # Rimuovi marker _G e altri comandi LaTeX
    text = re.sub(r'\$_G\$', '', text)
    text = re.sub(r'\\[a-zA-Z]+{([^}]*)}', r'\1', text)
    text = text.replace('\\', '').replace('\\\\', '')
    
    # Gestisci accenti e caratteri speciali
    text = re.sub(r'\\"([aeiouAEIOU])', r'\1', text)  # dieresi
    text = re.sub(r'\\\'([aeiouAEIOU])', r'\1', text)  # accenti acuti
    text = re.sub(r'\\\`([aeiouAEIOU])', r'\1', text)  # accenti gravi
    text = text.replace('\'E', 'È')
    text = text.replace('\'e', 'é')
    text = text.replace('\`e', 'è')
    
    # Rimuovi righe e spazi extra
    text = re.sub(r'\\hline', '', text)
    text = ' '.join(text.split())
    
    return text

def extract_from_glossary_tex(file_path):
    """Estrae termini e definizioni dal file Glossario.tex"""
    terms = {}
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    print("Iniziando l'estrazione dei termini...")
    
    # Aggiungi manualmente il termine synclab se non viene trovato
    terms['synclab'] = {
        'term': 'synclab',
        'definition': 'Azienda italiana attenta ai paradigmi della trasformazione digitale che realizza prodotti e soluzioni per diversi mercati quali: Sanità, Industria, Energia, Telco, Finanza e Trasporti & Logistica. Offre anche consulenze per diversi temi come: GDPR, Big Data, Cloud Computing, IoT, Mobile e Cyber Security.'
    }
    print("\nAggiunto manualmente: synclab")
    
    # Trova tutte le tabelle dopo ogni subsection
    sections = re.finditer(r'\\subsection\*{([A-Z])}.*?\\begin{longtable}.*?\\hline(.*?)\\end{longtable}', content, re.DOTALL)
    
    for section in sections:
        letter = section.group(1)
        table_content = section.group(2)
        print(f"\nProcessando lettera: {letter}")
        
        # Salta l'intestazione della tabella
        table_content = re.sub(r'\\rowcolor\[gray\].*?\\\\.*?\\hline', '', table_content, flags=re.DOTALL)
        
        # Trova tutte le righe della tabella
        rows = re.finditer(r'([^&\n]+?)\s*&\s*([^\\]+?)(?:\\\\|$)', table_content)
        
        for row in rows:
            term = row.group(1).strip()
            definition = row.group(2).strip()
            
            # Salta righe vuote o non valide
            if not term or term.isspace() or term == '':
                continue
            
            # Pulisci termine e definizione
            term = clean_latex_text(term)
            definition = clean_latex_text(definition)
            
            # Verifica che il termine e la definizione siano validi
            if term and definition and len(term) <= 50 and len(definition) >= 10:
                html_id = to_html_id(term)
                terms[html_id] = {
                    'term': term,
                    'definition': definition
                }
                print(f"  - Estratto: {term}")
    
    print(f"\nTotale termini estratti: {len(terms)}")
    return terms

def to_html_id(term):
    """Converte un termine in un ID HTML valido"""
    return term.lower().replace(' ', '-').replace('_', '-')

def update_glossary_js(terms, js_file_path):
    """Aggiorna il file glossary.js con i termini estratti"""
    # Ordina i termini alfabeticamente
    sorted_terms = dict(sorted(terms.items(), key=lambda x: x[1]['term'].lower()))
    
    # Crea il contenuto del file glossary.js
    js_content = f"const glossaryData = {json.dumps(sorted_terms, indent=2, ensure_ascii=False)};\n"
    
    # Scrivi il nuovo contenuto nel file
    with open(js_file_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"Aggiornato {js_file_path} con {len(terms)} termini")

def main():
    """Funzione principale che gestisce l'estrazione e l'aggiornamento del glossario"""
    script_dir = os.path.dirname(os.path.abspath(__file__))
    glossary_tex = os.path.join(script_dir, "Glossario.tex")
    js_file = os.path.join(os.path.dirname(script_dir), "sitoweb", "glossary.js")
    
    print("Estrazione termini dal Glossario.tex...")
    terms = extract_from_glossary_tex(glossary_tex)
    
    if terms:
        print(f"\nTrovati {len(terms)} termini")
        update_glossary_js(terms, js_file)
    else:
        print("Nessun termine trovato nel glossario")

if __name__ == "__main__":
    main()
