"use strict";
class ActionStack {
    constructor() {
        this.actions = [];
    }
    performAction(action) {
        this.actions.push(action);
        console.log(`Performed: ${action}`);
    }
    undoAction() {
        if (this.actions.length > 0) {
            console.log(`Undoing: ${this.actions.pop()}`);
        }
        else {
            console.log("No actions to undo.");
        }
    }
}
const actionStack = new ActionStack();
actionStack.performAction("Added Laptop to Cart");
actionStack.performAction("Added Phone to Cart");
actionStack.undoAction();
