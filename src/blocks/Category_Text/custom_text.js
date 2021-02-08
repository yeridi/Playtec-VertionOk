import * as Blockly from '../../blockly copy/core';

import '../../fields/BlocklyReactField';
import '../../fields/DateField';

var react_text = {
	type: "react_text",
	message0: "%1",
	args0: [{
		type: "field_input",
		name: "TEXT",
		text: ""
	}],
	output: "String",
	helpUrl: "%{BKY_TEXT_TEXT_HELPURL}",
	tooltip: "%{BKY_TEXT_TEXT_TOOLTIP}",
	extensions: ["text_quotes", "parent_tooltip_when_inline"],
    colour :Blockly.Arduino.colores.cate_text
}
Blockly.Blocks['react_text'] = {
	init: function () {
		this.jsonInit(react_text);
	}
};

var react_textapos = {
	type: "react_textapos",
	message0: "%1",
	args0: [{
		type: "field_input",
		name: "TEXT",
		text: ''
	}],
	output: "String",
	helpUrl: "%{BKY_TEXT_TEXT_HELPURL}",
	tooltip: "%{BKY_TEXT_TEXT_TOOLTIP}",
	extensions: ["text_quotes2", "parent_tooltip_when_inline"],
    colour :Blockly.Arduino.colores.cate_text
}
Blockly.Blocks['react_textapos'] = {
	init: function () {
		this.jsonInit(react_textapos);
	}
};
var reactcomment_out = {

	type: "react_comment_out",
	message0: "%{BKY_COMMENTOUT}",
	message1: "%{BKY_CONTROLS_HUECO} %1",
	args1: [{
		type: "input_statement",
		name: "CONTENT"
	}],
	previousStatement: null,
	nextStatement: null,
    colour :Blockly.Arduino.colores.cate_text
}
Blockly.Blocks['react_comment_out'] = {
	init: function () {
		this.jsonInit(reactcomment_out);
	}
};
