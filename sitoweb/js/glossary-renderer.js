document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('glossary-content');
    const searchInput = document.getElementById('search-glossary');
    
    // Get all terms and sort them alphabetically
    const terms = Object.keys(glossaryData).sort((a, b) => {
        return glossaryData[a].term.localeCompare(glossaryData[b].term);
    });
    
    function renderGlossary(filteredTerms = terms) {
        container.innerHTML = '';
        
        // Group terms by first letter
        const groupedTerms = {};
        filteredTerms.forEach(key => {
            const firstLetter = glossaryData[key].term.charAt(0).toUpperCase();
            if (!groupedTerms[firstLetter]) {
                groupedTerms[firstLetter] = [];
            }
            groupedTerms[firstLetter].push(key);
        });
        
        // Create sections for each letter
        Object.keys(groupedTerms).sort().forEach(letter => {
            const section = document.createElement('section');
            section.className = 'glossary-section';
            
            const header = document.createElement('h2');
            header.textContent = letter;
            section.appendChild(header);
            
            const termsList = document.createElement('div');
            termsList.className = 'terms-list';
            
            groupedTerms[letter].forEach(key => {
                const term = glossaryData[key];
                const termElement = document.createElement('div');
                termElement.className = 'term-entry';
                termElement.id = key;
                
                const termTitle = document.createElement('h3');
                termTitle.textContent = term.term;
                
                const termDef = document.createElement('p');
                termDef.textContent = term.definition;
                
                termElement.appendChild(termTitle);
                termElement.appendChild(termDef);
                termsList.appendChild(termElement);
            });
            
            section.appendChild(termsList);
            container.appendChild(section);
        });

        if (window.location.hash) {
            const targetId = window.location.hash.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        }
    }
    
    renderGlossary();
    
    window.addEventListener('hashchange', () => {
        if (window.location.hash) {
            const targetId = window.location.hash.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredTerms = terms.filter(key => {
            const term = glossaryData[key];
            return term.term.toLowerCase().includes(searchTerm);
        });
        renderGlossary(filteredTerms);
    });
});