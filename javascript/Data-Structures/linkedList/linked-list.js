"use strict";

const Node = require("./node.js");

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    let brandNewNode = new Node(value);
    if (!this.head) {
      this.head = brandNewNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = brandNewNode;
    }
    // the whole list
    return this;
  }

  insert(value) {
    let brandNewHeadNode = new Node(value);
    if (!this.head) {
      this.head = brandNewHeadNode;
    } else {
      brandNewHeadNode.next = this.head;
      this.head = brandNewHeadNode;
    }
    return this;
  }

  includes(value) {
    if (!this.head) {
      console.log("empty list");
      return null;
    } else {
      let current = this.head;
      while (current.next) {
        if (current.value === value) {
          console.log("WE FOUND IT", current);
          return true;
        }
        current = current.next;
      }
      return false;
    }
  }

  toString() {
    let solution = "";
    if (!this.head) {
      console.log("empty list");
      return null;
    } else {
      let current = this.head;
      while (current.next) {
        solution = solution + `{${current.value}} -> `;
        current = current.next;
      }
      solution = solution + `{${current.value}} -> NULL`;
    }
    console.log("=============================", solution);
    return solution;
  }

  insertBefore(value, newVal) {
    let brandNewNode = new Node(newVal);
    if (!this.head) {
      console.log("empty list");
      return "empty list";
    } else if (this.head.value === value) {
      brandNewNode.next = this.head;
      this.head = brandNewNode;
      return "BRAND NEW HEAD NODE CREATED", this;
    } else {
      let current = this.head;
      while (current.next) {
        if (current.next.value === value) {
          console.log("WE FOUND THE ONE BEFORE INSERTION", current);
          brandNewNode.next = current.next;
          current.next = brandNewNode;
          return "WE INSERTED THE NEW NODE", this;
        }
        current = current.next;
      }
      return "NO SUCH VALUE FOUND", this;
    }
  }

  insertAfter(value, newVal) {
    let brandNewNode = new Node(newVal);
    if (!this.head) {
      console.log("empty list");
      return "empty list";
    } else {
      let current = this.head;
      while (current.next) {
        if (current.value === value) {
          console.log("WE FOUND THE ONE WE WANT TO INSERT AFTER", current);
          brandNewNode.next = current.next;
          current.next = brandNewNode;
          return "WE INSERTED THE NEW NODE after THE VALUE FOUND", this;
        }
        current = current.next;
        if (current.next === null) {
          current.next = brandNewNode;
          return (
            "WE FOUND THE VALUE AT THE VERY END AND APPENDED THE VALUE", this
          );
        }
      }
      return "NO SUCH VALUE FOUND", this;
    }
  }

  kthFromEnd(k) {
    if (typeof k !== "number") {
      return "Dude, what are you doing ? this is not a number, I mean,.... really?";
    } else if (!this.head) {
      return "The link list is empty";
    } else if (k < 0) {
      return "Dude, what are you doing with negative inputs, I mean,.... really?";
    } else {
      let current = this.head;
      let counter = 1;
      while (current.next) {
        current = current.next;
        counter++;
      }
      // now we know the length of the list
      console.log(
        "your list is ++++++++++++++++++++++++ this long",
        counter,
        current
      );
      if (+k + 1 > counter) {
        return "The link list isn`t that long !!!";
      } else {
        // again go from the start
        current = this.head;
        let desiredPosition = counter - k + 1;
        if (counter === k)
          return "your list is ++++++++++++++++++++++++ this long";
        let newPosition = 1;
        while (current.next && newPosition < desiredPosition) {
          current = current.next;
          newPosition++;
        }
        console.log("YAY we found it ===+++=== we have arrived", current);
        return current.value;
      }
    }
  }

  // findMiddle() {

  //   return this;
  // }
  // reverse() {

  //   return this;
  // }
}

module.exports = LinkedList;
