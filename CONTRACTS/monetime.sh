
cleos create account eosio dappowner1 EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn
cleos create account eosio dappowner2 EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn
cleos create account eosio dappowner3 EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn
cleos create account eosio dappowner4 EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn
cleos create account eosio dappowner5 EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn

cleos create account eosio subscriber1 EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn
cleos create account eosio subscriber2 EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn
cleos create account eosio subscriber3 EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn
cleos create account eosio subscriber4 EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn
cleos create account eosio subscriber5 EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn

cleos create account eosio token EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn
cleos create account eosio monetime EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn
cleos create account eosio mondapp EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn

cleos push action eosio updateauth '{"account":"monetime","permission":"active","parent":"owner","auth":{"keys":[{"key":"EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn", "weight":1}],"threshold":1,"accounts":[{"permission":{"actor":"monetime","permission":"eosio.code"},"weight":1}],"waits":[]}}' -p monetime@owner

cleos push action eosio updateauth '{"account":"mondapp","permission":"active","parent":"owner","auth":{"keys":[{"key":"EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn", "weight":1}],"threshold":1,"accounts":[{"permission":{"actor":"mondapp","permission":"eosio.code"},"weight":1}],"waits":[]}}' -p mondapp@active


cleos set contract monetime /eosdev/monetime
cleos set contract token /eosdev/eosio.token
cleos set contract mondapp /eosdev/mondapp

cleos push action token create '["token", "1000000000.00 MON"]' -p token
cleos push action token issue '["subscriber1", "1000.00 MON", "initial balance"]' -p token
cleos push action token issue '["subscriber2", "1000.00 MON", "initial balance"]' -p token
cleos push action token issue '["subscriber3", "1000.00 MON", "initial balance"]' -p token
cleos push action token issue '["subscriber4", "1000.00 MON", "initial balance"]' -p token
cleos push action token issue '["subscriber5", "1000.00 MON", "initial balance"]' -p token

cleos push action token transfer '["subscriber1", "monetime", "500.00 MON", "deposit"]'  -p subscriber1
cleos push action token transfer '["subscriber2", "monetime", "500.00 MON", "deposit"]'  -p subscriber2
cleos push action token transfer '["subscriber3", "monetime", "500.00 MON", "deposit"]'  -p subscriber3
cleos push action token transfer '["subscriber4", "monetime", "500.00 MON", "deposit"]'  -p subscriber4
cleos push action token transfer '["subscriber5", "monetime", "500.00 MON", "deposit"]'  -p subscriber5

cleos push action monetime regdapp '["24h", "24 Hour Fitness", "token", "12.00 MON"]' -p monetime
cleos push action monetime regdapp '["wow", "World of Warcraft", "token", "3.50 MON"]' -p monetime
cleos push action monetime regdapp '["dappowner3", "Dateos - Find your soul mate", "token", "24.00 MON"]' -p monetime
cleos push action monetime regdapp '["dappowner4", "EOS Apron - Prepared Meals", "token", "3.50 MON"]' -p monetime
cleos push action monetime regdapp '["dappowner5", "Worldwide Media Subs", "token", "0.02 MON"]' -p monetime

cleos push action monetime subscribe '["subscriber1", "dappowner1"]' -p subscriber1
cleos push action monetime subscribe '["subscriber2", "dappowner1"]' -p subscriber2

cleos push action monetime subscribe '["subscriber1", "dappowner2"]' -p subscriber1
cleos push action monetime subscribe '["subscriber2", "dappowner2"]' -p subscriber2

cleos push action monetime renew '["dappowner1"]' -p dappowner1



cleos push action monetime regdapp '["mondapp", "SDK Test Dapp", "token", "500.00 MON"]' -p monetime
cleos push action monetime subscribe '["subscriber1", "mondapp"]' -p subscriber1
cleos push action mondapp rundapp '["subscriber1"]' -p mondapp
cleos push action monetime renew '["mondapp"]' -p mondapp






