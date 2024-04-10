function activationKeys(input) {
    let key = input.shift().split('');

    for (let command of input) {
        let newCommand = command.split('>>>');
        if (newCommand[0] === 'Slice') {
            let startIdx = Number(newCommand[1]);
            let endIdx = Number(newCommand[2]);
            key.splice(startIdx, endIdx - startIdx);
            console.log(key.join(``));
        } else if (newCommand[0] === 'Contains') {
            let substring = newCommand[1];
            if (key.join('').includes(substring)) {
                console.log(`${key.join('')} contains ${substring}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (newCommand[0] === 'Flip') {
            let startIdx = Number(newCommand[2]);
            let endIdx = Number(newCommand[3]);

            if (newCommand[1] === 'Upper') {
                for (let i = startIdx; i <= endIdx; i++) {
                    key[i] = key[i].toUpperCase();
                }
                console.log(key.join(``));
            } else if (newCommand[1] === 'Lower') {
                for (let i = startIdx; i <= endIdx; i++) {
                    key[i] = key[i].toLowerCase();
                }
                console.log(key.join(``));
            }
        } else if (newCommand[0] === 'Generate') {
            console.log(`Your activation key is: ${key.join('')}`);
        }
    }
}

activationKeys((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
);
