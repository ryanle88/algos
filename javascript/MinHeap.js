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
        
    }
    
    siftDown(heap, idx, end) {
        
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
