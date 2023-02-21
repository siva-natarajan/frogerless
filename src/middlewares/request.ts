export const jsonParser = async (event: any) => {
  return JSON.parse(event.body)
}
