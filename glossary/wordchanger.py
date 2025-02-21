import re
import os
from pathlib import Path

def is_in_url(text, start_pos):
    """Controlla se una posizione nel testo è all'interno di un URL"""
    prev_newline = text.rfind('\n', 0, start_pos)
    prev_space = text.rfind(' ', 0, start_pos)
    start_check = max(prev_newline, prev_space) + 1
    text_before = text[start_check:start_pos]
    return "http://" in text_before or "https://" in text_before

def change_word(testo, parola, sostituto):
    """Sostituisce le occorrenze della parola con il sostituto"""
    pattern = r'(?<!\S)\b' + re.escape(parola) + r'\b(?![\w$-])'
    def replace_match(match):
        if is_in_url(testo, match.start()):
            return match.group(0)
        original = match.group(0)
        # Mantieni la capitalizzazione originale
        if original[0].isupper():
            return sostituto[0].upper() + sostituto[1:]
        return sostituto
    
    return re.sub(pattern, replace_match, testo, flags=re.IGNORECASE)

def add_g(testo, parola):
    """Aggiunge il marker _G alle occorrenze della parola"""
    return change_word(testo, parola, parola + "$_G$")

def add_g_comp(testo, parola):
    """Aggiunge il marker _G ai termini composti"""
    termine = '-'.join(parola.split())
    return change_word(testo, parola, termine + "$_G$")

def read_terms(filename):
    script_dir = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(script_dir, filename)
    with open(file_path, 'r') as f:
        return [line.strip() for line in f if line.strip()]

def process_tex_file(file_path):
    with open(file_path, "r+", encoding='utf-8') as file:
        contenuto = file.read()
        linee=file.readlines()
        nuovo_contenuto = ""
        
        #variabile booleana che serve a capire quando iniziare a mettere i G a pedice.
        #noi vogliamo che li metta dopo la titlepage
        start=False
        for linea in linee:
            if(linea=="\\end{titlepage}\n"):
                start=True
                
                if(start==True):
                    # Processiamo prima i termini composti, poi quelli singoli
                    for parola in compound_terms:
                        linea = add_g_comp(nuovo_contenuto, parola)
                    for parola in single_terms:
                        linea = add_g(nuovo_contenuto, parola)
                nuovo_contenuto=nuovo_contenuto+linea
        
        # Se ci sono stati cambiamenti, scriviamo il nuovo contenuto
        if nuovo_contenuto != contenuto:
            file.seek(0)
            file.write(nuovo_contenuto)
            file.truncate()
            print(f"Modified: {file_path}")

def find_tex_files(base_path):
    tex_files = []
    for root, _, files in os.walk(base_path):
        # Skip root directory, Verbali directories and Glossario.tex
        if (root == base_path or 
            'Verbali' in Path(root).parts or 
            'verbali' in Path(root).parts):
            continue
        
        for file in files:
            # Escludi i file indesiderati
            if file.endswith('.tex') and file.lower() not in ['glossario.tex', 'glossary.tex']:
                tex_files.append(os.path.join(root, file))
    return tex_files

if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))
    base_dir = os.path.dirname(script_dir)

    # Read terms from files
    single_terms = read_terms('single_terms.txt')
    compound_terms = read_terms('compound_terms.txt')
    
    # Find and process all relevant .tex files
    tex_files = find_tex_files(base_dir)
    for tex_file in tex_files:
        print(f"Processing {tex_file}")
        process_tex_file(tex_file)
