export default class Website {
    id: number;
    name: string;
    url: string;
    search: string[];
    categories: string[];
    selected: boolean;

    constructor(
        id: number,
        name: string,
        url: string,
        search: string[],
        categories: string[],
    ) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.search = search;
        this.categories = categories;
        this.selected = false;
    }
}