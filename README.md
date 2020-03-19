## React component testing environment setup

### Testing with Enzyme library and Jest framework

1. Run in terminal
    - `jest -v`

    to check if the framework is installed, if not run
    - `npm i --save-dev jest`
    
    or 
    - `yarn add jest --dev`

2. Run in terminal 
    - `npm i --save-dev enzyme enzyme-adapter-react-16 @types/jest`
 
    or 
    - `yarn add enzyme enzyme-adapter-react-16 @types/jest --dev`

3. Create file **SetupTests.js** in **src** folder (if the file does not exist)

4. Setup the configuration below into the **SetupTests.js**:
   ```
   import Enzyme from 'enzyme';
   import Adapter from 'enzyme-adapter-react-16';
      
   Enzyme.configure({ adapter: new Adapter() });
   ```
5. Create **\_\_tests\_\_** folder in a folder of testable React Component 

6. Create file **\<componentName\>.spec.js** in the **\_\_tests\_\_** folder
  
7. For snapshot testing run in terminal
   - `npm i --save-dev enzyme-to-json`
    
   or 
   - `yarn add enzyme-to-json --dev`
   
   and add jest configuration to **package.json**
   ```
   "jest": {
       "snapshotSerializers": [
         "enzyme-to-json/serializer"
       ]
   }
   ```
8. For testCoverage mode add to "scripts" of **package.json** 
   
   `"testCoverage": "node_modules/.bin/react-scripts test --coverage --watchAll"` 
   
   and add to jest configuration in **package.json**
   
   `"collectCoverageFrom": ["src/components/**/*.{js,jsx}"`]`
   
   thus after items 7 and 8 jest configuration should be
   ```
    "jest": {
        "snapshotSerializers": [
          "enzyme-to-json/serializer"
        ],
        "collectCoverageFrom": [
          "src/components/**/*.{js,jsx}"
        ]
      }
   ```
