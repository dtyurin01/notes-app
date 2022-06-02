
export default class Note {
    constructor(title,content) {
        this.title = title;
        this.content = content
    }
    get note(){
        return `title: ${this.title} content: ${this.content}`
    }
}


