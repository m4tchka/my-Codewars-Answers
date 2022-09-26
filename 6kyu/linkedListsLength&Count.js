"https://www.codewars.com/kata/55beec7dd347078289000021"

// NOTE: Practice traversal

function Node(data) {
    this.data = data;
    this.next = null;
}
function length(head) {
    let length = 0;
    if (head) {
        length++;
        let currentNode = head;
        while (currentNode.next) {
            length++;
            currentNode = currentNode.next;
        }
    }
    return length;
}
function count(head, data) {
    let count = 0;
    if (head) {
        let currentNode = head;
        if (currentNode.data == data) {
            count++;
        }
        while (currentNode.next) {
            currentNode = currentNode.next;
            if (currentNode.data === data) {
                count++;
            }           
        }
    }
    return count;
}