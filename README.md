# 7BitsDocs
Repository dedicata alla documentazione del progetto di *Ingegneria del software* dell'anno accademico 2024/25 per il gruppo **SevenBits** con componenti:
 - Cristellon Giovanni
 - Gusella Manuel
 - Peruzzi Uncas
 - Piva Riccardo
 - Pivetta Federico
 - Rubino Alfredo
 - Trolese Leonardo


## Struttura della repo
La repository è strutturata in modo da avere due branch **main** e **approval**.
Tutta la documentazione prodotta deve essere collocata in approval, per poter essere revisionata. Solo dopo essere stato revisionato un file può essere portato in main.
Si segue quindi un modello *git-flow semplificato*, e pertanto i due branch sopra indicati non devono essere eliminati.

## Procedura per portare le modifiche da approval a main:
1. passa al branch main in locale:
```bash
$ git checkout main
```
2. aggiorna il main in locale:
```bash
$ git pull origin main
```
3. integra le modifiche da approval a main in locale:
```bash
$ git merge approval
```
oppure
```bash
$ git rebase approval
```
4. push delle modifiche nel main remoto:
```bash
$ git push origin main
```

## Eliminazione di un branch in remoto
Utile se si è creato un ulteriore terzo branch per la redazione di un documento, anzichè lavorare direttamente in approval.
```bash
$ git push origin --delete <branch-you-want-to-delete>
```