'use strict';
var validate = (function() {
  var refVal = [];
  return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
    'use strict';
    var vErrors = null;
    var errors = 0;
    if ((data && typeof data === "object" && !Array.isArray(data))) {
      if (true) {
        var errs__0 = errors;
        var valid1 = true;
        var data1 = data.inElement;
        if (data1 === undefined) {
          valid1 = false;
          validate.errors = [{
            keyword: 'required',
            dataPath: (dataPath || '') + "",
            schemaPath: '#/required',
            params: {
              missingProperty: 'inElement'
            },
            message: 'should have required property \'inElement\''
          }];
          return false;
        } else {
          var errs_1 = errors;
          var errs__1 = errors,
            prevValid1 = false,
            valid1 = false,
            passingSchemas1 = null;
          var errs_2 = errors;
          if (typeof data1 !== "string") {
            var err = {
              keyword: 'type',
              dataPath: (dataPath || '') + '.inElement',
              schemaPath: '#/properties/inElement/oneOf/0/type',
              params: {
                type: 'string'
              },
              message: 'should be string'
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          }
          var valid2 = errors === errs_2;
          if (valid2) {
            valid1 = prevValid1 = true;
            passingSchemas1 = 0;
          }
          var errs_2 = errors;
          if ((!data1 || typeof data1 !== "object" || Array.isArray(data1))) {
            var err = {
              keyword: 'type',
              dataPath: (dataPath || '') + '.inElement',
              schemaPath: '#/properties/inElement/oneOf/1/type',
              params: {
                type: 'object'
              },
              message: 'should be object'
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          }
          var valid2 = errors === errs_2;
          if (valid2 && prevValid1) {
            valid1 = false;
            passingSchemas1 = [passingSchemas1, 1];
          } else {
            if (valid2) {
              valid1 = prevValid1 = true;
              passingSchemas1 = 1;
            }
          }
          if (!valid1) {
            var err = {
              keyword: 'oneOf',
              dataPath: (dataPath || '') + '.inElement',
              schemaPath: '#/properties/inElement/oneOf',
              params: {
                passingSchemas: passingSchemas1
              },
              message: 'should match exactly one schema in oneOf'
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
            validate.errors = vErrors;
            return false;
          } else {
            errors = errs__1;
            if (vErrors !== null) {
              if (errs__1) vErrors.length = errs__1;
              else vErrors = null;
            }
          }
          var valid1 = errors === errs_1;
        }
        if (valid1) {
          if (data.enableHover === undefined) {
            valid1 = true;
          } else {
            var errs_1 = errors;
            if (typeof data.enableHover !== "boolean") {
              validate.errors = [{
                keyword: 'type',
                dataPath: (dataPath || '') + '.enableHover',
                schemaPath: '#/properties/enableHover/type',
                params: {
                  type: 'boolean'
                },
                message: 'should be boolean'
              }];
              return false;
            }
            var valid1 = errors === errs_1;
          }
          if (valid1) {
            var data1 = data.schema;
            if (data1 === undefined) {
              valid1 = true;
            } else {
              var errs_1 = errors;
              var errs__1 = errors,
                prevValid1 = false,
                valid1 = false,
                passingSchemas1 = null;
              var errs_2 = errors;
              if (typeof data1 !== "string") {
                var err = {
                  keyword: 'type',
                  dataPath: (dataPath || '') + '.schema',
                  schemaPath: '#/properties/schema/oneOf/0/type',
                  params: {
                    type: 'string'
                  },
                  message: 'should be string'
                };
                if (vErrors === null) vErrors = [err];
                else vErrors.push(err);
                errors++;
              }
              var valid2 = errors === errs_2;
              if (valid2) {
                valid1 = prevValid1 = true;
                passingSchemas1 = 0;
              }
              var errs_2 = errors;
              if ((!data1 || typeof data1 !== "object" || Array.isArray(data1))) {
                var err = {
                  keyword: 'type',
                  dataPath: (dataPath || '') + '.schema',
                  schemaPath: '#/properties/schema/oneOf/1/type',
                  params: {
                    type: 'object'
                  },
                  message: 'should be object'
                };
                if (vErrors === null) vErrors = [err];
                else vErrors.push(err);
                errors++;
              }
              var valid2 = errors === errs_2;
              if (valid2 && prevValid1) {
                valid1 = false;
                passingSchemas1 = [passingSchemas1, 1];
              } else {
                if (valid2) {
                  valid1 = prevValid1 = true;
                  passingSchemas1 = 1;
                }
              }
              if (!valid1) {
                var err = {
                  keyword: 'oneOf',
                  dataPath: (dataPath || '') + '.schema',
                  schemaPath: '#/properties/schema/oneOf',
                  params: {
                    passingSchemas: passingSchemas1
                  },
                  message: 'should match exactly one schema in oneOf'
                };
                if (vErrors === null) vErrors = [err];
                else vErrors.push(err);
                errors++;
                validate.errors = vErrors;
                return false;
              } else {
                errors = errs__1;
                if (vErrors !== null) {
                  if (errs__1) vErrors.length = errs__1;
                  else vErrors = null;
                }
              }
              var valid1 = errors === errs_1;
            }
            if (valid1) {
              var data1 = data.data;
              if (data1 === undefined) {
                valid1 = false;
                validate.errors = [{
                  keyword: 'required',
                  dataPath: (dataPath || '') + "",
                  schemaPath: '#/required',
                  params: {
                    missingProperty: 'data'
                  },
                  message: 'should have required property \'data\''
                }];
                return false;
              } else {
                var errs_1 = errors;
                var errs__1 = errors,
                  prevValid1 = false,
                  valid1 = false,
                  passingSchemas1 = null;
                var errs_2 = errors;
                if (typeof data1 !== "string") {
                  var err = {
                    keyword: 'type',
                    dataPath: (dataPath || '') + '.data',
                    schemaPath: '#/properties/data/oneOf/0/type',
                    params: {
                      type: 'string'
                    },
                    message: 'should be string'
                  };
                  if (vErrors === null) vErrors = [err];
                  else vErrors.push(err);
                  errors++;
                }
                var valid2 = errors === errs_2;
                if (valid2) {
                  valid1 = prevValid1 = true;
                  passingSchemas1 = 0;
                }
                var errs_2 = errors;
                if (!Array.isArray(data1)) {
                  var err = {
                    keyword: 'type',
                    dataPath: (dataPath || '') + '.data',
                    schemaPath: '#/properties/data/oneOf/1/type',
                    params: {
                      type: 'array'
                    },
                    message: 'should be array'
                  };
                  if (vErrors === null) vErrors = [err];
                  else vErrors.push(err);
                  errors++;
                }
                var valid2 = errors === errs_2;
                if (valid2 && prevValid1) {
                  valid1 = false;
                  passingSchemas1 = [passingSchemas1, 1];
                } else {
                  if (valid2) {
                    valid1 = prevValid1 = true;
                    passingSchemas1 = 1;
                  }
                }
                if (!valid1) {
                  var err = {
                    keyword: 'oneOf',
                    dataPath: (dataPath || '') + '.data',
                    schemaPath: '#/properties/data/oneOf',
                    params: {
                      passingSchemas: passingSchemas1
                    },
                    message: 'should match exactly one schema in oneOf'
                  };
                  if (vErrors === null) vErrors = [err];
                  else vErrors.push(err);
                  errors++;
                  validate.errors = vErrors;
                  return false;
                } else {
                  errors = errs__1;
                  if (vErrors !== null) {
                    if (errs__1) vErrors.length = errs__1;
                    else vErrors = null;
                  }
                }
                var valid1 = errors === errs_1;
              }
            }
          }
        }
      }
    } else {
      validate.errors = [{
        keyword: 'type',
        dataPath: (dataPath || '') + "",
        schemaPath: '#/type',
        params: {
          type: 'object'
        },
        message: 'should be object'
      }];
      return false;
    }
    validate.errors = vErrors;
    return errors === 0;
  };
})();
validate.schema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "inElement": {
      "oneOf": [{
        "type": "string"
      }, {
        "type": "object"
      }]
    },
    "enableHover": {
      "type": "boolean"
    },
    "schema": {
      "oneOf": [{
        "type": "string"
      }, {
        "type": "object"
      }]
    },
    "data": {
      "oneOf": [{
        "type": "string"
      }, {
        "type": "array"
      }]
    }
  },
  "required": ["inElement", "data"]
};
validate.errors = null;
export default validate
