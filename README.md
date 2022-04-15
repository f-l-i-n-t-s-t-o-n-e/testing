# testing

this is a minimum viable product for a trading interface where you can bet on coin prices or competitions like sports games in a fully non interactive way which means after you make a bet everything is handled behind the scenes and your winnings just show up in your account after the event has concluded

despite functioning it is still a work in progress. there are probably bugs

------------------------------------------------------------------------------------------------------------------------------------------

under construction:

- provide liquidity. users hit the Go button and the page uses their VEO to automatically offer bets on a wide variety of sports matches slightly undercutting professional odds scraped from a website

- load events faster. batching data from the server so everything can be done in one request will solve this

------------------------------------------------------------------------------------------------------------------------------------------

**INSTRUCTIONS**

After putting light-node-amoveo-master on your local machine, double click the below html file to get started.

    light-node-amoveo-master/src/js/trading.html

When you load the trading.html page for the first time, you will see something like the below.

Make sure to download your private key with the "Download Key" button. Next, copy your account's address with the "Copy Address" button and send it some VEO.

| ![image](https://user-images.githubusercontent.com/99594388/163622332-2786b1b6-5a29-46eb-923f-fcce9a51acb0.png) |
| ------ |

**HOW TO ACCEPT A TRADE OFFER**

  - Once the VEO sent to your account has confirmed, click the "Explore" link at the top of the page. The page will look something like this:

| ![image](https://user-images.githubusercontent.com/99594388/163634704-298ca635-ce0d-441b-b8a0-306f5eddcb76.png) |
| ------ |
  - This page lets you explore events and odds, accept trades, and manage your positions.

  - Let's say you want to find odds for the Chudley Cannons' quidditch match. Enter "Chudley Cannons" into the custom filter as seen in the below picture, hit Go then wait a few seconds.

  - You can see that there are odds offered for the match against the Falmouth Falcons on April 16th 2022.

| ![image](https://user-images.githubusercontent.com/99594388/163635643-717051db-4dd1-4cd2-8e07-63bf43294557.png) |
| ------ |
  - Click the "See Odds" button and you will be able to see all of the different offered odds on that particular match. It should look something like the below.

| ![image](https://user-images.githubusercontent.com/99594388/163636067-9d06466c-62e2-4854-a65a-59230b838247.png) |
| ------ |
  - Here you can see you are being offered odds of +150 if the described event "The Chudley Cannons will defeat The Falmouth Falcons in the competition starting on Apr 16 2022 (local time)" is false. So if the Falcons defeat the Cannons, you make money.

  - The amount of VEO you risk is 1 ("Risk: 1") and your profit is 1.5 ("Profit 1.5") meaning if you bet 1 VEO and win, you will be returned 2.5 VEO.

  - If you like these odds, hit the "Accept trade" button and this is what the page should look like:

| ![image](https://user-images.githubusercontent.com/99594388/163640758-5d34f418-3eb9-45b6-b606-58c8ef703735.png) |
| ------ |

  - You can see an Unconfirmed balance of -1.00501765 VEO, which is slightly more than the amount you risked because of transaction fees.

  - Once your accepted trade confirms your balance of VEO will decrease.

  - Once the trade has confirmed, hit the "Show" button next to "My Positions" to see your position. After hitting "Show", it will look like this:

| ![tempsnip4](https://user-images.githubusercontent.com/99594388/163648508-27ba2599-6dde-4d89-abce-e95358042b09.png) |
| ------ |

  - The 2.5 refers to the 2.5 VEO you get if you win the bet (1.5 from your counterparty plus the 1 you put in).

  - At this point, if you end up winning the bet, you don't need to do anything. After the event, the position will automatically be sold to an arbitrageur and just under 2.5 VEO will be added to your balance without you needing to act or keep the page open.

  - If you lose; however, all is not lost. You can press the "Concede" button in your positions to get a 0.05% VEO rebate after the event has concluded. Make sure you don't press this button before you know you lost for sure.

