'use strict'

const AnimalShelter = require('../fifo-animal-shelter.js');
const Animal = require('../animal.js');

describe('ANIMAL SHELTER',()=>{
    const shelter = new AnimalShelter();
    let cat1 = new Animal('testCat001','cat')

    it('can add a dog to the shelter',()=>{
        let dog = new Animal('Scoobeedoo','dog')
        shelter.enqueue(dog)
        expect(shelter.dog.length).toEqual(1)
        expect(shelter.dog[0]).toEqual(dog)
    })

    it('can add multiple cats to the shelter',()=>{
        let cat2 = new Animal('testCat002','cat')
        shelter.enqueue(cat1)
        shelter.enqueue(cat2)
        expect(shelter.cat.length).toEqual(2)
        // expect(shelter.cat[shelter.cat.next]).toEqual(cat1)
        expect(shelter.cat[0]).toEqual(cat1)
        expect(shelter.cat[1]).toEqual(cat2)
    })

    it('gives an error when entering an animal that is not a cat/dog',()=>{
        let ferret = new Animal('bozo','ferret')
        expect(shelter.enqueue(ferret)).toEqual('We only take cats and dogs')
    })

    it('not adding a preference on dequeue should return null',()=>{
        expect(shelter.dequeue()).toEqual(null)
    })

    it('should return the animal that was first added for each animal',()=>{
        expect(shelter.dequeue('cat')).toEqual(cat1)
    })

    it('should return false for dequeueing an empty queue',()=>{
        shelter.dequeue('dog')
        expect(shelter.dequeue('dog')).toBeFalsy()
    })
})