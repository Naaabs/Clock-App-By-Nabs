//Script pour JS

//Etape 1 récuperer les div heures et date
var DivHeure = document.querySelector('.heure');
var DivDate = document.querySelector('.date');

//Etape 2 : créer une fonction qui permet d'afficher l'heure
var AfficheHeure = function(){
    //Déclarer les variable de cette fonction
    var heures, minutes, secondes, DeuxChiffres, Aujourdhui, JourNom, JourNumero,
    Listejours, Mois, ListeMois, annee;

    //recuperer la date d'aujourd'hui
    Aujourdhui = new Date(); //new Date() est un constructeur pour l'objet date

    //recupérer l'année en cours
    annee = Aujourdhui.getFullYear();

    //recuprer le mois
    ListeMois = ["Janvier","Février", "Mars", "Avril",
    "Mai", "Juin", "Juillet", "Août","Septembre", "Octobre", "Novembre","Décembre"];//créer un tableau avec l'ensemble des mois (attention l'index commence à 0)
    Mois = ListeMois[Aujourdhui.getMonth()];

    //recuperer le numero du jours
    JourNumero = Aujourdhui.getDate();

    //recuperer le nom du jour
    Listejours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];//La semaine commence le dimanche en Js
    JourNom = Listejours[Aujourdhui.getDay()];

    //Afficher les heures, minutes et secondes avec 2 chiffres
    DeuxChiffres = function(element){   // ex : si element = 6 alors on affiche HH:06:SS
        if (element < 10){
            return element = "0" + element;
        }else{
            return element;
        }
    }

    //afficher l'heure
    heures = DeuxChiffres(Aujourdhui.getHours());

    //afficher les minutes
    minutes = DeuxChiffres(Aujourdhui.getMinutes());

    //afficher les secondes
    secondes = DeuxChiffres(Aujourdhui.getSeconds());

    //Afficher la date et l'heure dans les div heure et date
    DivHeure.textContent = heures + ":" + minutes + ":" + secondes;
    DivDate.textContent = JourNom +" "+ JourNumero +" "+ Mois +" "+ annee;

    setTimeout(AfficheHeure, 1000); //Tourner toute les secondes
}

AfficheHeure(); //Lancer au début