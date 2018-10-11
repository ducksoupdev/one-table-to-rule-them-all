var validate = (function() {
  return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
    var vErrors = null;
    var errors = 0;
    if ((data && typeof data === "object" && !Array.isArray(data))) {
      {
        var valid1 = true;
        if (data.striped === undefined) {
          valid1 = true;
        } else {
          var errs_1 = errors;
          if (typeof data.striped !== "boolean") {
            validate.errors = [{
              keyword: 'type',
              dataPath: (dataPath || '') + '.striped',
              schemaPath: '#/properties/striped/type',
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
          if (data.dark === undefined) {
            valid1 = true;
          } else {
            var errs_1 = errors;
            if (typeof data.dark !== "boolean") {
              validate.errors = [{
                keyword: 'type',
                dataPath: (dataPath || '') + '.dark',
                schemaPath: '#/properties/dark/type',
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
            if (data.bordered === undefined) {
              valid1 = true;
            } else {
              var errs_1 = errors;
              if (typeof data.bordered !== "boolean") {
                validate.errors = [{
                  keyword: 'type',
                  dataPath: (dataPath || '') + '.bordered',
                  schemaPath: '#/properties/bordered/type',
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
              if (data.hover === undefined) {
                valid1 = true;
              } else {
                var errs_1 = errors;
                if (typeof data.hover !== "boolean") {
                  validate.errors = [{
                    keyword: 'type',
                    dataPath: (dataPath || '') + '.hover',
                    schemaPath: '#/properties/hover/type',
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
                if (data.fixedHeight === undefined) {
                  valid1 = true;
                } else {
                  var errs_1 = errors;
                  if (typeof data.fixedHeight !== "boolean") {
                    validate.errors = [{
                      keyword: 'type',
                      dataPath: (dataPath || '') + '.fixedHeight',
                      schemaPath: '#/properties/fixedHeight/type',
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
                  if (data.headers === undefined) {
                    valid1 = true;
                  } else {
                    var errs_1 = errors;
                    if (typeof data.headers !== "boolean") {
                      validate.errors = [{
                        keyword: 'type',
                        dataPath: (dataPath || '') + '.headers',
                        schemaPath: '#/properties/headers/type',
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
                    if (data.headClassName === undefined) {
                      valid1 = true;
                    } else {
                      var errs_1 = errors;
                      if (typeof data.headClassName !== "string") {
                        validate.errors = [{
                          keyword: 'type',
                          dataPath: (dataPath || '') + '.headClassName',
                          schemaPath: '#/properties/headClassName/type',
                          params: {
                            type: 'string'
                          },
                          message: 'should be string'
                        }];
                        return false;
                      }
                      var valid1 = errors === errs_1;
                    }
                    if (valid1) {
                      if (data.footers === undefined) {
                        valid1 = true;
                      } else {
                        var errs_1 = errors;
                        if (typeof data.footers !== "boolean") {
                          validate.errors = [{
                            keyword: 'type',
                            dataPath: (dataPath || '') + '.footers',
                            schemaPath: '#/properties/footers/type',
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
                        if (data.footClassName === undefined) {
                          valid1 = true;
                        } else {
                          var errs_1 = errors;
                          if (typeof data.footClassName !== "string") {
                            validate.errors = [{
                              keyword: 'type',
                              dataPath: (dataPath || '') + '.footClassName',
                              schemaPath: '#/properties/footClassName/type',
                              params: {
                                type: 'string'
                              },
                              message: 'should be string'
                            }];
                            return false;
                          }
                          var valid1 = errors === errs_1;
                        }
                        if (valid1) {
                          if (data.displayedEntries === undefined) {
                            valid1 = true;
                          } else {
                            var errs_1 = errors;
                            if (typeof data.displayedEntries !== "boolean") {
                              validate.errors = [{
                                keyword: 'type',
                                dataPath: (dataPath || '') + '.displayedEntries',
                                schemaPath: '#/properties/displayedEntries/type',
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
                              valid1 = false;
                              validate.errors = [{
                                keyword: 'required',
                                dataPath: (dataPath || '') + "",
                                schemaPath: '#/required',
                                params: {
                                  missingProperty: 'schema'
                                },
                                message: 'should have required property \'schema\''
                              }];
                              return false;
                            } else {
                              var errs_1 = errors;
                              if ((!data1 || typeof data1 !== "object" || Array.isArray(data1))) {
                                validate.errors = [{
                                  keyword: 'type',
                                  dataPath: (dataPath || '') + '.schema',
                                  schemaPath: '#/properties/schema/type',
                                  params: {
                                    type: 'object'
                                  },
                                  message: 'should be object'
                                }];
                                return false;
                              }
                              var valid1 = errors === errs_1;
                            }
                            if (valid1) {
                              var data1 = data.pageIndex;
                              if (data1 === undefined) {
                                valid1 = true;
                              } else {
                                var errs_1 = errors;
                                if ((typeof data1 !== "number" || (data1 % 1) || data1 !== data1)) {
                                  validate.errors = [{
                                    keyword: 'type',
                                    dataPath: (dataPath || '') + '.pageIndex',
                                    schemaPath: '#/properties/pageIndex/type',
                                    params: {
                                      type: 'integer'
                                    },
                                    message: 'should be integer'
                                  }];
                                  return false;
                                }
                                if (typeof data1 === "number") {
                                  if (data1 < 0 || data1 !== data1) {
                                    validate.errors = [{
                                      keyword: 'minimum',
                                      dataPath: (dataPath || '') + '.pageIndex',
                                      schemaPath: '#/properties/pageIndex/minimum',
                                      params: {
                                        comparison: '>=',
                                        limit: 0,
                                        exclusive: false
                                      },
                                      message: 'should be >= 0'
                                    }];
                                    return false;
                                  }
                                }
                                var valid1 = errors === errs_1;
                              }
                              if (valid1) {
                                var data1 = data.pageSize;
                                if (data1 === undefined) {
                                  valid1 = true;
                                } else {
                                  var errs_1 = errors;
                                  var errs__1 = errors,
                                    prevValid1 = false,
                                    valid1 = false,
                                    passingSchemas1 = null;
                                  var errs_2 = errors;
                                  if ((typeof data1 !== "number" || (data1 % 1) || data1 !== data1)) {
                                    var err = {
                                      keyword: 'type',
                                      dataPath: (dataPath || '') + '.pageSize',
                                      schemaPath: '#/properties/pageSize/oneOf/0/type',
                                      params: {
                                        type: 'integer'
                                      },
                                      message: 'should be integer'
                                    };
                                    if (vErrors === null) vErrors = [err];
                                    else vErrors.push(err);
                                    errors++;
                                  }
                                  if (typeof data1 === "number") {
                                    if (data1 > 10 || data1 !== data1) {
                                      var err = {
                                        keyword: 'maximum',
                                        dataPath: (dataPath || '') + '.pageSize',
                                        schemaPath: '#/properties/pageSize/oneOf/0/maximum',
                                        params: {
                                          comparison: '<=',
                                          limit: 10,
                                          exclusive: false
                                        },
                                        message: 'should be <= 10'
                                      };
                                      if (vErrors === null) vErrors = [err];
                                      else vErrors.push(err);
                                      errors++;
                                    } else {
                                      if (data1 < 10 || data1 !== data1) {
                                        var err = {
                                          keyword: 'minimum',
                                          dataPath: (dataPath || '') + '.pageSize',
                                          schemaPath: '#/properties/pageSize/oneOf/0/minimum',
                                          params: {
                                            comparison: '>=',
                                            limit: 10,
                                            exclusive: false
                                          },
                                          message: 'should be >= 10'
                                        };
                                        if (vErrors === null) vErrors = [err];
                                        else vErrors.push(err);
                                        errors++;
                                      }
                                    }
                                  }
                                  var valid2 = errors === errs_2;
                                  if (valid2) {
                                    valid1 = prevValid1 = true;
                                    passingSchemas1 = 0;
                                  }
                                  var errs_2 = errors;
                                  if ((typeof data1 !== "number" || (data1 % 1) || data1 !== data1)) {
                                    var err = {
                                      keyword: 'type',
                                      dataPath: (dataPath || '') + '.pageSize',
                                      schemaPath: '#/properties/pageSize/oneOf/1/type',
                                      params: {
                                        type: 'integer'
                                      },
                                      message: 'should be integer'
                                    };
                                    if (vErrors === null) vErrors = [err];
                                    else vErrors.push(err);
                                    errors++;
                                  }
                                  if (typeof data1 === "number") {
                                    if (data1 > 25 || data1 !== data1) {
                                      var err = {
                                        keyword: 'maximum',
                                        dataPath: (dataPath || '') + '.pageSize',
                                        schemaPath: '#/properties/pageSize/oneOf/1/maximum',
                                        params: {
                                          comparison: '<=',
                                          limit: 25,
                                          exclusive: false
                                        },
                                        message: 'should be <= 25'
                                      };
                                      if (vErrors === null) vErrors = [err];
                                      else vErrors.push(err);
                                      errors++;
                                    } else {
                                      if (data1 < 25 || data1 !== data1) {
                                        var err = {
                                          keyword: 'minimum',
                                          dataPath: (dataPath || '') + '.pageSize',
                                          schemaPath: '#/properties/pageSize/oneOf/1/minimum',
                                          params: {
                                            comparison: '>=',
                                            limit: 25,
                                            exclusive: false
                                          },
                                          message: 'should be >= 25'
                                        };
                                        if (vErrors === null) vErrors = [err];
                                        else vErrors.push(err);
                                        errors++;
                                      }
                                    }
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
                                    var errs_2 = errors;
                                    if ((typeof data1 !== "number" || (data1 % 1) || data1 !== data1)) {
                                      var err = {
                                        keyword: 'type',
                                        dataPath: (dataPath || '') + '.pageSize',
                                        schemaPath: '#/properties/pageSize/oneOf/2/type',
                                        params: {
                                          type: 'integer'
                                        },
                                        message: 'should be integer'
                                      };
                                      if (vErrors === null) vErrors = [err];
                                      else vErrors.push(err);
                                      errors++;
                                    }
                                    if (typeof data1 === "number") {
                                      if (data1 > 50 || data1 !== data1) {
                                        var err = {
                                          keyword: 'maximum',
                                          dataPath: (dataPath || '') + '.pageSize',
                                          schemaPath: '#/properties/pageSize/oneOf/2/maximum',
                                          params: {
                                            comparison: '<=',
                                            limit: 50,
                                            exclusive: false
                                          },
                                          message: 'should be <= 50'
                                        };
                                        if (vErrors === null) vErrors = [err];
                                        else vErrors.push(err);
                                        errors++;
                                      } else {
                                        if (data1 < 50 || data1 !== data1) {
                                          var err = {
                                            keyword: 'minimum',
                                            dataPath: (dataPath || '') + '.pageSize',
                                            schemaPath: '#/properties/pageSize/oneOf/2/minimum',
                                            params: {
                                              comparison: '>=',
                                              limit: 50,
                                              exclusive: false
                                            },
                                            message: 'should be >= 50'
                                          };
                                          if (vErrors === null) vErrors = [err];
                                          else vErrors.push(err);
                                          errors++;
                                        }
                                      }
                                    }
                                    var valid2 = errors === errs_2;
                                    if (valid2 && prevValid1) {
                                      valid1 = false;
                                      passingSchemas1 = [passingSchemas1, 2];
                                    } else {
                                      if (valid2) {
                                        valid1 = prevValid1 = true;
                                        passingSchemas1 = 2;
                                      }
                                    }
                                  }
                                  if (!valid1) {
                                    var err = {
                                      keyword: 'oneOf',
                                      dataPath: (dataPath || '') + '.pageSize',
                                      schemaPath: '#/properties/pageSize/oneOf',
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
                                  var data1 = data.visiblePageCount;
                                  if (data1 === undefined) {
                                    valid1 = true;
                                  } else {
                                    var errs_1 = errors;
                                    if ((typeof data1 !== "number" || (data1 % 1) || data1 !== data1)) {
                                      validate.errors = [{
                                        keyword: 'type',
                                        dataPath: (dataPath || '') + '.visiblePageCount',
                                        schemaPath: '#/properties/visiblePageCount/type',
                                        params: {
                                          type: 'integer'
                                        },
                                        message: 'should be integer'
                                      }];
                                      return false;
                                    }
                                    if (typeof data1 === "number") {
                                      if (data1 < 4 || data1 !== data1) {
                                        validate.errors = [{
                                          keyword: 'minimum',
                                          dataPath: (dataPath || '') + '.visiblePageCount',
                                          schemaPath: '#/properties/visiblePageCount/minimum',
                                          params: {
                                            comparison: '>=',
                                            limit: 4,
                                            exclusive: false
                                          },
                                          message: 'should be >= 4'
                                        }];
                                        return false;
                                      }
                                    }
                                    var valid1 = errors === errs_1;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
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
    "striped": {
      "type": "boolean"
    },
    "dark": {
      "type": "boolean"
    },
    "bordered": {
      "type": "boolean"
    },
    "hover": {
      "type": "boolean"
    },
    "fixedHeight": {
      "type": "boolean"
    },
    "headers": {
      "type": "boolean"
    },
    "headClassName": {
      "type": "string"
    },
    "footers": {
      "type": "boolean"
    },
    "footClassName": {
      "type": "string"
    },
    "displayedEntries": {
      "type": "boolean"
    },
    "schema": {
      "type": "object"
    },
    "pageIndex": {
      "type": "integer",
      "minimum": 0
    },
    "pageSize": {
      "oneOf": [{
        "type": "integer",
        "minimum": 10,
        "maximum": 10
      }, {
        "type": "integer",
        "minimum": 25,
        "maximum": 25
      }, {
        "type": "integer",
        "minimum": 50,
        "maximum": 50
      }]
    },
    "visiblePageCount": {
      "type": "integer",
      "minimum": 4
    }
  },
  "required": ["schema"]
};
validate.errors = null;

export default validate;
