export const jsonParser = async (event: any, context: any) => {
  return JSON.parse(event.body)
}
