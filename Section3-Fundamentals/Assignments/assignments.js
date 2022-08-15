//== i === assignment
/*
const numNeighbours = prompt("How many neighbours does your contry have?");
if (Number(numNeighbours) === 1) {
    console.log('only one neighbor');
} else if (numNeighbours > 1) {
    console.log('More than one border');
} else {
    console.log('No borders');
}*/

// switch assignment

const jezik = prompt("Koji je vas nacionalni jezik?");

switch (jezik) {
    case 'Mandarin':
    case 'Chinese':
        console.log("Your language has MOST number of native speakers");
        break;
    case 'Spanish':
        console.log("Your language has second most number of native speakers");
        break;
    case 'English':
        console.log("Your language has third most number of native speakers");
        break;
    case 'Hindi':
        console.log("Your language has fourth most number of native speakers");
        break;
    case 'Arabic':
        console.log("Your language has fifth most number of native speakers");
        break;
    default:
        console.log("Your language is also cool");

}