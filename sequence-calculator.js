function compute() {
        const n = parseInt(document.getElementById('sequenceInput').value);
        let text = "";

        if (isNaN(n) || n <= 0) {
            text = "enter a valid positive integer";
        } else {
        let factorial = 1;
            for (let i = 1; i <= n; i++) {
                 factorial *= i;
            }

        let sum = 0, i = 1;
            do {
                sum += i;
                i++;
            } while (i <= n);

        let avg = sum / n;

            text =
                `factorial: ${factorial}\n` +
                `sum: ${sum}\n` +
                `average: ${avg.toFixed(2)}`;
        }

    document.getElementById("sequenceOutput").innerText = text;
    
    }