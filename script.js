// Data for each category
const categories = {
    bosses: [
      "Abyssal Sire", "Alchemical Hydra", "Amoxliatl", "Araxxor", "Barrows Chests", "Bryophyta", "Callisto and Artio", "Cerberus", "Chaos Elemental", "Chaos Fanatic", "Commander Zilyana", "Corporeal Beast", "Crazy archaeologist", "Dagannoth Kings", "Duke Sucellus", "The Fight Caves", "Fortis Colosseum", "The Gauntlet", "General Graardor", "Giant Mole", "Grotesque Guardians", "Hespori", "The Inferno", "Kalphite Queen", "King Black Dragon", "Kraken", "Kree'arra", "K'ril Tsutsaroth", "The Leviathan", "Moons of Peril", "Nex", "The Nightmare", "Obor", "Phantom Muspah", "Sarachnis", "Scorpia", "Scurrius", "Skotizo", "Tempoross", "Thermonuclear smoke devil", "Vardorvis", "Venenatis and Spindel", "Vet'ion and Calvar'ion", "Vorkath", "The Whisperer", "Wintertodt", "Zalcano", "Zulrah"
    ],
    raids: [
      "Chambers of Xeric", "Theatre of Blood", "Tombs of Amascut"
    ],
    clues: [
      "Beginner Treasure Trails", "Easy Treasure Trails", "Medium Treasure Trails", "Hard Treasure Trails", "Elite Treasure Trails", "Master Treasure Trails"
    ],
    minigames: [
      "Barbarian Assault", "Brimhaven Agility Arena", "Castle Wars", "Fishing Trawler", "Giants' Foundry", "Gnome Restaurant", "Guardians of the Rift", "Hallowed Sepulchre", "Last Man Standing", "Magic Training Arena", "Mahogany Homes", "Master mixology", "Pest Control", "Rogues' Den", "Shades of Mort'ton", "Soul Wars", "Temple Trekking", "Tithe Farm", "Trouble Brewing", "Volcanic Mine"
    ],
    other: [
      "Aerial Fishing", "All Pets", "Camdozaal", "Champion's Challenge", "Chaos Druids", "Chompy Birds", "Creature Creation", "Cyclopes", "Forestry", "Fossil Island Notes", "Glough's Experiments", "Hunter Guild", "Monkey Backpacks", "Motherlode Mine", "My Notes", "Revenants", "Rooftop Agility", "Shayzien Armour", "Shooting Stars", "Skilling Pets", "Slayer", "Tormented Demons", "TzHaar", "Miscellaneous"
    ]
  };
  
    document.getElementById("roll-button").addEventListener("click", () => {
    const category = document.getElementById("category").value;
    
    const allItems = Object.values(categories).flat();
    const items = category === "any" ? allItems : categories[category];
    
    const randomItem = items[Math.floor(Math.random() * items.length)];
    document.getElementById("roll-result").textContent = randomItem;
  });