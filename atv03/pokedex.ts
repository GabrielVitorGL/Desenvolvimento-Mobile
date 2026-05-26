interface TypeInfo {
    name: string;
}

interface PokeSlot {
    type: TypeInfo;
}

interface PokeData {
    name: string;
    height: number;
    weight: number;
    types: PokeSlot[];
}

async function search() {
    let input = process.argv[2];

    if (!input) {
        console.log("erro: você precisa passar o nome ou id do pokemon");
        return;
    }

    try {
        let url = "https://pokeapi.co/api/v2/pokemon/" + input.toLowerCase();
        let response = await fetch(url);

        if (response.status === 404) {
            console.log("❌ Pokémon não encontrado!");
            return;
        }

        let data = await response.json() as PokeData;

        let pokeName = data.name;
        let upperName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);

        let height = data.height / 10;
        let weight = data.weight / 10;

        let typeList = "";
        for (let index = 0; index < data.types.length; index++) {
            let currentType = data.types[index];
            
            if (currentType) {
                let typeName = currentType.type.name;
                let upperType = typeName.charAt(0).toUpperCase() + typeName.slice(1);
                
                typeList = typeList + upperType;
                
                if (index < data.types.length - 1) {
                    typeList = typeList + ", ";
                }
            }
        }

        console.log(upperName + " - " + height + " m - " + weight + " kg - " + typeList);

    } catch (err) {
        console.log("⚠️ Erro de rede. Tente novamente.");
    }
}

search();