module.exports = {
  tables: [
    {
      TableName: `frogSpotting`,
      KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }, { AttributeName: 'frogType', KeyType: 'RANGE' }],
      AttributeDefinitions: [{ AttributeName: 'id', AttributeType: 'S' }, { AttributeName: 'frogType', AttributeType: 'S' }],
      ProvisionedThroughput: { ReadCapacityUnits: 1, WriteCapacityUnits: 1 },
    },
  ],
};