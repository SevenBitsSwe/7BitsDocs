import os
import shutil
from datetime import datetime
import re

def should_skip_directory(dir_name):
    # Skip hidden directories and specific folders
    # Note: 'verbali' is no longer in the skip list as it's now integrated into main content
    return dir_name.startswith('.') or dir_name.lower() in ['images', 'output', 'glossary', 'sitoweb', '.github']

def ensure_output_dir():
    # Ensure the output directory exists
    if not os.path.exists('output'):
        os.makedirs('output')

def copy_website_files():
    # Copy all files from sitoweb to output
    sitoweb_path = 'sitoweb'
    if os.path.exists(sitoweb_path):
        # Get all files and folders from sitoweb
        for item in os.listdir(sitoweb_path):
            src = os.path.join(sitoweb_path, item)
            dst = os.path.join('output', item)
            
            if os.path.isfile(src):
                # Copy file
                shutil.copy2(src, dst)
            elif os.path.isdir(src):
                # If destination exists, remove it first to ensure clean copy
                if os.path.exists(dst):
                    shutil.rmtree(dst)
                # Copy directory and all its contents
                shutil.copytree(src, dst)

def is_verbali_path(path):
    """Check if a path contains 'verbali' in a case-insensitive way"""
    path_lower = path.lower()
    return 'verbali' in path_lower

def is_esterni_path(path):
    """Check if a path contains 'esterni' in a case-insensitive way"""
    path_lower = path.lower()
    return 'esterni' in path_lower

def is_interni_path(path):
    """Check if a path contains 'interni' in a case-insensitive way"""
    path_lower = path.lower()
    return 'interni' in path_lower

def process_verbale_file(file_path, is_esterni=False):
    """Process a single verbale file and return its HTML representation"""
    try:
        file_name = os.path.basename(file_path)
        if not file_name.endswith('.pdf'):
            return None

        # For esterni, copy to output
        if is_esterni:
            dest_path = os.path.join('output', file_name)
            shutil.copy2(file_path, dest_path)
        
        # Extract the full text part (VerbaleInterno/VerbaleEsterno)
        file_parts = file_name.split('-', 1)
        if len(file_parts) != 2:
            print(f"Warning: Invalid verbale filename format: {file_name}")
            return None
            
        verbale_type = file_parts[0]
        date_str = file_parts[1].replace('.pdf', '')
        
        try:
            date_obj = datetime.strptime(date_str, '%Y-%m-%d')
            date_bubble = f'<span class="date-bubble"><i class="fas fa-calendar"></i>{date_str}</span>'
            return {
                'date': date_obj,
                'html': f'<a href="{file_name}" target="_blank"><p><i class="fas fa-file-pdf"></i> <span class="file-name">{verbale_type}</span>{date_bubble}</p></a>'
            }
        except ValueError:
            print(f"Warning: Invalid date format in verbale: {file_name}")
            return {
                'date': datetime.min,
                'html': f'<a href="{file_name}" target="_blank"><p><i class="fas fa-file-pdf"></i> <span class="file-name">{file_name}</span></p></a>'
            }
    except Exception as e:
        print(f"Error processing verbale {file_path}: {str(e)}")
        return None

def extract_version_and_date(filename):
    # Extract version from filename (e.g., 'v1.0.0' from 'Document_v1.0.0.pdf')
    version_match = re.search(r'v\d+\.\d+\.\d+', filename)
    version = version_match.group(0) if version_match else None
    
    # Extract date from filename (e.g., '2023-12-25' or '2023/12/25' from 'Document_2023-12-25.pdf')
    date_match = re.search(r'\d{4}[-/]\d{2}[-/]\d{2}', filename)
    date_str = date_match.group(0) if date_match else None
    if date_str:
        try:
            # Replace any forward slashes with hyphens for consistent formatting
            date_str = date_str.replace('/', '-')
            date_obj = datetime.strptime(date_str, '%Y-%m-%d')
            # Keep the original YYYY-MM-DD format
            date_str = date_obj.strftime('%Y-%m-%d')
        except ValueError:
            date_str = None
    return version, date_str

def get_section_weight(section_name):
    # Dictionary defining section weights (case-insensitive)
    section_weights = {
        'pb': 30,
        'rtb': 20,  # RTB should appear first
        'candidatura': 10,  # Candidatura should appear after RTB
    }
    # Case-insensitive lookup, default weight is 0
    return section_weights.get(section_name.lower(), 0)

def get_subsection_weight(subsection_name):
    # Dictionary defining subsection weights (case-insensitive)
    subsection_weights = {
        'esterni': 30,  
        'interni': 20,  
        'panini': 20,
        'verbali interni': 21,
    }
    # Case-insensitive lookup, default weight is 0
    return subsection_weights.get(subsection_name.lower(), 0)

