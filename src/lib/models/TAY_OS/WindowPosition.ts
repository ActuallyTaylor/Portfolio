export class WindowPosition {
    width: number = 0
    height: number = 0
    top: number
    left: number
    isDraggable: boolean = true
    isResizable: boolean = true
    centerAnchor: boolean = false
    isExpanded: boolean = false

    minWidth: number = 225;
    minHeight: number = 50;

    beforeExpandWidth: string = "";
    beforeExpandHeight: string = "";
    beforeExpandTop: number = 0;
    beforeExpandLeft: number = 0;
    beforeExpandDraggable: boolean = true;
    beforeExpandCenterAnchor: boolean = false;

    constructor(width: number, height: number, top: number, left: number, isDraggable: boolean, centerAnchor: boolean) {
        this.width = width;
        this.height = height;
        this.top = top;
        this.left = left;
        this.isDraggable = isDraggable;
        this.centerAnchor = centerAnchor;
    }
}