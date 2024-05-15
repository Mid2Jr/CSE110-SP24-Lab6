describe('Basic user flow for Website', () => {
    // First, visit the lab 8 website

    beforeAll(async () => {
    
      // Go to your site
      await page.goto('https://mid2jr.github.io/CSE110-SP24-Lab6/');
    });
  
    it('Check add note feature', async () => {
      console.log('Checking add note feature...');
      
      const element = await page.$('.add-note');
      await element.click();
      const note = await page.$$('.note')
      const noteCounts = note.length;
      
      expect(noteCounts).toBe(1);
    
    }, 10000);
    it('Check hovering over add note button', async () => {
      console.log('Checking hovering feature...');
      
      const element = await page.$('.add-note');
      await element.hover();
      let txt = await element.getProperty('innerText');
      txt = await txt.jsonValue();
      expect(txt).toBe('+');
    
    }, 10000);
    it('Check double click to delete', async () => {
      console.log('Checking double click feature...');
      
      const addNote = await page.$('.add-note');
      await addNote.click();
      await addNote.click();
      const notes = await page.$$('.note');
      await notes[0].click({ clickCount: 2 })
      
    
      const final = await page.$$('.note');
      const noteCounts = final.length;
      
      expect(noteCounts).toBe(2);
    
    }, 10000);


  });
  