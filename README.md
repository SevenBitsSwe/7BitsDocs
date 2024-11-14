# 7BitsDocs
Repository dedicata alla documentazione del progetto di *Ingegneria del software* dell'anno accademico 2024/25 per il gruppo **SevenBits** con componenti:
 | Cognome | Nome | Matricola |
 | -------- | -------- | -------- |
 | Cristellon | Giovanni | 1216730 |
 | Gusella | Manuel | 2076430 |
 | Peruzzi | Uncas | 2068239 |
 | Piva | Riccardo | 2079241 |
 | Pivetta | Federico | 2009693 |
 | Rubino | Alfredo | 2076435 |
 | Trolese | Leonardo | 2068238 |



## Struttura della repo
La repository è strutturata in modo da avere i seguenti quattro branch principali: 
 - `main`
 - `verbali`
 - `glossario`
 - `norme`

Questa suddivisione facilita lo sviluppo parallelo della documentazione, evitando che materiale incompleto finisca accidentalmente nel `main`.
Ogni branch raccoglie le modifiche relative alla componente di documentazione a cui è associato, permettendo di mantenere un flusso di lavoro ordinato e strutturato.

### Processo di Revisione e Pubblicazione
Per garantire la qualità della documentazione, ogni documento deve essere:
1. **Inserito nel branch dedicato** (ad es. `verbali` per i verbali, `glossario` per il glossario, ecc.).
2. **Sottoposto a revisione**: una volta completato e revisionato, il documento può essere portato nel branch `main` tramite una pull request.

Si segue quindi un modello *git-flow semplificato* con più branch di lavoro separati, e pertanto nessuno dei branch sopra indicati deve essere eliminato.

### Integrazione con GitHub Pages
La repository è dotata di un sito GitHub Pages associato al branch `main`, che mediante GitHub Action è costantemente aggiornato e contiene tutta la documentazione prodotta e revisionata in formato PDF.

Tutta la documentazione fin'ora prodotta e verificata è consultabile nella pagina web:
<https://sevenbitsswe.github.io/7BitsDocs/>
