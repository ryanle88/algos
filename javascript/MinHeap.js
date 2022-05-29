class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    isEmpty() {
        return this.size()===0;
    }
    
    insert(val) {
        this.heap.push(val);
        this.siftUp(this.heap, this.heap.length-1);
    }
    
    pop() {
        this.swap(0, this.heap.length-1);
        let target = this.heap.pop();
        this.siftDown(this.heap, 0, this.heap.length-1);
        return target;
    }
    
    siftUp(heap, idx) {
        while (idx>0) {
            let parentIdx = this._parentIdx(idx);
            if (this.isSmallerThan(idx, parentIdx)) {
                this.swap(idx, parentIdx);
                idx = parentIdx;
            } else break;
        }
    }
    
    siftDown(heap, idx, end) {
        while (idx<end) {
            let leftIdx = this._leftIdx(idx);
            let rightIdx = this._rightIdx(idx);
            if ((leftIdx<=end && this.isSmallerThan(leftIdx, idx)) ||
               (rightIdx<=end && this.isSmallerThan(rightIdx, idx))) {
                let idxToSwap = leftIdx;
                if (rightIdx<=end && this.isSmallerThan(rightIdx, leftIdx)) {
                    idxToSwap = rightIdx;
                }
                this.swap(idx, idxToSwap);
                idx = idxToSwap;
            } else break;
        }
    }
    
    isSmallerThan(i, j) {
        return this.heap[i]<this.heap[j];
    }
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    
    _parentIdx(idx) {
        return Math.floor((idx-1)/2);
    }
    
    _leftIdx(idx) {
        return idx*2+1;
    }
    
    _rightIdx(idx) {
        return idx*2+2;
    }
}
