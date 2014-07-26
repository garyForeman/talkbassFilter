talkbassFilter
==============

Author: Gary Foreman  
email: gforema2@illinois.edu  
[talkbass classifieds](http://www.talkbass.com/categories/classifieds-bg.252/) 

For now, run the price filter using the Firefox Web Developer console. First, 
select the talkbass classifieds forum you wish to browse. Then, go to 
Tools -> Web Developer -> Web Console. Copy and paste the contents of 
`filter.js` at the command line. I will implement a more sophisticated method 
for running the script in the future.

Currently, the price filter is what I'll call "soft." It filters out only 
threads that explicitly do not fall within the user specified price range. 
Threads that do not include a price listing, and threads that don't contain
an actual price under the price listing are not filtered. Future versions of 
the filter will include a user option for a "hard" or "soft" filter.
