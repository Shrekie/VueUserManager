var fs = require("fs");
const path = require("path");

import React from 'react';

const data = fs.readFileSync(path.resolve(__dirname, "../components/Entry/Login.vue"), "utf8");

const reactVueTemplateParser = require('vue-native-scripts');

const ComponentTest = reactVueTemplateParser.compileVueToRn(data).output;

import renderer from 'react-test-renderer';

describe('App Component', () => {

    it("renders correctly", () => {
        const tree = renderer.create(<ComponentTest />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});