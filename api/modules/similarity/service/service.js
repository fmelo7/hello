class Similarity {
    static levenshteinDistance(s1, s2) {
        const longer = s1.length > s2.length ? s1 : s2;
        const shorter = s1.length > s2.length ? s2 : s1;
        const longerLength = longer.length;
        const ret = longerLength === 0 ? 1.0 : (longerLength - this.editDistance(longer, shorter)) / parseFloat(longerLength);
        return ret;
    }

    static editDistance(s1, s2) {
        const p1 = s1.toLowerCase();
        const p2 = s2.toLowerCase();
        const costs = [];

        p1.split('').forEach((c1, i) => {
            let lastValue = i;
            p2.split('').forEach((c2, j) => {
                if (i === 0) costs[j] = j;
                else if (j > 0) {
                    let newValue = costs[j - 1];
                    if (p1.charAt(i - 1) !== p2.charAt(j - 1)) newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            });
            if (i > 0) costs[p2.length] = lastValue;
        });

        return costs[p2.length];
    }

    static soundex(s) {
        const a = s.toLowerCase().split('');
        const f = s === '' ? '0' : a.shift();
        let r = '';
        const codes = {
            a: '',
            e: '',
            i: '',
            o: '',
            u: '',
            b: 1,
            f: 1,
            p: 1,
            v: 1,
            c: 2,
            g: 2,
            j: 2,
            k: 2,
            q: 2,
            s: 2,
            x: 2,
            z: 2,
            d: 3,
            t: 3,
            l: 4,
            m: 5,
            n: 5,
            r: 6
        };
        r =
            f +
            a
                .map(v => codes[v])
                .filter((v, i) => (i === 0 ? v !== codes[f] : v !== a[i - 1]))
                .join('');

        return `${r}000`.slice(0, 4).toUpperCase();
    }
}

module.exports = Similarity;
