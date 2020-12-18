# You are given an m x n integer grid accounts where accoutns[i][j] is the amount of mony the ith cusomer has in the jth bank.
# Return the wealth that the richtest customer has.

def maximumWealth(self,accounts):
   max_wealth = float('-inf')
   for account in accounts:
      account_wealth = 0
      for bank in account:
         account_wealth += bank
      if account_wealth > max_wealth:
         max_wealth = account_wealth
   return max_wealth