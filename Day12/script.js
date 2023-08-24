function calculateFLAMES() {
    const name1 = document.getElementById('name1').value.toLowerCase();
    const name2 = document.getElementById('name2').value.toLowerCase();

    // Remove spaces and convert names to lowercase
    const sanitizedName1 = name1.replace(/\s/g, '');
    const sanitizedName2 = name2.replace(/\s/g, '');

    // Create arrays from the names
    const name1Array = sanitizedName1.split('');
    const name2Array = sanitizedName2.split('');

    // Calculate the total length of both names
    const totalLength = name1Array.length + name2Array.length;

    // Compare letters in the two names and remove common letters
    for (let i = 0; i < name1Array.length; i++) {
        for (let j = 0; j < name2Array.length; j++) {
            if (name1Array[i] === name2Array[j]) {
                name1Array.splice(i, 1);
                name2Array.splice(j, 1);
                i--;
                break;
            }
        }
    }

    // Calculate the remaining letters
    const remainingLetters = name1Array.length + name2Array.length;

    // Define FLAMES options
    const flamesOptions = ['Friends', 'Love', 'Affection', 'Marriage', 'Enemies', 'Siblings'];

    // Calculate the relationship based on the remaining letters
    while (flamesOptions.length > 1) {
        const indexToRemove = (remainingLetters % flamesOptions.length) - 1;
        if (indexToRemove >= 0) {
            flamesOptions.splice(indexToRemove, 1);
        } else {
            flamesOptions.splice(flamesOptions.length - 1, 1);
        }
    }

    // Display the result
    const result = document.getElementById('result');
    result.textContent = `Your relationship is: ${flamesOptions[0]}`;
}