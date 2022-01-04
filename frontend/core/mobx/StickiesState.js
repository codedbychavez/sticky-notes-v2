import { makeAutoObservable } from "mobx"
import { MockStickies } from "../../mock/mock-stickies";
import { StickyModel } from "../models/StickyModel";

export class StickiesState {
    stickiesArr = MockStickies;

    constructor() {
        makeAutoObservable(this);
    }

    addSticky() {
        const stickyModel = new StickyModel('Add title', 'Add Content')
        this.stickiesArr.push(stickyModel);
    }
}

