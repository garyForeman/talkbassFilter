talkbassFilter
==============

Author: Gary Foreman  
email: gforema2@illinois.edu  
[talkbass classifieds](http://www.talkbass.com/categories/classifieds-bg.252/) 

For now, run the price filter using the Firefox Web Developer console. First, 
select the talkbass classifieds forum you wish to browse. Then, go to 
Tools -> Web Developer -> Web Console. Copy and paste the contents of 
`filter.js` at the command line. Greasemonkey implementation coming soon.

SOFT filter
-----------

The soft filter only removes threads that explicitly lie outside the specified 
price range. The following type of threads will continue to be displayed: 
- Threads without a price listing 
- Threads with a price listing that cannot be converted to a float 
- "For Trade" threads 
- "SOLD," "TRADED," and "No longer available" threads 

HARD filter
-----------

The hard filter only displays threads that explicitly lie inside the specified 
price range. "SOLD," "TRADED," and "No longer available" threads are also 
removed.
