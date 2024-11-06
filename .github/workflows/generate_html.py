import os
import shutil
from datetime import datetime

output_dir = 'output'
sitoweb_dir = 'sitoweb'
esterni_dir = 'Esterni'  # Supponiamo che i file verbali esterni siano in questa cartella

def generate_html():
    html_content = ""

    for root, dirs, files in os.walk('.'):
        if root == '.':
            continue
        
        dirs.sort()

        tex_files = [f for f in files if f.endswith('.tex')]
        subdirs_with_tex = []

        # Aggiungi un controllo speciale per la cartella "verbali esterni"
        if 'Esterni' in root:
            # Copia i verbali esterni nella cartella output (se non già copiati)
            pdf_files = [f for f in files if f.endswith('.pdf')]
            pdf_files_with_dates = []
            pdf_files_without_dates = []

            for pdf_file in pdf_files:
                src_pdf_path = os.path.join(root, pdf_file)
                dst_pdf_path = os.path.join(output_dir, pdf_file)
                
                # Copia il PDF solo se non esiste già
                if not os.path.exists(dst_pdf_path):
                    shutil.copy2(src_pdf_path, dst_pdf_path)

                # Aggiungi la data se presente nel nome del file
                date_str = os.path.splitext(pdf_file)[0][-10:]  # Assumiamo che la data sia negli ultimi 10 caratteri
                try:
                    date = datetime.strptime(date_str, '%Y-%m-%d')
                    pdf_files_with_dates.append((pdf_file, date))
                except ValueError:
                    pdf_files_without_dates.append(pdf_file)

            # Ordina i file con la data in ordine decrescente
            pdf_files_with_dates.sort(key=lambda x: x[1], reverse=True)

            # Aggiungi la sezione HTML per i verbali esterni
            html_content += "<h3>Esterni</h3>\n<ul>\n"
            
            # Prima i file con data
            for pdf_file, _ in pdf_files_with_dates:
                # Rimuovi l'estensione .pdf dal nome del file
                link_text = os.path.splitext(pdf_file)[0]
                html_content += f'<li><a href="{pdf_file}" target="_blank">{link_text}</a></li>\n'

            # Poi i file senza data
            for pdf_file in pdf_files_without_dates:
                # Rimuovi l'estensione .pdf dal nome del file
                link_text = os.path.splitext(pdf_file)[0]
                html_content += f'<li><a href="{pdf_file}" target="_blank">{link_text}</a></li>\n'

            html_content += "</ul>\n"
            continue  # Salta la parte successiva per questa cartella "Esterni"
        
        subdirs_with_tex = []

        if tex_files:
            subdirs_with_tex.append(root)

        for subdir in dirs:
            subdir_path = os.path.join(root, subdir)
            for subroot, _, subfiles in os.walk(subdir_path):
                if any(f.endswith('.tex') for f in subfiles):
                    subdirs_with_tex.append(root)
                    break

        if subdirs_with_tex:
            level = root.count(os.sep) - 1
            folder_name = os.path.basename(root)

            if level == 0:
                html_content += f"<h1>{folder_name}</h1>\n"
            elif level == 1:
                html_content += f"<h2>{folder_name}</h2>\n"
            elif level == 2:
                html_content += f"<h3>{folder_name}</h3>\n"
            else:
                html_content += f"<h4>{folder_name}</h4>\n"
            
            html_content += "<ul>\n"

            pdf_links_with_dates = []
            pdf_links_without_dates = []

            for tex_file in tex_files:
                pdf_file = os.path.splitext(tex_file)[0] + '.pdf'
                pdf_path = os.path.join(output_dir, pdf_file)
                
                if os.path.isfile(pdf_path):
                    date_str = os.path.splitext(tex_file)[0][-10:]
                    try:
                        date = datetime.strptime(date_str, '%Y-%m-%d')
                        pdf_links_with_dates.append((pdf_file, date))
                    except ValueError:
                        pdf_links_without_dates.append(pdf_file)

            pdf_links_with_dates.sort(key=lambda x: x[1], reverse=True)

            for pdf_file, _ in pdf_links_with_dates:
                link_text = os.path.splitext(pdf_file)[0]
                html_content += f'<li><a href="{pdf_file}" target="_blank">{link_text}</a></li>\n'

            for pdf_file in pdf_links_without_dates:
                link_text = os.path.splitext(pdf_file)[0]
                html_content += f'<li><a href="{pdf_file}" target="_blank">{link_text}</a></li>\n'

            html_content += "</ul>\n"

    return html_content

def copy_sitoweb_files():
    for item in os.listdir(sitoweb_dir):
        src = os.path.join(sitoweb_dir, item)
        dst = os.path.join(output_dir, item)

        if os.path.isdir(src):
            shutil.copytree(src, dst, dirs_exist_ok=True)
        else:
            shutil.copy2(src, dst)

def insert_content_into_html(content):
    sitoweb_index_path = os.path.join(output_dir, 'index.html')

    with open(sitoweb_index_path, 'r') as f:
        html_lines = f.readlines()

    for i, line in enumerate(html_lines):
        if '<main>' in line:
            close_main_index = i
            while '</main>' not in html_lines[close_main_index]:
                close_main_index += 1
            
            html_lines.insert(close_main_index, content + "\n")
            break

    with open(sitoweb_index_path, 'w') as f:
        f.writelines(html_lines)

# Assicurati che la cartella output esista
os.makedirs(output_dir, exist_ok=True)

# Copia i file dal sito web di base (stili, immagini, ecc.)
copy_sitoweb_files()

# Genera il contenuto HTML
html_output = generate_html()

# Inserisci il contenuto nella pagina HTML
insert_content_into_html(html_output)

print("HTML index created successfully in the 'output' directory.")
