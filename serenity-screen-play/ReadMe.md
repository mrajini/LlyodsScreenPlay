Prerequisites
***************
1.Node version ——-v6.11.0

2.npm version ——-3.10.10

3.Java run time environment ——java version "1.8.0_144"
Java(TM) SE Runtime Environment (build 1.8.0_144-b01)

4.A web browser ——Google chrome

5.Clone the repo from github

6.Run through terminal using as below
 
 (a). npm package.json
 
 (b). npm install
 
 (c). To run the test using tags -----npm run e2e-tag @SmokeTest ----For all the tests
                                 -----npm run e2e-tag @Login ----For Login
                                 -----npm run e2e-tag @Registration ----For Registration with savings account
                                  -----npm run e2e-tag @Credit ----For Registration with credit card account
                                   -----npm run e2e-tag @Loan ----For Registration with loan account
                                    -----npm run e2e-tag @Mortgage ----For Registration with mortgage account

 (d). To run it headless uncomment ---headless under desirabilities defined in protractor.conf.js