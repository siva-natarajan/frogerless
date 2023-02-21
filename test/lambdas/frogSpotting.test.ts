import { addFrogSpottingLocation } from "../../src/lambdas/frogSpotting"

const callback = jest.fn().mockImplementation((errorMsg) => {
  if (errorMsg) throw new Error(errorMsg);
});
const event = { body: { frogType: "some", location: "there" } };
const context = {
  callbackWaitsForEmptyEventLoop: false,
  functionName: "string",
  functionVersion: "string",
  invokedFunctionArn: "string",
  memoryLimitInMB: "string",
  awsRequestId: "string",
  logGroupName: "string",
  logStreamName: "string",
  getRemainingTimeInMillis: () => 1,
  done: () => 1,
  fail: () => 1,
  succeed: () => 1
}
describe('adding frog spotting', () => {
  it('some', async () => {
    const response = await addFrogSpottingLocation(event, context, callback)
    console.log(response)
  })
})


describe('getting all frog spots', () => { it('some', () => expect(1).toBe(1)) })