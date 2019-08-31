import {ProdComponent} from './app.component';

describe('ProdComponent', () => {
    let component = new ProdComponent;
    // component = new DemoBeforeEachComponent;
    // let component: DemoBeforeEachComponent;
  
    beforeEach(() =>
    {
      //component = new DemoBeforeEachComponent; 
    })
   
    afterEach(() =>
    { 
      //cleanup after each test, if any
    })
  
    beforeAll(() => 
    {
      //executed once before all tests;
    })
  
   afterAll(() => 
    {
      //executed once after all tests;
    })
  
    it('should check string or not', ()=>
    {
        component.onClick();
        expect(() => {
            throw new Error("It is not a number");
        }).toThrow(); //initial value = 0; it should become 1
    })
    //this.totalVotes = 1;
  
    // it('should decrement totalVotes when downvoted', ()=>
    // {
    //   //this.totalVotes = 0;
    //   component.downVote();
    //   expect(component.totalVotes).toBe(-1);
      // expect(() => {
      //   throw new Error("This is the user defined error");
      // }).toThrow();
    //})
  
  });