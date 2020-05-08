export class TwoWayIterator<T> {
    
    private contents: T[] = [];
    private index = -1;
    
    constructor(things: T[]) {
        this.contents.push(...things);
    }
    
    public hasNext(): boolean {
        return (this.contents[this.index + 1] != null);
    }
    
    public hasPrevious(): boolean {
        return (this.contents[this.index + 1] != null);
    }
    
    public current(): T {
        return this.contents[this.index];
    }
    
    public next(): T {
        if (this.hasNext()) {
            return this.contents[++this.index];
        }
        throw new RangeError("Next called at end of iterator.");
    }
    
    public previous(): T {
        if (this.hasPrevious()) {
            return this.contents[--this.index];
        }
        throw new RangeError("Previous called at beginning of iterator.");
    }

}