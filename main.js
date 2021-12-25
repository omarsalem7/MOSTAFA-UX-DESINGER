// Start with your code from last challenge.
class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  // setup head and tail
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(number) {
    let newNode = new Node(number);
    newNode.next_node = null;
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next_node = newNode;
      this.tail = newNode;
    }
  }

  addAt(index, item) {
    let newNode = new Node(item);
    if (index === 0) {
      newNode.next_node = this.head;
      this.head = newNode;
      return true;
    }
    let prev = this.get_node(index - 1);
    let temp = prev.next_node;
    prev.next_node = newNode;
    newNode.next_node = temp;
    return true;
  }

  get_node(index) {
    let count = 0;
    let p = this.head;
    if (!this.head) {
      return null;
    }

    while (p) {
      if (count === index) {
        return p;
      }
      p = p.next_node;
      count++;
    }
  }

  get(index) {
    let count = 0;
    let p = this.head;
    if (!this.head) {
      return null;
    }

    while (p) {
      if (count === index) {
        return p.value;
      }
      p = p.next_node;
      count++;
    }
  }

  remove(index) {
    let prev = this.get_node(index - 1);
    let removed = prev.next_node;
    if (!this.get_node(index).next_node) {
      prev.next_node = null;
      return true;
    }

    prev.next_node = removed.next_node;
  }
}

// => 5
// ****************************
const list = new LinkedList();

list.add(8)
list.add(3)
list.addAt(1, 5)
list.addAt(2, 4)
list.remove(1)

console.log(list.get(2));
