export class Quote {
    showDescription: boolean;
  
    constructor(public id: number,public title: string,public quote: string,public author: string, public name: string,public completeDate: Date,public upvote:number, public downvote:number){
      this.showDescription=false;
    }
 }