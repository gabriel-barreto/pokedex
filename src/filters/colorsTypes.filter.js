export default (type, forced = null) => {
    if (!type) return "";
    if (forced) return forced;
    const colors = {
        normal: "#575151",
        dragon: "#1c226b",
        steel: "#8ea6b4",
        fairy: "#f361af",
        water: "#3498db",
        fighting: "#921224",
        bug: "#a2c11c",
        ice: "#d5eeff",
        grass: "#7bc74d",
        poison: "#8109b7",
        flying: "#4d7cae",
        psychic: "#d38cad",
        fire: "#dd0a35",
        rock: "#4e413b",
        ghost: "#3b0944",
        electric: "#f8b500",
        ground: "#a2792f"
    };
    if (!Object.keys(colors).includes(type)) {
        return "#e0e0e0";
    }
    return colors[type];
};
