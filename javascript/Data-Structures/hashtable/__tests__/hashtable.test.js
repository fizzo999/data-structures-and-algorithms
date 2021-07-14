"use strict";

const Hashmap = require("../hashtable.js");
let hashmap = new Hashmap(10);

hashmap.add("fizzo", "pannosch");
hashmap.add("michelle", "pannosch");
hashmap.add("dodo", "pannosch");
hashmap.add("friedrich", "pannosch");
hashmap.add("brigitte", "pannosch");
hashmap.add("ernst", "pannosch");
hashmap.add("karl", "pannosch");
hashmap.add("sam", "pannosch");

describe("=======>>>>>>> Hashmap <<<<<<<=======", () => {
  it("should successfully add a key/value pair to the hashtable ", () => {
    expect(hashmap.contains("fizzo")).toEqual(true);
    expect(hashmap.contains("michelle")).toEqual(true);
    expect(hashmap.contains("john")).toEqual(false);
  });

  it('should successfully return a value based on a key or a message of "nothing found for key:"', () => {
    expect(hashmap.get("michelle")).toEqual(["michelle : pannosch"]);
    expect(hashmap.get("fizzo")).toEqual(["fizzo : pannosch"]);
    expect(hashmap.get("john")).toEqual("nothing found for key:john");
  });

  it("should successfully return null when a key does not exist in the hashtable ", () => {
    expect(hashmap.contains("john")).toEqual(false);
    expect(hashmap.contains("roger")).toEqual(false);
    expect(hashmap.get("john")).toEqual("nothing found for key:john");
  });

  it("should successfully add a key/value to the hashtable ", () => {
    hashmap.add("anabelle", "cat");
    expect(hashmap.contains("anabelle")).toEqual(true);
    expect(hashmap.get("anabelle")).toEqual(["anabelle : cat"]);
    hashmap.add("michelle", "rossee");
    expect(hashmap.contains("michelle")).toEqual(true);
    expect(hashmap.get("michelle")).toEqual([
      "michelle : rossee",
      "michelle : pannosch",
    ]);
  });
});
