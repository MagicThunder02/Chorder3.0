import { Chord } from "@tonaljs/tonal";

export class ChorderChord {

    name?: string[];
    symbol?: string;
    tonic?: string;
    root?: string;
    type?: string;
    aliases?: string[];
    intervals?: { symbols: string[], quality: string[], numbers: String[] };
    extensions?: { open: boolean, values: string[] };
    reductions?: { open: boolean, values: string[] };
    notes?: string[];
    quality?: string;
    show?: boolean;
    disabled?: boolean;
    empty?: boolean;

    constructor(private chordName?: string) {
        if (chordName) {
            this.assembleChord(chordName);
        }
        else {
            this.empty = true;
        }
    }

    assembleChord(chordName) {
        let tmpChord = Chord.get(chordName);
        this.symbol = tmpChord.symbol;
        this.name = tmpChord.name.split(" ");
        this.tonic = tmpChord.tonic;
        this.root = tmpChord.root;
        this.intervals = {
            symbols: tmpChord.intervals,
            quality: this.intervalToQuality(tmpChord.intervals),
            numbers: this.intervalToNumber(tmpChord.intervals)
        };
        this.aliases = tmpChord.aliases;
        this.type = tmpChord.type;
        this.notes = tmpChord.notes;
        this.extensions = { open: false, values: Chord.extended(tmpChord.symbol) };
        this.reductions = { open: false, values: Chord.reduced(tmpChord.symbol) };
        this.quality = tmpChord.quality;
        this.disabled = false;
        this.empty = tmpChord.empty;
    }

    private intervalToNumber(intervals: string[]) {
        return intervals.map(interval => {
            let number = "";
            // console.log(interval.slice(0, -1), interval)


            switch (interval.slice(0, -1)) {
                case "1":
                    number = "unison";
                    break;
                case "2":
                    number = "second";
                    break;
                case "3":
                    number = "third";
                    break;
                case "4":
                    number = "fourth";
                    break;
                case "5":
                    number = "fifth";
                    break;
                case "6":
                    number = "sixth";
                    break;
                case "7":
                    number = "seventh";
                    break;
                case "8":
                    number = "seventh";
                    break;
                case "9":
                    number = "ninth";
                    break;
                case "11":
                    number = "eleventh";
                    break;
                case "13":
                    number = "thirteenth";
                    break;
            }

            return number;
        })
    }

    private intervalToQuality(intervals: string[]) {
        return intervals.map(interval => {
            let quality = "";

            switch (interval[interval.length - 1]) {
                case "P":
                    if (interval[0] != "1") {
                        quality = "perfect"
                    }
                    break;
                case "m":
                    quality = "minor"
                    break;
                case "M":
                    quality = "major"
                    break;
                case "d":
                    quality = "diminished-f"
                    break;
                case "A":
                    quality = "augmented-f"
                    break;
            }

            return quality;
        })
    }
}