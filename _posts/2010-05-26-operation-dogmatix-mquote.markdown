--- 
permalink: /operation-dogmatix-mquote
layout: post
title: Operation Dogmatix - mQuote
published: true
categories: 
- idea
- startup
---
<p class="post-image"><img src="/images/d.gif" alt="Operation Dogmatix - mQuote" /></p>

When you realize that you have hit on a very innovative method to retrieve real time information without the need of internet right on your mobile phone, your imagination runs wild. cricket scores, santa-banta jokes, train/bus status lookup come to your mind. One category that emerged in my mind out of this noise was stock quotes lookup. <br /> <!--more--><br />I am not a day trader. But in the last 10 years, investing in couple of stocks here and there, losing money and gaining a handsome in the bargain, I have learnt that stocks are an integral part of anyone's investment portfolio. And I am not talking because of their sky rocketing returns in some cases. I am talking about starting early, and collecting some heavy weight stocks with a long term horizon. Maybe for my daughter's wedding. why not? But this is not an investment advice forum is it? Sorry got digressed.

If you own couple of stocks, you do want to know their value the moment market opens and you are in your bus or car driving to office. You are maybe on an offsite team building exercise and can do without checking mails, but not your stock value. What do you do? Well that was the eureka moment if you call it, that set me off to create this mQuote application (<a href="http://mquote.heroku.com">http://mquote.heroku.com</a>). 

I had to figure out a way to get real time quote from as direct a source possible and as little html scraping if possible. Direct so that the information is as real time as possible, and little html scrapping so I don't have to change my application when the source re-lays out the site. To my luck, by doing some reverse engineering on <a href="http://bseindia.com">bseindia</a> website, I discovered that bseindia did provide stock quote as a web service in comma separated values. I had to spoof HTTP_REFERER header in my request, to hoodwink bseindia in believing that the request originated from it's own website. Other than that it was a piece of cake, and I actually patted myself for the simplicity of the solution.

This is one of those ideas with absolutely zero revenue potential. But you do a kick out of seeing some 200 odd requests being made everyday using your service. That's like 6000 hits on your website. Huge!!

I do have plans of actually creating a small website where people can create their portfolios and can track net worth of their portfolio over SMS. But given that I have not done it in the last 5 months, I don't imagine doing it anytime in near future as well. If anyone is excited about taking this forward and has the bandwidth to code, do give it a shout. Would love to have some helping hands here.

[Photo Credit: <a href="http://www.asterix.com/encyclopedia/characters/dogmatix.html">http://www.asterix.com/encyclopedia/characters/dogmatix.html</a> ]
