import { Handler } from 'aws-lambda'
import {
  AttributeValue,
  DynamoDBClient,
  PutItemCommand,
  ScanCommand
} from '@aws-sdk/client-dynamodb'
import { unmarshall } from '@aws-sdk/util-dynamodb'

const client = new DynamoDBClient({ region: 'us-east-1' })

export const addFrogSpottingLocation: Handler = async (
  event: any,
) => {
  try {
    const parsedReqBody = JSON.parse(event.body)
    const params = {
      TableName: 'frogSpotting',
      Item: {
        id: { S: Date.now().toString() },
        frogType: { S: parsedReqBody.frogType },
        location: { S: parsedReqBody.location }
      },
      ExclusiveStartKey: undefined
    }

    const command = new PutItemCommand(params)
    const response = await client.send(command)
    console.log(response)

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Spotted frog is added',
        },
        null,
        2
      ),
    }
  } catch (error: any) {
    throw new Error(error)
  }
}

export const getFrogSpottingLocations: Handler = async (
) => {
  const params = {
    TableName: 'frogSpotting',
  }

  const scanResults: Record<string, AttributeValue>[] = []
  let items
  do {
    const command = new ScanCommand(params)
    items = await client.send(command)
    items?.Items?.forEach(item => scanResults.push(unmarshall(item)))
  } while (typeof items.LastEvaluatedKey !== 'undefined')

  // console.log(unmarshall(scanResults))
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        data: scanResults,
      },
      null,
      2
    ),
  }
}
