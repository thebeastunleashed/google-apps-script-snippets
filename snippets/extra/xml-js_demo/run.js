/**
 *
 */
function runXML2JSON() {
  var xml =
    '<?xml version="1.0" encoding="utf-8"?>' +
    '<note importance="high" logged="true">' +
    '    <title>Happy</title>' +
    '    <todo>Work</todo>' +
    '    <todo>Play</todo>' +
    '</note>';
  var result1 = convert.xml2json(xml, { compact: true, spaces: 4 });
  var result2 = convert.xml2json(xml, { compact: false, spaces: 4 });
  console.log(result1, '\n', result2);
}

function runJSON2XML() {
  var json = '{"name":{"_text":"Ali"},"age":{"_text":"30"}}';
  var options = {
    compact: true,
    textFn: function (val, elementName) {
      return elementName === 'name' ? String(val).toUpperCase() : val;
    },
  };
  var result = convert.json2xml(json, options);
  console.log(result); // <name>ALI</name><age>30</age>
}
