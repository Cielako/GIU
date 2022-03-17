
let tekst = 'Dawno, dawno temu żył sobie Kubuś Puchatek. Bardzo lubił poranne spacery po lesie ze swoimi przyjaciółmi. Chętni jadł wszystko, a najchętniej miodek. Lubił bawić się zabawkami sam, a jeszcze bardziej ze swoimi przyjaciółmi. Jego ulubioną zabawą była zabawa w chowanego. Pewnego razu zaginął najlepszy przyjaciel Kubusia, czyli Krzyś. został po min tylko list:<br>"Ratunku! Zostałem porwany przez potwora Edmunda!"<br>Kubuś bardzo się zmartwił, kiedy przeczytał list. Chodził po lesie i wołał: "Krzysiu, Krzysiu, gdzie jesteś?!"<br>Ale nie znalazł ani Krzysia, ani potwora Edmunda. O pomoc w poszukiwaniach poprosił więc wszystkich swoich przyjaciół: Prosiaczka, Tygryska, Maleństwo, królika i Kłapouchego. Teraz wszyscy razem chodzili po lesie i wołali Krzysia. Niestety również bez rezultatu. Pod wieczór wszyscy byli już bardzo zmęczeni długimi poszukiwaniami. Kłapouchy pierwszy zaproponował, żeby przerwać akcję ratunkową i poszli spać do swoich domów.';
let map = new Map();
                        // gm powtarza replace (?) g - greedy chciwy, m - many
let words = tekst.replace(/(\r\n|\n|\r)/gm, "").split(/[ !();':",.]+/);
for(let i = 0; i < words.length; i++){
    if(words[i] != "" && !(map.has(words[i]))){
        map.set(words[i], 1);
    }
    else if(words[i] != "" && map.has(words[i])){
        map.set(words[i], (map.get(words[i])+1));
    }
}

map = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

let i = 0;
for (let entries of map){
    i++;
    console.log(i + ". " + entries[0] + ": " + entries[1]);
    if(i == 20) break;
}
