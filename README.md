# TodoList : Solidity Truffle NextJs Tailwind
```
1:  Truffle init.
2.  Setting config truffle-config.js.
3.  Create a new smart contract TodoList.sol on folder contracts.
4.  Add TodoList to 1_initial_migration.js so that we can deploy TodoList.sol on Folder migrations
5.  truffle compile
6.  truffle migrate --reset
7.  Run truffle console to check previous work : truffle console

```
# Front-end
```
1.  npm i @truffle/contract web3
2.  Create folder src/funcs.js
   - async loadWeb3 : interacting with wallet metamask
   - async loadAccount : get address account wallet
   - async loadContract : get contracts file TodoList.json
   
3.  App.js
    - Set state and render
```


#  Reference
```
https://github.com/hyc0812/todo-list-web3-eth
```
