export abstract class Sorter {
    abstract compare(leftIndex: number, rightIndex: number) : boolean;
    abstract swap(leftIndex: number, rightIndex: number) : void;
    abstract length: number;

    sort() : void {
        const { length } = this;

        for (let i = 0; i < length; i++) {
            for (let j=0; j < length - i - 1; j++) {
                if (this.compare(j, j+1)) {
                    this.swap(j, j+1);
                }
            }
        }
    }
};

export class NumbersCollection extends Sorter {
    constructor(public data: number[]) {
        super();
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number) : boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number) : void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
};

export class CharactersCollection extends Sorter {
    constructor(public data: string) {
        super();
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number) : boolean {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }

    swap(leftIndex: number, rightIndex: number) : void {
        const characters = this.data.split('');
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;

        this.data = characters.join('');
    }
};

    class NodeSort {
        next: NodeSort | null = null;
    
        constructor(public data: number) {}
    }
  
  export class LinkedList extends Sorter {
    head: NodeSort | null = null;
  
    add(data: number): void {
      const node = new NodeSort(data);
  
      if (!this.head) {
        this.head = node;
        return;
      }
  
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
  
      tail.next = node;
    }
  
    get length(): number {
      if (!this.head) {
        return 0;
      }
  
      let length = 1;
      let node = this.head;
      while (node.next) {
        length++;
        node = node.next;
      }
  
      return length;
    }
  
    at(index: number): NodeSort {
      if (!this.head) {
        throw new Error('Index out of bounds');
      }
  
      let counter = 0;
      let node: NodeSort | null = this.head;
      while (node) {
        if (counter === index) {
          return node;
        }
  
        counter++;
        node = node.next;
      }
  
      throw new Error('Index out of bounds');
    }
  
    compare(leftIndex: number, rightIndex: number): boolean {
      if (!this.head) {
        throw new Error('List is empty');
      }
  
      return this.at(leftIndex).data > this.at(rightIndex).data;
    }
  
    swap(leftIndex: number, rightIndex: number): void {
      const leftNode = this.at(leftIndex);
      const rightNode = this.at(rightIndex);
  
      const leftHand = leftNode.data;
      leftNode.data = rightNode.data;
      rightNode.data = leftHand;
    }
  
    print(): void {
      if (!this.head) {
        return;
      }
  
      let node: NodeSort | null = this.head;
      while (node) {
        console.log(node.data);
        node = node.next;
      }
    }
  }
  
  

// const numbersCollection = new NumbersCollection([50,3,-5,0]);
// numbersCollection.sort();
// console.log(numbersCollection.data);


