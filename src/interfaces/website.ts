export default class Website {
    id: number;
    name: string;
    url: string;
    search: string;
    lastValue: string;
    categories: string[];
    concat: string;
    selected: boolean;

    constructor(
        id: number,
        name: string,
        url: string,
        search: string,
        lastValue: string,
        categories: string[],
        concat: string
    ) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.search = search;
        this.lastValue = lastValue;
        this.categories = categories;
        this.concat = concat;
        this.selected = false;
    }
}