import { makeAutoObservable } from "mobx"
import { MockStickies } from "../../mock/mock-stickies";
import { StickyModel } from "../models/StickyModel";

export class StickiesState {
    stickiesArr = MockStickies;

    constructor() {
        makeAutoObservable(this);
    }

    addSticky() {
        const stickyModel = new StickyModel(0, 'Add Title', 'Add content');
        this.stickiesArr.push(stickyModel);
    }

    removeSticky(sticky) {
        const indexOfSticky = this.stickiesArr.indexOf(sticky);
        this.stickiesArr.splice(indexOfSticky, 1);
    }
}

