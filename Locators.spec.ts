
//Locator- Identifies the elements on the Web page
//DOM(Document object model)- after less than symbol whatever written
// is called tag name(<label></label>)
//<label for ="username">Username</label>- called DOM
//1.CSS selector-2(priority)

// # - id attibute
// @ -xpath
//class attribute is written as = .class(might nt be unique in 
//nature not preferable if id is present)
//write css based on any attribute:
//[attribute='value']

//2.Xpath-3(priority)
//3.Getbylocator- 1(priority)
//Using parent child relationship- used if an elements not have 
//any specific locators

//4. Absolute xpath(/)- not recommended as it is very lengthy and 
// if any change in the DOM structure then it will break-
// /body/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]
// Relative xpath(//)- recommended as it is short and if any 
//  //h1/h2
// change in the DOM structure then it will not break
// syntax of xpath- //tagname[@attribute='value']
//syntax of relative xpath- //tagname[contains(@attribute,'value')]
// label, input etc are tag name
//dynamic handling includes-parent child,contains func,sibling etc


//Built-in locators- getbyrole, getbylabel, getbyplaceholder, getbytext, getbyalttext, getbytitle
//1.getbyrole- used for buttons, links, checkboxes, radio buttons etc

