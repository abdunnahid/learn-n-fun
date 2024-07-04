class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

export class LinkedList {

    constructor(head = null) {
        this.head = head;
    }

    getLastNode() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    addNode(val) {
        const newNode = new ListNode(val);

        const lastNode = this.getLastNode();

        if (!lastNode) {
            this.head = newNode;
            return this.head;
        }

        lastNode.next = newNode;
        return this.head;
    }

    addRange(arr) {
        for (const item of arr) {
            this.addNode(item);
        }
        return this.head;
    }

    toArray(head) {

        const arr = [];
        let node = head || this.head;
        
        while (node) {
            arr.push(node.val);
            node = node.next;
        }

        return arr;

    }

}

const main = () => {
    const input = [0, 1, 0, 3, 0, 2, 2, 0];
    const linkedList = new LinkedList();
    const head = linkedList.addRange(input);
    const lastNode = linkedList.getLastNode();
    const testArr = linkedList.toArray();
    
    console.log("head: ", JSON.stringify(head, null, 2));
    console.log("lastNode: ", lastNode);
    console.log("testArr: ", testArr);
}

// main();
