import SearchData from '../enums/SearchData.json';

export class Util {

    constructor() {
        this.data = SearchData;
    }

    static getResponse() {
        var response = JSON.parse(JSON.stringify(SearchData));
        return response;
    }

    static getModels() {
        var response = Util.getResponse();
        var models = [];

        response.forEach(element => {

            if (element.model != undefined || element.model != null) {
                var obj = {};
                obj.value = element.url;
                obj.label = element.model;

                models.push(obj);
            }
        });

        return models;
    }
}