def process_directory(dir_path, base_name):
    content = []
    has_content = False
    verbali_esterni = []
    verbali_interni = []
    
    items = os.listdir(dir_path)
    # Sort directories by subsection weight (higher weight first) and then alphabetically
    dirs = [d for d in items if os.path.isdir(os.path.join(dir_path, d)) and not should_skip_directory(d)]
    # Sort by weight in descending order (higher weights first)
    dirs.sort(key=lambda x: (-get_subsection_weight(x), x.lower()))
    
    # Process files in current directory
    files = []
    current_dir = os.path.basename(dir_path)
    
    # Handle verbali files
    if is_verbali_path(dir_path):
        pdf_files = [f for f in items if f.endswith('.pdf') and os.path.isfile(os.path.join(dir_path, f))]
        for file in pdf_files:
            file_path = os.path.join(dir_path, file)
            result = process_verbale_file(file_path, is_esterni=is_esterni_path(dir_path))
            if result:
                if is_esterni_path(dir_path):
                    verbali_esterni.append(result)
                elif is_interni_path(dir_path):
                    verbali_interni.append(result)
        # Process verbali content if any
        if verbali_esterni:
            verbali_esterni.sort(key=lambda x: x['date'], reverse=True)
            verbali_esterni = [item['html'] for item in verbali_esterni]
            has_content = True
            content.extend(verbali_esterni)
        
        if verbali_interni:
            verbali_interni.sort(key=lambda x: x['date'], reverse=True)
            verbali_interni = [item['html'] for item in verbali_interni]
            has_content = True
            content.extend(verbali_interni)
    elif current_dir == 'Esterni':
        files = [f for f in items if f.endswith('.pdf') and os.path.isfile(os.path.join(dir_path, f))]
        for file in files:
            src_path = os.path.join(dir_path, file)
            dest_path = os.path.join('output', file)
            shutil.copy2(src_path, dest_path)
    else:
        files = [f for f in items if f.endswith('.tex') and os.path.isfile(os.path.join(dir_path, f))]
        files = [f.replace('.tex', '.pdf') for f in files]
    
    # Process files
    for file in sorted(files):
        has_content = True
        display_name = file.replace('_', ' ').replace('.pdf', '')
        version, date_str = extract_version_and_date(display_name)
        clean_name = re.sub(r'\sv\d+\.\d+\.\d+', '', display_name)
        clean_name = re.sub(r'\s\d{4}[-/]\d{2}[-/]\d{2}', '', clean_name)
        
        version_bubble = f'<span class="version-bubble"><i class="fas fa-code-branch"></i>{version}</span>' if version else ''
        date_bubble = f'<span class="date-bubble"><i class="fas fa-calendar"></i>{date_str}</span>' if date_str else ''
        
        content.append(f'<a href="{file}" target="_blank"><p><i class="fas fa-file-pdf"></i> <span class="file-name">{clean_name}</span>{version_bubble}{date_bubble}</p></a>')

    # Process directories
    for d in dirs:
        subdir_path = os.path.join(dir_path, d)
        subdir_content, subdir_has_content = process_directory(subdir_path, d)
        if subdir_has_content:
            has_content = True
            content.append(f'<div class="subsection">')
            content.append(f'<h3 class="subsection-title" onclick="toggleSection(this)">{d} <i class="fas fa-chevron-down"></i></h3>')
            content.append('<div class="subsection-content">')
            content.extend(subdir_content)
            content.append('</div></div>')
    
    return content, has_content

def generate_html():
    ensure_output_dir()
    copy_website_files()
    
    # Get main directories
    current_dir = os.getcwd()
    main_dirs = [d for d in os.listdir(current_dir) 
                if os.path.isdir(os.path.join(current_dir, d)) 
                and not should_skip_directory(d)]
    
    sections_index = []
    main_content = []
    
    # Sort directories by weight (higher weight first) and then alphabetically
    main_dirs = sorted(main_dirs, key=lambda x: (-get_section_weight(x), x.lower()))
    
    # Process each main directory
    for dir_name in main_dirs:
        dir_path = os.path.join(current_dir, dir_name)
        content, has_content = process_directory(dir_path, dir_name)
        
        if has_content:
            section_id = dir_name.lower().replace(' ', '-')
            sections_index.append(f'<li><a href="#{section_id}">{dir_name}</a></li>')
            
            main_content.append(f'<div class="doc-section" id="{section_id}">')
            main_content.append(f'<h2 class="doc-title" onclick="toggleSection(this)">{dir_name} <i class="fas fa-chevron-down"></i></h2>')
            main_content.append('<div class="doc-content">')
            main_content.extend(content)
            main_content.append('</div></div>')
    
    # Create the navigation index
    nav_html = '<nav class="doc-index">\n<ul>\n'
    nav_html += '\n'.join(sections_index)
    nav_html += '\n</ul>\n</nav>\n'
    
    # Copy the documentation.html template to output
    shutil.copy2(os.path.join('sitoweb', 'documentation.html'), 
                os.path.join('output', 'documentation.html'))
    
    # Update the documentation.html in the output directory
    doc_path = os.path.join('output', 'documentation.html')
    with open(doc_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Insert the components - modified to insert in the documentation section
    content = content.replace('<!-- Il contenuto verrà generato dinamicamente da generate_html.py -->', 
                            nav_html + '\n' + '\n'.join(main_content))
    
    with open(doc_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    # Copy other required files
    style_src = os.path.join('sitoweb', 'style.css')
    style_dest = os.path.join('output', 'style.css')
    if os.path.exists(style_src):
        shutil.copy2(style_src, style_dest)

    # Copy images if they exist
    images_src = os.path.join('sitoweb', 'images')
    images_dest = os.path.join('output', 'images')
    if os.path.exists(images_src):
        shutil.copytree(images_src, images_dest, dirs_exist_ok=True)

if __name__ == '__main__':
    generate_html()
    print("Documentation has been processed successfully.")
